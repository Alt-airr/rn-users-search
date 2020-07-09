import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    filterText: {
        fontSize: 28,
        color: 'white'
    },
    input: {
        backgroundColor: '#3E3E3B',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#bdc3c7',
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%'
    },
    ageBlock: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    ageInput: {
        width: '25%',
    },
    nameInput: {
        width: '100%',
    },
    sexInput: {
        width: '20%',
        backgroundColor: 'white'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    clearValues: {
        padding: 10,
        backgroundColor: "#464451",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bdc3c7',
    },
    picker: {
        borderRadius: 10,
        borderWidth: 1,
        width: '30%',
        borderColor: '#bdc3c7',
        overflow: 'hidden'
    }
});
