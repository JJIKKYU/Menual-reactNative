import React, { Componenet } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Main from '../Main';
import SectionListContainer from "../SectionList";

const Root = ({ navigation }) => {
    return (
        <View style={{ backgroundColor:'grey'}}>
            <Text style={{ marginLeft:20, marginTop:100, fontSize:24 }}>React Native Redux Sample</Text>
            <Main />
            <SectionListContainer />

            <TouchableOpacity onPress={() => navigation.navigate('DiaryWriting')}>
        		<Text>회원가입</Text>
        	</TouchableOpacity>
        </View>
    );
}

export default Root;