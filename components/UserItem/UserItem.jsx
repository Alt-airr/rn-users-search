import React  from "react";
import {View, Text, Image,  TouchableHighlight} from "react-native";
import {styles} from "./userItemStyles";

export const UserItem = ({ user, openModal }) => {
    return (
        <View>
        <TouchableHighlight    onPress={() => openModal({show: true, uuid: user.login.uuid})}>
            <View style={styles.userItem}>
               <Image style={styles.photo} source={{uri : user.picture.thumbnail}}/>
               <Text style={[styles.info, user.gender === 'male' ? styles.male : user.gender === 'female'? styles.female : null]}
                     ellipsizeMode='tail'>
                   {user.name.first} {user.name.last} - {user.dob.age} years old - {user.gender}
               </Text>
            </View>
        </TouchableHighlight>

        </View>
    );
};

