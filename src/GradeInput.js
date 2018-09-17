import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, Icon, Text, Slider } from 'react-native-elements'

export default class GradeInput extends React.Component {

constructor(props){
    super(props);
    this.state = { 
        value: 0
    
    }
}

  render() {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
        <Icon
            reverse
            name='ios-remove'
            type='ionicon'
            color='#517fa4'
        />
        <Text>Hello</Text>
        <Icon
            reverse
            name='ios-add'
            type='ionicon'
            color='#517fa4'
        />
      </View>

    );
  }
}