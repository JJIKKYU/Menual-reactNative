import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../colors/menualColor";

const Header = ({ name }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menual</Text>
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
    }
});

export default Header;