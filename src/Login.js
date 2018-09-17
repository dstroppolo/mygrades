import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <FormInput  />
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true} />
      </View>
    );
  }
}