import React from 'react';
import Divider from './StyledComponents/Divider';
import { Container, Content, Item, Input, Label, Button } from 'native-base';
import { Text } from 'react-native';

import AppHeader from './Header';
import { auth } from './firebase';
import styles from './styles';


export default class Register extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      password:'',
      email: '',
      repeatPassword: '',
      errors: []
    }
  }

  addNewUser = () => {
    let { password, email } = this.state;
    
      auth.createUserWithEmailAndPassword(email, password);
 
  }

  render() {
    return (
        <Container style={styles.main}>
        <AppHeader title="Register" />

        <Content style={styles.wrapper}>

            <Item stackedLabel>
                <Label>Email</Label>
                <Input onChangeText={text => this.setState({email:text})} />
            </Item>

            <Divider />

            <Item stackedLabel>
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText= { text => this.setState({password:text}) } />
            </Item>
            
            <Item stackedLabel>
                <Label>Repeat Password</Label>
                <Input secureTextEntry={true} onChangeText= { text => this.setState({repeatPassword:text}) } />
            </Item>

          <Button success full large title="Submit" onPress={ () => this.addNewUser() } style={{marginTop:40}}>
            <Text>Register</Text>
          </Button>
        </Content>
        </Container>

    );
  }
}