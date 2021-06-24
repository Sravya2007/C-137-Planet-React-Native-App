import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Detail';

export default function App() {
  return <AppContainer/>;
}

const AppStackNavigator = createStackNavigator({
  Home : {
    screen: HomeScreen,
    navigatonOptions: {
      headerShown: false
    }
  },
  Details : {
    screen: DetailsScreen
  }
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppStackNavigator)