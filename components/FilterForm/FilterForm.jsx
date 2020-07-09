import { Text, TextInput, TouchableHighlight, View, SafeAreaView} from "react-native";
import React, {useEffect, useState} from "react";
import RNPickerSelect from 'react-native-picker-select';
import {styles} from './filterFormStyles'


export const FilterForm = ({users, setFilteredUsers, setLoading}) => {

    const [name, setName] = useState('');
    const [ageTo, setAgeTo] = useState('');
    const [ageFrom, setAgeFrom] = useState('');
    const [sexValue, setSexValue] = useState(null);

    const clearValues = () => {
        setName('');
        setAgeTo('');
        setAgeFrom('');
        setSexValue(null)
    };

    // Imitation of server delay at filtration func
    const mockServerFilter = (result) =>{
        setLoading(true);
        setTimeout(function() {
            setFilteredUsers(result);
            setLoading(false)
        }, 400);
   };

    useEffect(() => {
        const nameRegex = name && new RegExp(`${name}`, "gi");
        const result = users.filter(
            user =>
                (!nameRegex || nameRegex.test(user.name.first) ||  nameRegex.test(user.name.last)) &&
                (sexValue ===  null || user.gender === sexValue) &&
                (ageTo === '' || user.dob.age < ageTo) &&
                (ageFrom === '' || user.dob.age > ageFrom)
        );
        mockServerFilter(result)
    }, [name.length > 2, sexValue, ageFrom, ageTo, users]);

    return (
        <SafeAreaView style={styles.wrapper}>
            <TextInput style={[styles.input, styles.nameInput]}
                       onChangeText={v => setName(v)}
                       defaultValue={name}
                       placeholder='Start taping user name...'
            />
            <View style={styles.block}>
                <View style={styles.ageBlock}>
                    <Text style={styles.filterText}>Age from </Text>
                    <TextInput style={[styles.input, styles.ageInput]}
                               onChangeText={v => setAgeFrom(v)}
                               defaultValue={ageFrom}
                               keyboardType={'numeric'}
                    />
                    <Text style={styles.filterText}> to </Text>
                    <TextInput style={[styles.input, styles.ageInput]}
                               onChangeText={v => setAgeTo(v)}
                               defaultValue={ageTo}
                               keyboardType={'numeric'}
                    />
                </View>
            </View>
            <View style={styles.block}>
                    <Text style={styles.filterText}>Sex : </Text>
                    <View style={styles.picker}>
                        <RNPickerSelect style={{backgroundColor: 'white'}}
                                        onValueChange={e => setSexValue(e)}
                                        items={[
                                            {label: 'Male', value: 'male'},
                                            {label: 'Female', value: 'female'},
                                            {label: 'Both', value: 'both'},
                                        ]}
                        />
                    </View>
                    <TouchableHighlight
                        style={styles.clearValues}
                        onPress={() => {
                            clearValues();
                        }}
                    >
                        <Text style={styles.buttonText}>Clear Values</Text>
                    </TouchableHighlight>
                </View>
        </SafeAreaView>
    )
}



