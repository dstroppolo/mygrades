import React from 'react';
import { ScrollView, View } from 'react-native';
import { FormLabel, Icon, FormInput, Button } from 'react-native-elements';
import styles from './styles';

import AppHeader from './Header';


export default class AddClasses extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            classInputs: ['']
        }
    }

    addClassInput = () => {
        this.state.classInputs.push('')
        this.setState({classInputs: this.state.classInputs}, () => this[`ci${this.state.classInputs.length-1}`].focus());
    }

    removeClassInput = pos => {
        this.state.classInputs.splice(pos, 1);
        this.setState({classInputs: this.state.classInputs});
    }

    setClassInputState = (text, index) => {
        let ci = this.state.classInputs
        ci[index] = text;
        this.setState({classInputs: ci});
    }


    render() {
        let inputs = this.state.classInputs.map( (input, i) => {
            return (
                <View key={i} style={{paddingTop:20}}>
                    {i > 0 && 
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <FormLabel labelStyle={{marginTop:0}}>Enter another class</FormLabel>
                        <Icon name='close' type='fontawesome' onPress={() => this.removeClassInput(i)} />
                    </View>}
                    <FormInput 
                        value={input} 
                        key={i} 
                        onChangeText={ text => this.setClassInputState(text, i) } 
                        ref={ ci => this[`ci${i}`] = ci}    
                    />
                </View>
            )
        })

        return (
            <View style={styles.main}>
                <AppHeader title="Add Classes" />
                <View style={{flex:1, justifyContent:'flex-start'}}>
                    <ScrollView>
                    <View>
                        <FormLabel>Add a new class to your semester</FormLabel>
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