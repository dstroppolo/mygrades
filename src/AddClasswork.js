import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Container, Content, Item, Form, Button, Icon, Text, Label, Input, List, ListItem, Left, Body, Right, } from "native-base";

import styles from './styles';


export default class AddClasswork extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editingWeight: null,
            enteringInput: false
        }
    }

    addInput = () => {
        return (
            <Content>
                <Form>
                <Item stackedLabel last>
                    <Label style={{color:"#fff"}}>{this.props.inputName} name</Label>
                    <Input style={{color:"#fff"}} onChangeText = { text => this.setState({newInput: text}) }  />                    
                </Item>
                </Form>
                <Divider />
            </Content>
                
        )
    }

    renderListItems = () => {
        let items = this.props.listInfo;
        let itemKeys = Object.keys(items);
        
        let listItems = itemKeys.map( (itemKey, i) => {
            return (
                <ListItem key={i}>
                    <Body>
                        <Text style={{color:"#fff"}}>{itemKey}</Text>
                    </Body>
                    <Right style={{width:50, backgroundColor: 'red'}}>
                        <Button full onPress={() => {this.setState({editingWeight: i})} } primary={this.state.editingWeight !== i} success={this.state.editingWeight === i} >
                            <Text>{this.state.editingWeight === i ? <Icon color="#fff" type="MaterialIcons" name='save' /> : `${items[itemKey]}%`}</Text>
                        </Button>
                    </Right>
                </ListItem>
            )
        })

        let enterWeightItem =  
        <ListItem key={1000} last>
            <Body>
                <Form>
                    <Item inlineLabel last>
                        <Label>Enter weight</Label>
                        <Input 
                            keyboardType="numeric"
                            style={{color: "#fff"}}
                        />
                    </Item>
                </Form>
            </Body>
            <Right>
                <Button danger transparent onPress={() => this.setState({editingWeight:null})}>
                    <Icon type="MaterialIcons" name="cancel" />
                </Button>
            </Right>
        </ListItem>

        if(this.state.editingWeight || this.state.editingWeight === 0){
            listItems.splice(this.state.editingWeight+1,0,enterWeightItem)
        }
        return listItems;
    }



    render() {
        return (

            <Container style={styles.main}>
                <Content style={styles.wrapper}>
                    { !!this.props.selectedSemester && <Text style={{color:"#fff"}}>Current Semester: {this.props.selectedSemester}</Text>}
                    { !!this.props.selectedClass && <Text style={{color:"#fff"}}>Current Class: {this.props.selectedClass}</Text>}
                    <List>
                        { this.renderListItems() }
                    </List>
                    { this.state.enteringInput && this.addInput() }
                    <Divider />
                    <Button 
                        primary
                        iconLeft
                        block
                        disabled = { this.props.loading || (this.props.inputName==='Class' && !this.props.selectedSemester) }
                        onPress = { this.state.enteringInput ? async () => { await this.props.createNewInput(this.state.newInput); this.props.setActiveTab(this.props.nextTab) } :  () =>  this.setState({ selectInput: '', enteringInput: true })}
                    >
                        { this.props.loading ? <Spinner /> : <Icon type="MaterialIcons" name='add' /> }
                        <Text> {this.state.enteringInput ? `Submit new ${this.props.inputName}` : `Add a new ${this.props.inputName}`} </Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}