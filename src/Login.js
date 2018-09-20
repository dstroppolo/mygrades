import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import AppHeader from './Header';

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <AppHeader title="Login" />
        <FormLabel>Name</FormLabel>
        <FormInput  />
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true} />
      </View>
    );
  }
}