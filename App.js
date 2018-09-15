import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DrawScreen from './src/components/DrawScreen';
import HomeScreen from './src/components/HomeScreen';


const App = createStackNavigator({
    Home: { screen: HomeScreen },
    Draw: { screen: DrawScreen },
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
