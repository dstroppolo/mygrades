import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import GradeInput from './src/GradeInput';
import Login from './src/Login';
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
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const DrawerNav = createDrawerNavigator({
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