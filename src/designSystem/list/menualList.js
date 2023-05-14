import React from "react";
import { View, Text, StyleSheet } from "react-native";
import typography from "../typography/typography";
import { theme } from "../colors/menualColor";

const MenualList = ({ title, date, page, reply }) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={[styles.title, typography.text.title[2]]}>{title}</Text>
            <View style={styles.informationContainer}>
                <Text style={[styles.informationTitle, typography.text.body[2]]}>{date}</Text>
                <Text style={[styles.divider, typography.text.body[2]]}>|</Text>
                <Text style={[styles.informationTitle, typography.text.body[2]]}>P.{page}</Text>
                <Text style={[styles.divider, typography.text.body[2]]}>|</Text>
                <Text style={[styles.informationTitle, typography.text.body[2]]}>{reply}</Text>
            </View>
            <View style={styles.thumb}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 85,
        height: 72

    },
    title: {
        color: theme.grey[200],
    },
    informationContainer: {
        marginTop: 2,
        flexDirection: "row",
    },
    informationTitle: {
        color: theme.grey[600],
    },
    divider: {
        marginLeft: 8,
        marginRight: 8,
        color: theme.grey[600],
    },
    thumb: {
        position: 'absolute',
        top: 12,
        right: 20,
        width: 48,
        height: 48,
        backgroundColor: theme.grey[600],
        borderRadius: 2,
    }
});

export default MenualList;