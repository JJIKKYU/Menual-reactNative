import React, { Component, useContext } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { ThemeContext, theme } from "../../designSystem/colors/menualColor";

class MenualCell extends Component {
    // const thme = useContext(ThemeContext);
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>메뉴얼입니다.</Text>
                <View style={styles.information}>
                    <Text style={styles.informationTitle}>
                    2099.99.99. HH:MM | P.999
                    </Text>
                </View>
                <View style={styles.thumb}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.background,
    },
    title: {
        color: theme.grey[100]
    },
    information: {

    },
    informationTitle: {
        color: theme.grey[100]
    },
    thumb: {

    }
});

// export default connect(MenualCell);
export default MenualCell;