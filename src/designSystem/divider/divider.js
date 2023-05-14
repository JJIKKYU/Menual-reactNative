import React from "react";
import { View } from "react-native";
import { theme } from "../colors/menualColor";

const Divider = ({ type }) => {
    return (
        <View style={{ height: type, backgroundColor: theme.grey[700] }}></View>
    );
}

export default Divider;