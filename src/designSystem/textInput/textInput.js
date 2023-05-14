import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import typography from "../typography/typography";
import { theme } from "../colors/menualColor";
import textInputType from "./textInputType";

const TextInputer = ({ type }) => {
    switch (type) {
        case textInputType.textWithIcon:
            return (
                <View style={styles.container}>
                    <View style={styles.image}></View>
                    <TextInput
                        style={[styles.inputer, { placeholderTextColor: 'red' }, typography.text.body[2]]}
                        placeholder="최대 24자까지 입력 가능"
                        placeholderTextColor={theme.grey[600]}
                        
                    />
                </View>
            );

        case textInputType.rewriting:
            return (
                <View style={styles.container}>
                    <View style={styles.image}></View>
                    <TextInput
                        style={[styles.inputer, { placeholderTextColor: 'red' }, typography.text.body[2]]}
                        placeholder="최대 24자까지 입력 가능"
                        placeholderTextColor={theme.grey[600]}
                        
                    />
                </View>
            );

        default:
            return <></>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 19,
        marginBottom: 19,
    },
    image: {
        width: 24,
        height: 24,
        backgroundColor: 'red',
        marginRight: 8,
    },
    inputer: {
        color: theme.grey[400],
        placeholderTextColor: 'red',
        placeholder: "red",
        flex: 1,
    }
});

export default TextInputer;