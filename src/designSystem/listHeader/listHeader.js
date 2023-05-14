import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../colors/menualColor";

const ListHeader = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        marginLeft: 20,
    },
    title: {
        fontSize: 28,
        color: theme.grey[400],
        fontFamily: "SpoqaHanSansNeo-Bold"
    }
});


export default ListHeader;