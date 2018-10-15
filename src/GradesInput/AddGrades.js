import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Spinner } from 'native-base';
import styles from '../styles';
import Slider from 'react-native-slider';

export default class GradeInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newGrade: 0,
        }
    }

    tuneNewGrade = sign => {
        this.setState({newGrade: this.state.newGrade+sign});
    }

    render() {
        return (
            <Container style={styles.main}>
                <Content style={styles.wrapper}>
                    <Text style={{color:"#fff"}}>Current Semester: {this.props.activeClassWork.semester}</Text>
                    <Text style={{color:"#fff"}}>Current Class: {this.props.activeClassWork.className}</Text>
                    <Text style={{color:"#fff"}}>Current Classwork: {this.props.activeClassWork.name}</Text>  
                    <View>
                        <Text style={{marginVertical:30, color:"#fff", fontSize: 28}}>Current Grade: {this.props.activeClassWork.grade}</Text>
                        <Text style={{marginBottom:30, color:"#fff", fontSize: 28}}>New Grade: {this.state.newGrade}</Text>
                        <Slider
                            trackStyle={customStyles2.track}
                            thumbStyle={customStyles2.thumb}
                            minimumTrackTintColor='#30a935'
                            onValueChange={ value => this.setState({newGrade: value})}
                            value={this.state.newGrade}
                            step={1}
                            minimumValue={0}
                            maximumValue={100}
                        />
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <Button onPress={ () => this.tuneNewGrade(-0.5)}>
                                <Text>-0.5</Text>
                            </Button>
                            <Button onPress={ () => this.tuneNewGrade(0.5)}>
                                <Text>+0.5</Text>
                            </Button>
                        </View>
                        <Button full success style={{marginTop: 16}} disabled={this.props.loading} onPress = { async () => { await this.props.addAssignmentGrade(this.state.newGrade); this.props.setActiveTab(0) } }>
                            {this.props.loading && <Spinner />}<Text>Submit</Text>
                        </Button>
                        <Button dark full style={{marginTop: 16}} onPress={ () => this.props.setActiveTab(0)}>
                            <Text>Back</Text>
                        </Button>
                    </View>
                </Content>
            </Container>);
        }
    }

var customStyles2 = StyleSheet.create({
    track: {
      height: 4,
      borderRadius: 2,
    },
    thumb: {
      width: 30,
      height: 30,
      borderRadius: 30 / 2,
      backgroundColor: 'white',
      borderColor: '#30a935',
      borderWidth: 2,
    }
  });