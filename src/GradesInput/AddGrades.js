import React from 'react';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import AppHeader from '../Header';
import styles from '../styles';

export default class GradeInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            grade: 0,
        }
    }

    

  render() {
    return (
        <Container>
            <AppHeader />
            <Content>

            </Content>
        </Container>
    );
  }
}