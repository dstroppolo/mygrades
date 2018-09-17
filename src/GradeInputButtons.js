import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FormLabel, Icon, Slider } from 'react-native-elements'

export default class GradeInputButtons extends React.Component {

constructor(props){
    super(props);
    this.state = { 
        value: 0
    
    }
}

  render() {
    return (
        <View style={styles.container}>
            <Icon
                reverse
                name='ios-remove'
                type='ionicon'
                color='#517fa4'
                onPress={() => this.props.decrementGrade()}
            />
        <Text>+/- 0.5</Text>
        <Icon
            reverse
            name='ios-add'
            type='ionicon'
            color='#517fa4'
            onPress={() => this.props.incrementGrade()}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
  });