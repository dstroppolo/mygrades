import React from 'react';
import { Container, Left, Content, Right, Icon, List, ListItem, Text, Spinner } from 'native-base';
import styles from '../styles';


export default class GradeInput extends React.Component {

    renderListItems = () => {

        let info = this.props.scheduleData;
        let semesters = Object.keys(info);
        
        //get the classes for each semester, and the works for each class

        let list = semesters.map( semester => {
        let classes =  Object.keys(info[semester]);

            let workNames = classes.map( className => {
                let works = Object.keys(info[semester][className]);

                let items = works.map( work => {
                    let workObject = info[semester][className][work];
                    workObject.name = work;
                    workObject.className = className;
                    workObject.semester = semester;
                    return (
                        <ListItem onPress={() => this.props.setActiveClassWork(workObject)}>
                            <Left>
                                <Text style={{color:"#fff"}}>{work} | </Text><Text style={{color:"green"}}>{ workObject.grade && `${workObject.grade}%`}</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    )
                });

                items.unshift(
                    <ListItem itemDivider style={{backgroundColor:'#494949'}}>
                        <Text style={{color:"#fff"}}>{className}</Text>
                    </ListItem>
                )
                return items;
            });

            workNames.unshift(
                <ListItem itemHeader  style={{backgroundColor:'#7f7f7f'}}>
                    <Text style={{color:"#fff"}}>{semester}</Text>
                </ListItem>
            )
            return workNames
        });
        
        return list;
    }

    render() {
        return (
            <Container style={styles.main}>
                <Content>

                        { Object.keys(this.props.scheduleData).length > 0 ? 
                        
                            <List>
                                { this.renderListItems() }
                            </List> :
                            <Spinner />
                        }

                </Content>
            </Container>
        );
    }
}