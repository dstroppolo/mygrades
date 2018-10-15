import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import SampleChart from './SampleChart';
import { firestore } from '../firebase';

export default class HeaderTabs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            allSemesters: [],
            activeSemester: '',
            courses: [],
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
            let data =  gradeData.data();
            this.setState({
                allSemesters: Object.keys(data)
            })
        }
    }

    setActiveSemester = semester => {
        this.setState({ activeSemester: semester})
    }

    setActiveTab = tab => {
        this.setState({activeTab: tab});
    }

    addAssignmentGrade = async assignmentGrade => {
        this.setState({loading: true});
        let { name, className, semester } = this.state.activeClassWork
        firestore.addAssignmentGrade(assignmentGrade, name, className, semester, this.props.user.uid)
            .then( () => {
                this.getGradeInfo();
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <Tabs page={this.state.activeTab}>
              <Tab heading={ <TabHeading><Icon type="MaterialIcons" name="list" /><Text>Overview</Text></TabHeading>}>
                <SampleChart 
                    allSemesters = {this.state.allSemesters}
                />
              </Tab>
              <Tab heading={ <TabHeading><Icon type="MaterialIcons" name="grade" /><Text>By Class</Text></TabHeading>}>
               
              </Tab>
            </Tabs>
      ); 
    }
  }