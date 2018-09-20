import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import GradeInput from './GradeInput';
import Login from './TestDescription';

const DrawerStack = DrawerNavigator({
    GradeInput: { screen: GradeInput },
    Login: { screen: Login },
  })

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
    }, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'green'},
        title: 'Logged In to your app!',
        headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
    })
})
  
const PrimaryNav = StackNavigator({
    drawerStack: { screen: DrawerNavigation }
  }, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'DrawerNavigation'
  })
  
  export default PrimaryNav