import React from 'react';
import { DrawerLayoutAndroid, Text, View } from 'react-native';
import { Header } from 'react-native-elements'

export default class AppHeader extends React.Component {


    navigationView = () => {
        return (<View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>)
    }
  render() {
    return (
    
        <View>
    <Header
        rightComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        backgroundColor={"#050505"}
      />
      </View>
    ); 
  }
}