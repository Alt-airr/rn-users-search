import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 23,
        width: '90%',
        borderWidth: 5,
        borderColor: '#30d0fe',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "grey",
        alignItems: 'center',
        borderRadius: 4,
        padding: 8,
        minWidth: 50
    },
    buttonText: {
        color: 'white'
    },
    actionBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        textAlign: 'center',
        marginTop: 20
    },
    textStyle: {
        color: "grey",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});