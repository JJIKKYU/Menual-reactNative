import React, {Component} from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import MenualCell from '../../components/List/MenualCell';
import menualCellTypes from '../../components/List/MenualCellType';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../designSystem/colors/menualColor';
import ListHeader from '../../designSystem/listHeader/listHeader';
import BoxButton from '../../designSystem/button/boxButton';
import MenualList from '../../designSystem/list/menualList';

// export default class SectionListContainer extends React.Component {
const SectionListContainer = ({ }) => {
    const navigation = useNavigation();

    const data = [
        {
            section: "2022.12",
            data: [
                { id: 1, title: "메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1", date: "2010.99.99. HH:MM", page: "999", reply: "3", image: "url", isHide: false, },
                { id: 2, title: "메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1", date: "2010.99.99. HH:MM", page: "999", reply: "4", image: null, isHide: false, },
                { id: 3, title: "메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1", date: "2010.99.99. HH:MM", page: "999", reply: null, image: null, isHide: false, },
                { id: 4, title: "메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1", date: "2010.99.99. HH:MM", page: "999", reply: "3", image: null, isHide: false, },
                { id: 5, title: "메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1", date: "2010.99.99. HH:MM", page: "999", reply: "10", image: null, isHide: true, },
                { id: 6, title: "메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1메뉴얼1", date: "2010.99.99. HH:MM", page: "999", reply: null, image: "url", isHide: false, },
            ]
        },
        {
            section: "2022.11",
            data: [
                { id: 6, title: "메뉴얼6", date: "2010.99.99. HH:MM", page: "999", reply: "10", image: "url" },
                { id: 7, title: "메뉴얼7", date: "2010.99.99. HH:MM", page: "999", reply: "10" },
                { id: 8, title: "메뉴얼8", date: "2010.99.99. HH:MM", page: "999", reply: "10" },
                { id: 9, title: "메뉴얼9", date: "2010.99.99. HH:MM", page: "999", reply: "10" },
                { id: 10, title: "메뉴얼10", date: "2010.99.99. HH:MM", page: "999", reply: "10" },
            ]
        }
    ];

    const boxButtonHandlePress = () => {
        navigation.navigate("DiaryWriting", { presentation: 'modal' })
    };
    
    return (
        <View style={styles.container}>
            <SectionList
                stickySectionHeadersEnabled={false}
                sections={data}
                contentContainerStyle={{ paddingBottom: 100, }}
                renderSectionHeader={({ section: { section } }) => (
                <View style={styles.listHeaderContainer}>
                    <ListHeader
                        title={section}
                    />
                </View>
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('DiaryDetail')
                        }}
                    >
                        <MenualList
                        title={item.title}
                        date={item.date}
                        page={item.page}
                        reply={item.reply}
                        isHide={item.isHide}
                        image={item.image}
                        type={menualCellTypes.list}
                    />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />

            <BoxButton
                onPressCallback={boxButtonHandlePress}
                style={styles.boxButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background
    },
    listHeaderContainer: {
        marginTop: 70
    }
});


export default SectionListContainer;