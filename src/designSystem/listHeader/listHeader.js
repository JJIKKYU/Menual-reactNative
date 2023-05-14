import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../colors/menualColor";
import typography from "../typography/typography";

const ListHeader = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, typography.text.head[5]]}>{title}</Text>
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
        color: theme.grey[400],
    }
});


export default ListHeader;