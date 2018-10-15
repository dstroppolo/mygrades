import React from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
console.disableYellowBox = true;
import Register from './src/Register';
import Logout from './src/Logout';
import NewInfoInput from './src/ScheduleInput/NewInfoInput';
import NewGradesInput from './src/GradesInput/NewGradesInput';
import Results from './src/Results/ViewResults';

import { auth } from './src/firebase';

import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import Login from './src/Login';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: {},
      loading: true
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }


  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      if (user){
          this.setState({user: user})
      } else {
        this.setState({user: {}});
      }
    })
}

  render(){

    let DrawerNav = renderNavDrawer(this.state.user.uid);

    return (
        this.state.loading ? <Text> Hello </Text> : <DrawerNav screenProps={{user: this.state.user}} />
    )
  }


}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150, alignItems: 'center', justifyContent:'center'}}>
      <Text>HELLOOOO</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} labelStyle={{color:"#fff"}} />
    </ScrollView>
  </SafeAreaView>
)


const renderNavDrawer = uid => {
  let routes = {
    "View Results": {
      screen: Results
    },
    
    "Add Grades": {
      screen: NewGradesInput
    },
    "Enter Schedule": {
      screen: NewInfoInput
    },

  };

  let drawerConfig = {
    contentComponent: CustomDrawerComponent,
    drawerPosition: "right",
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerBackgroundColor: '#353535',

  };

  if(uid){
    routes.Logout = Logout
  }

  if(!uid){
    routes.Login = Login
    routes.Register = Register;
  }

  let dn = createDrawerNavigator(
    routes,
    drawerConfig
  )
  return dn;
}
