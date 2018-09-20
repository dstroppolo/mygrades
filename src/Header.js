import React from 'react';
import { DrawerLayoutAndroid, Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class AppHeader extends React.Component {


    navigationView = () => {
        return (<View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>)
    }
  render() {
    return (
    
        <View>
    <Header
        rightComponent={<Icon name="menu" color="#fff" onPress={() => this.props.navigation.openDrawer() }/> }
        centerComponent={{ text: this.props.title, style: { color: '#fff' } }}
        backgroundColor={"#050505"}
      /> 
      </View>
    ); 
  }
}

export default withNavigation(AppHeader);