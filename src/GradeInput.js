import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Slider, Button } from 'react-native-elements'
import GradeInputButtons from './GradeInputButtons';
import TestDescription from './TestDescription';

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
        <Button
            raised
            large
            title="Submit"
            borderRadius={50}
            containerViewStyle={{marginTop:75, borderRadius:50}}
            backgroundColor={'#42e573'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      padding: 60,
      
    }
  });