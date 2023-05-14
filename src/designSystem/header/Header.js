import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { theme } from "../colors/menualColor";
import HeaderTypes from "./HeaderTypes";

import fullLogo from "../../../assets/images/logo/full.png";


const Header = ({ type, name, header }) => {
    const navigation = useNavigation();

    console.log("headerType = " + type);

    return (
        <View style={styles.container}>
            <Image source={fullLogo} style={styles.logo}></Image>
            <Text style={styles.title}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 88,
        backgroundColor: theme.background
    },
    title: {
        position: 'absolute',
        bottom: 10,
        fontSize: 16,
        color: theme.grey[100],
        alignSelf: 'flex-end',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    logo: {
        position: 'absolute',
        bottom: 10,
        left: 20,
    }
});

export default Header;