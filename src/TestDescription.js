import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements'

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gradeColor: "#161616"
        }
    }

    getGradeColor = grade => {
        console.log(grade);

            if(grade <50){
                return "#f20000";
            } else 
            if(grade < 80){
                return "#fec93c";
            } else 
            if(grade >= 80){
                return "#1da075";
            } else {
                return "#161616" 
            }
    }

  render() {
    let gradeColor = this.getGradeColor(this.props.grade);
    return (
      <View style={{paddingBottom:60}}>
        <Text h2>
           Entering for: SOEN343 - Assignment 2
        </Text>
        <Text h3 style={{textAlign:'center', color: gradeColor}}>
            {this.props.grade}%
        </Text>
      </View>
    );
  }
}

