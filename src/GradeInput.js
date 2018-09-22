import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Slider, Text } from 'react-native-elements'
import GradeInputButtons from './GradeInputButtons';
import TestDescription from './TestDescription';
import AppHeader from './Header';
import styles from './styles';
import SubmitButton from './StyledComponents/SubmitButton';

export default class GradeInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            grade: 0,
        }
    }

    incrementGrade = () => {
        this.setState({grade: this.state.grade === 100 ? 100 : this.state.grade + 0.5});
    }

    decrementGrade = () => {
        this.setState({grade: this.state.grade === 0 ? 0 : this.state.grade - 0.5});
    }

  render() {
    return (
      <View style={styles.main}>
        <ScrollView>

        <AppHeader title="Grade Input" />
      <View style={styles.wrapper}>
        <TestDescription 
            grade={this.state.grade}
        />
        <Slider
            value= {this.state.grade}
            onValueChange={value => this.setState({grade: value})}
            maximumValue={100}
            step={1}
        />
        <GradeInputButtons 
            incrementGrade={this.incrementGrade}
            decrementGrade={this.decrementGrade}
            grade={this.state.grade}
        />
        <SubmitButton title="Submit" />
        </View>
        </ScrollView>

      </View>
    );
  }
}