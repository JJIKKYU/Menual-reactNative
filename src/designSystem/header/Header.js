import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { theme } from "../colors/menualColor";
import HeaderTypes from "./HeaderTypes";

import fullLogo from "../../../assets/images/logo/full.png";
import symbol from "../../../assets/images/logo/symbol.png";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";


const Header = ({ type, name, header }) => {
    const navigation = useNavigation();
    const { top } = useSafeAreaInsets();

    console.log("top1 = ", top);

    return (
        headerLayout(type)
    );
}

const headerLayout = ( type ) => {
    const { top } = useSafeAreaInsets();

    const headerTypes = {
        [HeaderTypes.main]: {
            needRightButton1: true,
            needRightButton2: true,
            needLogo: true
        },
        [HeaderTypes.detail]: {
            needRightButton1: true,
            needRightButton2: true,
            needBackButton: true,
            needTitle: true
        },
        [HeaderTypes.writing]: {
            needRightButton1: true,
            needCloseButton: true,
        }
    }

    const headerConfig = headerTypes[type] || {};

    const {
        needRightButton1 = false,
        needRightButton2 = false,
        needBackButton = false,
        needTitle = false,
        needLogo = false,
        needCloseButton = false,
    } = headerConfig;

    return (
        <View style={[styles.container, {paddingTop: top + 45 } ]}>
            {needLogo &&
                <Image source={fullLogo} style={styles.logo}></Image>            
            }

            {needTitle &&
                <Text style={styles.title}>{type}</Text>
            }
            {needBackButton &&
                <TouchableOpacity style={styles.backButton}>
                    <Image source={symbol}></Image>
                </TouchableOpacity>
            }

            {needRightButton1 &&
                <TouchableOpacity style={styles.right1Button}>
                    <Image source={symbol}></Image>
                </TouchableOpacity>
            }

            {needRightButton2 &&
                <TouchableOpacity style={styles.right2Button}>
                    <Image source={symbol}></Image>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        // backgroundColor: theme.background
        backgroundColor: theme.main[800],
        paddingTop: 100,
    },
    safeArea: {
        backgroundColor: theme.main[700]
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