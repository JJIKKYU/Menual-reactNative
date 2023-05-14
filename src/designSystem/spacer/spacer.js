import React from "react";
import { View } from "react-native";
import spacerType from "./spacerType";

const Spacer = ({ type }) => {
    return (
        <View style={{ height: type, backgroundColor: "clear" }}/>
    );
}

export default Spacer;