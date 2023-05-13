import React, { Componenet } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Main from '../Main';
import SectionListContainer from "../SectionList";
import { theme } from "../../designSystem/colors/menualColor";
import BoxButton from "../../designSystem/boxButton/boxButton";

const Root = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Text style={{ marginLeft:20, marginTop:100, fontSize:24 }}>React Native Redux Sample</Text> */}
            {/* <Main /> */}
            <SectionListContainer />
            {/* <BoxButton style={styles.boxButton}></BoxButton> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
    },
    boxButton: {
        flex: 1,
        position: 'absolute',
        top: 16, // 원하는 위치로 설정
        right: 16, // 원하는 위치로 설정
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4, // Shadow for Android
        shadowColor: 'black', // Shadow for iOS
        shadowOpacity: 0.3, // Shadow for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
        shadowRadius: 4, // Shadow for iOS
    }
});


export default Root;