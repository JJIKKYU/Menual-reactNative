import React from "react";
import { View, Text, StyleSheet } from "react-native";
import typography from "../typography/typography";
import { theme } from "../colors/menualColor";

const MenualList = ({ title, date, page, reply, isHide, image }) => {
    // 숨김처리에 따라서 다른 style을 적용할 수 있도록 하는 함수
    const titleStyle = (isHide) => {
        return isHide ? styles.hideTitle : styles.title;
    };

    // image 여부에 따라서 image thumbView 노출 여부
    const thumbView = (image, isHide) => {
        // 숨김 처리일 경우에는 썸네일 노출X
        if (isHide) { return <></> }
        // 이미지가 없을 경우 이미지 노출X
        if (image == null) { return <></> }

        return (
            <View style={styles.thumb}></View>
        );
    }

    // date, page, reply 값에 따라서 informationView를 구성하는 함수
    // reply 값은 있을 때만 랜더링합니다.
    const informationView = (date, page, reply) => {
        return (
            <View style={styles.informationContainer}>
                <Text style={[styles.informationTitle, typography.text.body[2]]}>{date}</Text>
                <Text style={[styles.divider, typography.text.body[2]]}>|</Text>
                <Text style={[styles.informationTitle, typography.text.body[2]]}>P.{page}</Text>
                {reply &&
                <>
                    <Text style={[styles.divider, typography.text.body[2]]}>|</Text>
                    <Text style={[styles.informationTitle, typography.text.body[2]]}>{reply}</Text>
                </>
                }
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                {isHide && <View style={styles.hideIcon}></View>}
                <Text numberOfLines={1} style={[titleStyle(isHide), typography.text.title[2]]}>
                    {isHide == true ? "숨긴 메뉴얼이에요" : title}
                </Text>
            </View>
            {informationView(date, page, reply)}
            {thumbView(image, isHide)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 85,
        height: 72,
        flex: 1,
    },
    title: {
        color: theme.grey[200],
    },
    hideTitle: {
        color: theme.grey[600],
    },
    informationContainer: {
        marginTop: 2,
        flexDirection: "row",
    },
    informationTitle: {
        color: theme.grey[600],
    },
    divider: {
        marginLeft: 8,
        marginRight: 8,
        color: theme.grey[600],
    },
    thumb: {
        position: 'absolute',
        top: 12,
        right: 20,
        width: 48,
        height: 48,
        backgroundColor: theme.grey[600],
        borderRadius: 2,
    },
    hideIcon: {
        width: 24,
        height: 24,
        backgroundColor: theme.grey[600],
        
    },
    titleContainer: {
        flexDirection: "row",
        flex: 1,
        flexShrink: 1,
        alignItems: 'center',
    }
});

export default MenualList;