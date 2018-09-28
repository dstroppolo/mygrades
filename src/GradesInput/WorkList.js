import React from 'react';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import AppHeader from '../Header';
import styles from '../styles';

import { firestore } from '../firebase';

export default class GradeInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gradeData: {}
        }
    }


    render() {
    return (
    <Container style={styles.main}>
    <Content>
    <List>
    <ListItem itemHeader first>
    <Text>COMEDY</Text>
    </ListItem>
    <ListItem last>
    <Text>Hangover</Text>
    </ListItem>
    <ListItem itemDivider style={{backgroundColor:'#050505'}}>
    <Text style={{color:"#fff"}}>A</Text>
    </ListItem>     
    <ListItem>
    <Text>Cop Out</Text>
    </ListItem>
    <ListItem >
    <Text>Hangover</Text>
    </ListItem>
    <ListItem last>
    <Text>Cop Out</Text>
    </ListItem>
    <ListItem itemHeader>
    <Text>ACTION</Text>
    </ListItem>
    <ListItem>
    <Text>Terminator Genesis</Text>
    </ListItem>
    </List>
    </Content>
    </Container>
    );
    }
    }