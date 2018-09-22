import React from 'react';
import { Button } from 'react-native-elements'


export default class SubmitButton extends React.Component {

    render(){
        return (
            <Button
                raised
                large
                title={this.props.title}
                borderRadius={50}
                containerViewStyle={{...this.props.containerStyles, borderRadius:50}}
                backgroundColor={'#42e573'}
                onPress={this.props.function}
            />
        )
    }
}
