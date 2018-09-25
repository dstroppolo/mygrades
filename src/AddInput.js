import React from 'react';
import { Container, Content, Item, Form, Button, Icon, Text, Label, Input, Spinner } from "native-base";
import styles from './styles';
import { Dropdown } from 'react-native-material-dropdown';
import Divider from './StyledComponents/Divider';


export default class AddInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newInput: '',
            enteringInput: false,
            selectInput: ''
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

    getListItems = () => {
        let list = [];
        if(this.props.listInfo.length){
            this.props.listInfo.forEach( item => {
                list.push({value: item});
            })
        }
        return list;
    }

    render() {

        let data = this.getListItems();

        return (
            <Container style={{...styles.main}}>
                <Content style={{...styles.wrapper}}>
                    { !!this.props.selectedSemester && <Text style={{color:"#fff"}}>Current Semester: {this.props.selectedSemester}</Text>}
                    { !!this.props.selectedClass && <Text style={{color:"#fff"}}>Current Class: {this.props.selectedClass}</Text>}

                    <Dropdown
                        label={`Select a ${this.props.inputName}`}
                        data={data}
                        baseColor={ this.state.enteringInput ? "#565656" : "#fff"}
                        textColor="#fff"
                        selectedItemColor="#c4c4c4"
                        itemColor="#fff"
                        pickerStyle={{backgroundColor:"#050505"}}
                        onChangeText={ value => this.setState({selectInput: value}) }
                        value = { this.props.activeInput } 
                        disabled = { this.state.enteringInput }
                    />
                    <Divider label="OR" />
                    { this.state.enteringInput && this.addInput()  }
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
                    { (this.props.inputName==='Class' && !this.props.selectedSemester) && <Text style={{color:"#fff"}}>Select a semester before adding a new class.</Text>}
                    { this.state.enteringInput && <Button full danger style={{alignSelf:"center", marginTop: 12}} onPress={ () => this.setState({newInput: '', enteringInput: false})}><Text>Cancel</Text></Button>}
                    
                    <Divider />
                    
                    { !!this.state.selectInput && <Button success full onPress={ () => { this.props.setActiveTab(this.props.nextTab); this.props.setActiveInput(this.state.selectInput) } }><Text>Select</Text></Button> }
                    
                </Content>
            </Container>
        )
    }
}