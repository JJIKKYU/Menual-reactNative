import React, {Component} from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import MenualCell from '../../components/List/MenualCell';
import menualCellTypes from '../../components/List/MenualCellType';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../designSystem/colors/menualColor';
import ListHeader from '../../designSystem/listHeader/listHeader';
import BoxButton from '../../designSystem/boxButton/boxButton';

// export default class SectionListContainer extends React.Component {
const SectionListContainer = ({ }) => {
    const navigation = useNavigation();

    const data = [
        {
            section: "2022.12",
            data: [
                { id: 1, title: "양수진 사랑해", information: "2010.99.99. HH:MM | P.999" },
                { id: 2, title: "진균이가 더 사랑해", information: "2099.99.99. HH:MM | P.999" },
                { id: 3, title: "내꽁아~", information: "2099.99.99. HH:MM | P.999" },
                { id: 4, title: "하뚜하뚜우", information: "2099.99.99. HH:MM | P.999" },
                { id: 5, title: "❤️ 수징아", information: "2099.99.99. HH:MM | P.999" },
            ]
        },
        {
            section: "2022.11",
            data: [
                { id: 6, title: "Item 1", information: "2099.99.99. HH:MM | P.999" },
                { id: 7, title: "Item 2", information: "2099.99.99. HH:MM | P.999" },
                { id: 8, title: "Item 1", information: "2099.99.99. HH:MM | P.999" },
                { id: 9, title: "Item 2", information: "2099.99.99. HH:MM | P.999" },
                { id: 10, title: "Item 1", information: "2099.99.99. HH:MM | P.999" },
                { id: 11, title: "Item 2", information: "2099.99.99. HH:MM | P.999" },
                { id: 12, title: "Item 1", information: "2099.99.99. HH:MM | P.999" },
                { id: 13, title: "Item 2", information: "2099.99.99. HH:MM | P.999" },
            ]
        }
    ];
    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                renderSectionHeader={({ section: { section } }) => (
                <View>
                    <ListHeader
                        title={section}
                    />
                </View>
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('DiaryWriting')
                        }}
                    >
                        <MenualCell
                        title={item.title}
                        information={item.information}
                        type={menualCellTypes.list}
                    />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />

            <BoxButton style={styles.boxButton}></BoxButton>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background
    },
    boxButton: {
        width: 80,
    }
});


export default SectionListContainer;