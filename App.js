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
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiaryWriting from './src/screens/diaryWriting/diaryWriting';
import Header from './src/designSystem/header/Header';
import HeaderTypes from './src/designSystem/header/HeaderTypes';
import DiaryHome from './src/screens/diaryHome';
import DiaryDetail from './src/screens/diaryDetail';
import { View } from 'react-native';
import { theme } from './src/designSystem/colors/menualColor';

const store = initStore();
const Stack = createStackNavigator();
const RootStack = createStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.background
  },
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer
        theme={MyTheme}
        options={{ presentation: 'fullScreenModal'}}>
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              cardStyle: {backgroundColor: '#FFEB3B'},
            }}
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
                presentation: 'modal',
                header: (props) => <Header {...props} type={HeaderTypes.writing} />
              }}
              />

            <Stack.Screen
              name='DiaryDetail'
              component={DiaryDetail}
              options={{
                header: (props) => <Header {...props} type={HeaderTypes.detail} />
              }}
              />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}