import React from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Content, Item, Form, Button, Icon, Text, Label, Input, List, ListItem, Left, Body, Right, } from "native-base";

import styles from './styles';


export default class AddClasswork extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            semesterInputs: ['']
        }
    }

    render() {
        return (
            <Container style={styles.main}>
                <Content style={styles.wrapper}>
                    { !!this.props.selectedSemester && <Text style={{color:"#fff"}}>Current Semester: {this.props.selectedSemester}</Text>}
                    { !!this.props.selectedClass && <Text style={{color:"#fff"}}>Current Class: {this.props.selectedClass}</Text>}
                    <List>
                        <ListItem>
                            <Body>
                                <Text style={{color:"#fff"}}>Assignment 1</Text>
                            </Body>
                            <Right>
                                <Button full >
                                    <Text>15%</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        
                    </List>
                </Content>
            </Container>
        )
    }
}