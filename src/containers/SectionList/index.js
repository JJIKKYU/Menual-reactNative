import React, {Component} from 'react';
import { View, Text, SectionList } from 'react-native';
import MenualCell from '../../components/List/MenualCell';

export default class SectionListContainer extends React.Component {
    render() {
        const data = [
            {
                section: "section1",
                data: [
                    { id: 1, title: "Item 1", information: "2099.99.99. HH:MM | P.999" },
                    { id: 2, title: "Item 2", information: "2099.99.99. HH:MM | P.999" },
                ]
            },
            {
                section: "section2",
                data: [
                    { id: 3, title: "Item 1", information: "2099.99.99. HH:MM | P.999" },
                    { id: 4, title: "Item 2", information: "2099.99.99. HH:MM | P.999" },
                ]
            }
        ];
        return (
            <View>
                <SectionList 
                    sections={data}
                    renderSectionHeader={({ section: { title } }) => (
                    <View>
                        <Text>section</Text>
                    </View>
                    )}
                    renderItem={({ item }) => (
                        <MenualCell />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}