import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GradeInput from './src/GradeInput';
import Login from './src/Login';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GradeInput />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    justifyContent: 'center'
  },
});
