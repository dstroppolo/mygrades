import React from 'react';
import { Container, Content, Item, Form, Button, Icon, Text, Label, Input } from "native-base";
import styles from './styles';
import { Dropdown } from 'react-native-material-dropdown';
import Divider from './StyledComponents/Divider';


export default class AddClasses extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newClassInput: '',
            enteringClass: false,
            selectClassInput: ''
        }
    }



    addClassInput = () => {
        return (
            <Content>
                <Form>
                <Item stackedLabel last>
                    <Label>Class name</Label>
                    <Input onChangeText = { text => this.setState({newClassInput: text}) }  />
                </Item>
                </Form>
                <Divider />
            </Content>
                
        )
    }

    render() {

        let data = [{
            value: 'SOEN 343',
          }, {
            value: 'SOEN 342',
          }, {
            value: 'COMP 335',
          }];

        return (
            <Container style={{...styles.main}}>
                <Content style={{...styles.wrapper}}>
                    <Dropdown
                        label='Select a class'
                        data={data}
                        baseColor="#fff"
                        textColor="#fff"
                        selectedItemColor="#c4c4c4"
                        itemColor="#fff"
                        pickerStyle={{backgroundColor:"#050505"}}
                        onChangeText={ value => this.setState({ selectClassInput: value }) }
                    />
                    <Divider label="OR" />
                    { this.state.enteringClass && this.addClassInput()  }
                    <Button 
                        primary
                        rounded
                        iconLeft
                        block
                        onPress = { () => this.setState({ enteringClass: true })}
                    >
                    <Icon type="MaterialIcons" name='add' /><Text> {this.state.enteringClass ? "Submit new class" : "Add a new class"} </Text></Button>
                    { this.state.enteringClass && <Button rounded danger style={{alignSelf:"center", marginTop: 12}} onPress={ () => this.setState({newClassInput: '', enteringClass: false})}><Text>Cancel</Text></Button>}
                </Content>
            </Container>
        )
    }
}