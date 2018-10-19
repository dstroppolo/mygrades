import React from 'react';
import { Container, Content, Item, Input, Label, Button, Text } from 'native-base';
import Divider from './StyledComponents/Divider';


import AppHeader from './Header';
import { auth } from './firebase';
import styles from './styles';

export default class Register extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      password:'',
      email: ''
    }
  }

  signInUserWithEmail = () => {
    let { password, email } = this.state;
    auth.signInUserWithEmail(email, password);
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
          
          <Button success large full onPress={ () => this.signInUserWithEmail() } style={{marginTop:40}}>
            <Text>Log in</Text>
          </Button>
        </Content>
      </Container>

    );
  }
}