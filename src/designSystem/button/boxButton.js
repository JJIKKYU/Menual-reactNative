import React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { theme } from "../colors/menualColor";
import { useNavigation } from "@react-navigation/native";

const BoxButton = ({ }) => {
    const navigation = useNavigation();

    return (
        <TouchableHighlight
        underlayColor={theme.sub[600]}
        onPress={() => {
            navigation.navigate('DiaryWriting')
        }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>22번째 메뉴얼 작성하기</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: theme.sub[400],
        height: 56,
        left: 20,
        right: 20,
        borderRadius: 4,
        bottom: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: theme.grey[800],
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default BoxButton;