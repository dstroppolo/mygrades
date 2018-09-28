import React from 'react';
import { View } from 'react-native';
import { Container, Content as StaticContent, Item, Form, Button, Icon, Text, Label, Input, List, ListItem, Left, Body, Right, Spinner, } from "native-base";
import Content from './Content';

import styles from '../styles';


export default class AddClasswork extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editingWeight: null,
            enteringInput: false,
            newInput: '',
            newWeight: '',
            deletingItem: false
        }
    }

    addInput = () => {
        return (
            <View style={{marginTop: 12}}>
                <Form>
                    <Item inlineLabel last style={{flexDirection:'row'}}>
                        <Input style={{color:"#fff"}} onChangeText = { text => this.setState({newInput: text}) } placeholder="Name" /> 
                        <Button success><Icon color="#fff" type="MaterialIcons" name='save' onPress={ async () => { await this.props.createNewInput(this.state.newInput); this.setState({enteringInput: false}) }}/></Button>
                        <Button danger style={{marginLeft: 6}} onPress={ () => this.setState({newInput: '', enteringInput: false})}><Icon color="#fff" type="MaterialIcons" name='cancel' /></Button>
                    </Item>
                </Form>
                <Divider />
            </View>
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
                    <Right>

                        {this.state.deletingItem ? 
                        <Button full onPress={() => {this.props.removeAssignment(itemKey)} }  danger >
                            <Text><Icon color="#fff" type="MaterialIcons" name='cancel' /></Text>
                        </Button> :
                        <Button full onPress={ this.state.editingWeight || this.state.editingWeight === 0 ? () => {this.props.addAssignmentWeight(this.state.newWeight, itemKey); this.setState({editingWeight: null}) }: () => this.setState({editingWeight: i}) } primary={this.state.editingWeight !== i} success={this.state.editingWeight === i} >
                            <Text>{this.state.editingWeight === i ? <Icon color="#fff" type="MaterialIcons" name='save' /> : items[itemKey].weight ? `${items[itemKey].weight}%` : "0%" }</Text>
                        </Button>
                        }

                    </Right>
                </ListItem>
            )
        })

        let enterWeightItem =  
        <ListItem key={1000} last>
            <Body>
                <Form>
                    <Item last>
                        <Input 
                            placeholder="Enter Weight"
                            keyboardType="numeric"
                            style={{color: "#fff"}}
                            onChangeText={ text => this.setState({newWeight: text})}
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
                <Content styles={styles.wrapper}>
                    { !!this.props.selectedSemester && <Text style={{color:"#fff"}}>Current Semester: {this.props.selectedSemester}</Text>}
                    { !!this.props.selectedClass && <Text style={{color:"#fff"}}>Current Class: {this.props.selectedClass}</Text>}
                    { this.state.enteringInput && this.addInput() }
                    <List>
                        { this.renderListItems() }
                    </List>
                    { this.props.loading && <Spinner />}
                    <Divider />
                    {!this.state.enteringInput &&
                    <Button 
                        primary
                        iconLeft
                        block
                        disabled={this.props.loading || (!this.props.selectedClass || !this.props.selectedSemester) }
                        onPress = { () =>  this.setState({ enteringInput: true, editingWeight: null })}
                    >
                        <Icon type="MaterialIcons" name='add' />
                        <Text>Add a new classwork</Text>
                    </Button>}
                    {!this.state.enteringInput &&
                    <Button 
                        danger
                        iconLeft
                        block
                        disabled={ this.props.loading || Object.keys(this.props.listInfo).length === 0 }
                        onPress = { () =>  this.setState({ deletingItem: !this.state.deletingItem })}
                        style={{marginTop: 12}}
                    >   
                        { !this.state.deletingItem && <Icon type="MaterialIcons" name="remove" /> }
                        <Text>{ this.state.deletingItem ? "Cancel" : "Remove a new classwork" }</Text>
                    </Button>
                    }
                </Content>
            </Container>
        )
    }
}