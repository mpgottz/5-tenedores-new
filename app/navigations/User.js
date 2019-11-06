import React from "react";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../screens/Home";
import TopFiveScreen from "../screens/TopFive";
import SearchScreen from "../screens/Search";
import MyAccountScreen from "../screens/MyAccount";

const homeScreenStack = createStackNavigator({
  Home: {
    scren: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  }
});
const topFiveScreenStack = createStackNavigator({
  TopFive: {
    scren: TopFiveScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Top 5 Restaurantes"
    })
  }
});
const searchScreenStack = createStackNavigator({
  Search: {
    scren: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Buscar"
    })
  }
});
const myAccountScreenStack = createStackNavigator({
  MyAccount: {
    scren: MyAccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Mi Cuenta"
    })
  }
});
const RootStack = createBottomTabNavigator({
  Home: {
    screen: homeScreenStack
  }
});

export default createAppContainer(RootStack);
