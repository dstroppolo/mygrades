import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import WorkList from './WorkList';
import AddGrades from './AddGrades';

import { firestore } from '../firebase';

export default class HeaderTabs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            activeClassWork: {},
            loading: false, 
            gradeData: {}
        }
    }

    componentDidMount = () => {
        this.getGradeInfo();
    }

    getGradeInfo = async () => {
        if(this.props.user.uid){
            let gradeData = await firestore.getGradeInfo(this.props.user.uid);
            this.setState({gradeData: gradeData.data()});
        }
    }

    setActiveClassWork = classWork => {
        this.setState({ activeClassWork: classWork, activeTab: 1})
    }

    setActiveTab = tab => {
        this.setState({activeTab: tab});
    }

    addAssignmentGrade = async assignmentGrade => {
        this.setState({loading: true});
        let { name, className, semester } = this.state.activeClassWork
        console.log(name);
        console.log(className);
        console.log(semester);
        firestore.addAssignmentGrade(assignmentGrade, name, className, semester, this.props.user.uid)
            .then( () => {
                this.getGradeInfo();
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <Tabs page={this.state.activeTab}>
              <Tab heading={ <TabHeading><Icon type="MaterialIcons" name="list" /><Text>Work</Text></TabHeading>}>
                <WorkList 
                    scheduleData={this.state.gradeData}
                    setActiveClassWork={this.setActiveClassWork}
                />
              </Tab>
              <Tab heading={ <TabHeading><Icon type="MaterialIcons" name="grade" /><Text>Grade</Text></TabHeading>}>
                <AddGrades 
                    activeClassWork={this.state.activeClassWork}
                    addAssignmentGrade={this.addAssignmentGrade}
                    loading={this.state.loading}
                    setActiveTab={this.setActiveTab}
                />
              </Tab>
            </Tabs>
      ); 
    }
  }