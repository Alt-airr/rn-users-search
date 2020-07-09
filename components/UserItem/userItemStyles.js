import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    userItem: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        marginTop: 3,
        backgroundColor: 'white',
        borderRadius: 5
    },
    photo: {
        borderRadius: 50,
        width: 40,
        height: 40,
        marginRight: 20
    },
    info: {
      fontSize: 15,
      fontWeight: 'bold',
        flex: 1
    },
    male: {
        color: 'blue'
    },
    female: {
        color: 'red'
    }
});