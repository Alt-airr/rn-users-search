import {StyleSheet} from "react-native";
import {windowHeight} from "./constants/constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#444645',
        alignItems: 'center',
        height: windowHeight
    },
    content: {
        width: '100%',
        padding: 20,
        margin: 0,
        justifyContent: 'center'
    },
    list: {
        marginTop: 20,
        marginBottom: 50,
        height: '55%'
    },
    blockName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});