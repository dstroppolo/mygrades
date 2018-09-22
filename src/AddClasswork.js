import React from 'react';
import { ScrollView, View } from 'react-native';
import { FormLabel, Icon, FormInput, Button, Text } from 'react-native-elements';
import styles from './styles';

import AppHeader from './Header';


export default class AddClasswork extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            semesterInputs: ['']
        }
    }

    addClassInput = () => {
        this.state.semesterInputs.push('')
        this.setState({semesterInputs: this.state.semesterInputs}, () => this[`ci${this.state.semesterInputs.length-1}`].focus());
    }

    removeClassInput = pos => {
        this.state.semesterInputs.splice(pos, 1);
        this.setState({semesterInputs: this.state.semesterInputs});
    }

    setClassworkInputState = (text, index) => {
        let ci = this.state.semesterInputs
        ci[index] = text;
        this.setState({semesterInputs: ci});
    }


    render() {
        let inputs = this.state.semesterInputs.map( (input, i) => {
            return (
                <View key={i} style={{paddingTop:20}}>
                    {i > 0 && 
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FormLabel labelStyle={{marginTop:0}}>Enter another semester</FormLabel>
                        <Icon name='close' type='fontawesome' onPress={() => this.removeClassInput(i)} />
                    </View>}
                    <View>
                    <FormInput 
                        value={input} 
                        key={i} 
                        onChangeText={ text => this.setClassworkInputState(text, i) } 
                        ref={ ci => this[`ci${i}`] = ci}    
                    />
                    <FormInput
                        key={i}
                        keyboardType="numeric"
                    />
                    </View>
                </View>
            )
        })

        return (
            <View style={styles.main}>
                <AppHeader title="Add Classwork" />
                <View style={{flex:1, justifyContent:'flex-start'}}>
                    <ScrollView>
                    <View>
                        <FormLabel>Add Work</FormLabel>
                        {inputs}
                    </View>

                    <Icon
                        reverse
                        name='ios-add'
                        type='ionicon'
                        color='#517fa4'
                        containerStyle={{alignSelf:'center'}}
                        onPress={() => this.addClassInput()}

                    />
                    </ScrollView>
                    <View style={{marginTop: 40,bottom: 25,alignSelf:'center', width:'60%'}}>
                    <Button 
                        title="Add all"
                        raised
                        large
                        borderRadius={50}
                        buttonStyle={{borderRadius:50}}
                        backgroundColor={'#42e573'}
                    />

                    </View>

                </View>
            </View>
        )
    }
}