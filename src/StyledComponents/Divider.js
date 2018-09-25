import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

export default Divider = (props) => {


    return <View style={{ paddingTop: 12, paddingBottom: 12 }}>{props.label && <Text style={{textAlign:'center', color: '#fff'}}>{props.label}</Text>}</View>



}