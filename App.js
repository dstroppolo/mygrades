import React from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';

import GradeInput from './src/GradeInput';
import Login from './src/Login';
import AddClasses from './src/AddClasses';


import { createDrawerNavigator, DrawerItems } from 'react-navigation';

export default class App extends React.Component {

  render(){
    return (
        <DrawerNav />
    )
  }


}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150, alignItems: 'center', justifyContent:'center'}}>
      <Text>HELLOOOO</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const DrawerNav = createDrawerNavigator({
  AddClasses: {
    screen: AddClasses,
  },
  Home: {
    screen: Login,
  },
  GradeInput: {
    screen: GradeInput,
  },
}, {
  contentComponent: CustomDrawerComponent,
  drawerPosition: "right",
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});