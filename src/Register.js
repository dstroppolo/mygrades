import React from 'react';
import Divider from './StyledComponents/Divider';
import { Container, Content, Item, Input, Label } from 'native-base';

import AppHeader from './Header';
import { auth } from './firebase';
import styles from './styles';

import SubmitButton from './StyledComponents/SubmitButton';

export default class Register extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:'',
      password:'',
      email: ''
    }
  }

  addNewUser = () => {
    let { name, password, email } = this.state;
    auth.createUserWithEmailAndPassword(email, password);
  }

  render() {
    return (
        <Container style={styles.main}>
        <AppHeader title="Register" />

        <Content style={{marginLeft:40, marginRight:40}}>

            <Item stackedLabel>
                <Label>First Name</Label>
                <Input onChangeText={text => this.setState({name:text})} />
            </Item>
            
            <Divider />

            <Item stackedLabel>
                <Label>Email</Label>
                <Input onChangeText={text => this.setState({email:text})} />
            </Item>

            <Divider />

            <Item stackedLabel>
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText= { text => this.setState({password:text}) } />
            </Item>
          
          <SubmitButton title="Submit" function={ () => this.signInUserWithEmail() } containerStyles={{marginTop:40}}/>
        </Content>
        </Container>

    );
  }
}