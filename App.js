import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppStackNavigator = createStackNavigator({
  Home : {
    screen: HomeScreen,
    navigatonOptions: {
      
    }
  },

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
