/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux'
import initStore from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiaryWriting from './src/screens/diaryWriting/diaryWriting';
import Header from './src/designSystem/header/Header';
import HeaderTypes from './src/designSystem/header/HeaderTypes';
import DiaryHome from './src/screens/diaryHome';

const store = initStore();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            initialRouteName='Menual'>
            <Stack.Screen
              name='Menual'
              component={DiaryHome}
              options={{
                header: (props) => <Header {...props} type={HeaderTypes.main} />
              }}
            />

            <Stack.Screen
              name='DiaryWriting'
              component={DiaryWriting}
              options={{
                header: (props) => <Header {...props} type={HeaderTypes.writing} />
              }}
              />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}