import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { theme } from "../colors/menualColor";
import HeaderTypes from "./HeaderTypes";

import fullLogo from "../../../assets/images/logo/full.png";
import symbol from "../../../assets/images/logo/symbol.png";


const Header = ({ type, name, header }) => {
    const navigation = useNavigation();

    const headerLayout = ({ }) => {

        console.log("headerType2 = ", type);
    
        switch (type) {
            case HeaderTypes.main:
            break;
    
            case HeaderTypes.detail:
            break;
    
            case HeaderTypes.writing:
            break;
        }

        return (
            <View style={styles.container}>
                {/* <Image source={fullLogo} style={styles.logo}></Image> */}
                <Text style={styles.title}>{type}</Text>
                <TouchableOpacity style={styles.backButton}>
                    <Image source={symbol}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.right1Button}>
                    <Image source={symbol}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.right2Button}>
                    <Image source={symbol}></Image>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        headerLayout(type)
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
    },
    backButton: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        width: 24,
        hieght: 24,
    },
    right1Button: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        width: 24,
        hieght: 24,
    },
    right2Button: {
        position: 'absolute',
        bottom: 10,
        right: 52,
        width: 24,
        hieght: 24,
    }
});

export default Header;