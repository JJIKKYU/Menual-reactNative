import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../colors/menualColor";
import typography from "../typography/typography";

const ListHeader = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={typography.text.head[1]}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ...typography,
    container: {
        flex: 1,
        backgroundColor: theme.background,
        marginLeft: 20,
    },
    title: {
        fontSize: 28,
        color: theme.grey[400],
        fontWeight: 'bold',
        fontFamily: "SpoqaHanSansNeo-Bold",
    }
});


export default ListHeader;