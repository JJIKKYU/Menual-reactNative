import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../designSystem/colors/menualColor";

function DiaryWriting() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Diary Writing!!!!!!!!진균이는 수진이꺼!!!!!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background
    },
    title: {
        color: theme.grey[100]
    }
});

export default DiaryWriting;