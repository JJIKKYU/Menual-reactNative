import React, { Component, useContext } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { ThemeContext, theme } from "../../designSystem/colors/menualColor";
import menualCellTypes from "./MenualCellType";

// class MenualCell extends Component {
const MenualCell = ({ type, title, information }) => {
    // const thme = useContext(ThemeContext);
    // constructor(props, context) {
    //     super(props, context);
    // }

    switch (type) {
        case menualCellTypes.list:
            console.log("type!")
        case menualCellTypes.photo:
            console.log("photo!");
    }

    console.log("!!");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.information}>
                <Text style={styles.informationTitle}>
                {information}
                </Text>
            </View>
            <View style={styles.thumb}></View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        paddingLeft: 20,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 20,
    },
    title: {
        color: theme.grey[200],
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
    },
    information: {

    },
    informationTitle: {
        color: theme.grey[600],
        fontSize: 12,
    },
    thumb: {
        position: "absolute",
        right: 20,
        top: 12,
        backgroundColor: theme.grey[600],
        width: 48,
        height: 48,
    }
});

// export default connect(MenualCell);
// export default MenualCell;
export default MenualCell;