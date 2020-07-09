import {SafeAreaView, Text} from "react-native";
import React from "react";
import {styles} from "./headerStyles";


export const Header = () => {
    const { viewStyle, textStyle } = styles;
    return (
        <SafeAreaView style={viewStyle}>
            <Text style={textStyle}>Search App</Text>
        </SafeAreaView>
    )
}


