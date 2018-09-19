import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GradeInput from './src/GradeInput';
import Login from './src/Login';
import AppHeader from './src/Header';
import { createDrawerNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View> 
    );
  }
}

const RootStack = createDrawerNavigator({
  Home: {
    screen: GradeInput
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
});
