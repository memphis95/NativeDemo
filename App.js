import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';
import { Constants } from 'react-native-unimodules';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//  for  Stack Navigation
import LoginScreen from './StackNavigation/LoginScreen';
import HomeScreen from './StackNavigation/HomeScreen';

const MainNavigation = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
});
export default createAppContainer(MainNavigation);






