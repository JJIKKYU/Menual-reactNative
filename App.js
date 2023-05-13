/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux'
import Root from './src/containers/Root'
import initStore from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiaryWriting from './src/screens/diaryWriting/diaryWriting';

const store = initStore();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          {/* <Root /> */}
          <Stack.Navigator initialRouteName='Menual'>
            <Stack.Screen
              name='Menual'
              component={Root}
            />

            <Stack.Screen
              name='DiaryWriting'
              component={DiaryWriting}
              />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}