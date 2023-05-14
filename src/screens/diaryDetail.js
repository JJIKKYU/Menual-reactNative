import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Spacer from "../designSystem/spacer/spacer";
import spacerType from "../designSystem/spacer/spacerType";
import typography from "../designSystem/typography/typography";
import { theme } from "../designSystem/colors/menualColor";
import Divider from "../designSystem/divider/divider";
import dividerType from "../designSystem/divider/dividerType";

function DiaryDetail() {
    return (
        <ScrollView style={styles.container}>
            <Spacer type={spacerType._24} />
            <View style={styles.titleContainer}>
                <Text style={[styles.title, typography.text.title[4]]}>제목은 최대 40자까지 입력할 수 있어요. 제목은 최대 40자까지 입력할 수 있어요. 제목은 최대 40자까지 입력할 수 있어요.</Text>
            </View>
            <Spacer type={spacerType._24} />
            <View style={styles.informationContainer}>
                <Text style={[styles.informationTitle, typography.text.body[2]]}>2023.03.26</Text>
                <Text style={[styles.divider, typography.text.body[2]]}>|</Text>
                <Text style={[styles.informationTitle, typography.text.body[2]]}>P.999</Text>
            </View>

            <Spacer type={spacerType._8}/>
            <Divider type={dividerType._1} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingLeft: 20,
        paddingRight: 20,
    },
    titleContainer: {

    },
    title: {
        color: theme.grey[100],
    },
    informationContainer: {
        flexDirection: "row",
    },
    informationTitle: {
        color: theme.grey[600]
    },
    divider: {
        color: theme.grey[600],
        marginLeft: 8,
        marginRight: 8,
    }
});

export default DiaryDetail;