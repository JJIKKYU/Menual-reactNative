import React from "react";
import { StyleSheet } from 'react-native';

const fontFamilyTypes = {
    MontserratExtraBold: "Montserrat-ExtraBold",
    SpoqaHanSansNeoRegular: "SpoqaHanSansNeo-Regular",
    SpoqaHanSansNeoBold: "SpoqaHanSansNeo-Bold",
}

const typography = {
    text: {
        head: {
            1: {
                fontFamily: fontFamilyTypes.MontserratExtraBold,
                fontSize: 10,
            },
            2: {
                fontFamily: fontFamilyTypes.MontserratExtraBold,
                fontSize: 12,
            },
            3: {
                fontFamily: fontFamilyTypes.MontserratExtraBold,
                fontSize: 14,
            },
            4: {
                fontFamily: fontFamilyTypes.MontserratExtraBold,
                fontSize: 16,
            },
            5: {
                fontFamily: fontFamilyTypes.MontserratExtraBold,
                fontSize: 18,
            }
        },
        title: {
            1: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoBold,
                fontSize: 12
            },
            2: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoBold,
                fontSize: 14
            },
            3: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoBold,
                fontSize: 16
            },
            4: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoBold,
                fontSize: 18
            },
            5: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoBold,
                fontSize: 21
            },
            6: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoBold,
                fontSize: 24
            }
        },
        body: {
            1: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoRegular,
                fontSize: 10,
                lineHeight: 24,
            },
            2: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoRegular,
                fontSize: 12,
                lineHeight: 24,
            },
            3: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoRegular,
                fontSize: 13,
                lineHeight: 24,
            },
            4: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoRegular,
                fontSize: 14,
                lineHeight: 24,
            },
            5: {
                fontFamily: fontFamilyTypes.SpoqaHanSansNeoRegular,
                fontSize: 16,
                lineHeight: 24,
            }
        }
    }
}

export default StyleSheet.create({
    ...typography
});