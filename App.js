import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useFetchUsers} from "./services";
import {FilterForm, Header, UserItem} from "./components";
import {CustomModal} from "./components/common";
import {styles} from "./AppStyles";
import {Bars} from 'react-native-loader';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [modalShow, setModalShow] = useState({show: false, uuid: null});

    // Getting list of users
    if (users.length <= 0) {
        useFetchUsers({setUsers: setUsers, setLoading: setLoading})
    }

    // Sort users by character blocks
    const prevSortedUsers = filteredUsers.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);

    let sortedUsers = {};
    prevSortedUsers.forEach(function (user) {
        const firstChar = user.name.first.split('')[0];
        if (typeof sortedUsers[firstChar] === 'undefined') {
            sortedUsers[firstChar] = []
        }
        sortedUsers[firstChar].push(user)
    });

    let mappedUsers = null;
    if (Object.keys(sortedUsers)) {
        mappedUsers = Object.keys(sortedUsers).map(
            k => <View key={k}>
                <Text style={styles.blockName}>
                    {k + ' :'}
                </Text>
                <View>
                    {sortedUsers[k].map(
                        user => <UserItem user={user} openModal={setModalShow} key={user.login.uuid}/>
                    )}
                </View>
            </View>
        )
    }

    // User invite func
    const inviteUser = (uuid) => {
        const newSortedUsers = users.filter(u => u.login.uuid !== uuid);
        setUsers(newSortedUsers)
    };

    // Conditional content rendering
    const content = loading ? <Bars size={30} color="#FDAAFF"/> :
        filteredUsers.length > 0 ?
            (
                <SafeAreaView>
                    <ScrollView style={styles.list}>
                        {mappedUsers}
                    </ScrollView>
                </SafeAreaView>
            ) : (
                <Text style={styles.blockName}>Результатов соответствующих запросу не найдено :(</Text>
            );

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <FilterForm users={users} setFilteredUsers={setFilteredUsers} setLoading={setLoading}/>
                {content}
                <CustomModal show={modalShow.show}
                             setModalShow={setModalShow}
                             uuid={modalShow.uuid}
                             inviteUser={inviteUser}
                />
            </View>
        </SafeAreaView>
    );
}



