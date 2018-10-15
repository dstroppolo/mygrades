import React from 'react';
import { Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import AddInput from './AddInput';
import AddClasswork from './AddClasswork';

import { firestore } from '../firebase';

export default class HeaderTabs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            activeSemester: '',
            activeClass: '',
            activeClassWork: '',
            loading: false, 
            gradeData: {}
        }
    }

    componentDidMount = () => {
        this.getGradeInfo();
    }

    setActiveTab = tab => {
        this.setState({ activeTab: tab})
    }

    setActiveSemester = semester => {
        this.setState({ activeSemester: semester, activeClass: ''})
    }

    setActiveClass = selectedClass => {
        this.setState({ activeClass: selectedClass})
    }

    addNewSemester = async newSemester => {
        if(newSemester){
            this.setState({loading: true});
            await this.setActiveSemester(newSemester);
            firestore.addNewSemester(this.state.activeSemester, this.props.user.uid)
                .then( () => {
                    this.getGradeInfo();
                    this.setState({loading: false});
                })
        }
    }

    addNewClass = async newClass => {
        this.setState({loading: true});
        await this.setActiveClass(newClass);
        firestore.addNewClass(this.state.activeClass, this.state.activeSemester, this.props.user.uid)
            .then( () => {
                this.getGradeInfo();
                this.setState({loading: false});
            });
    }

    addNewAssignment = async assignmentName => {
        this.setState({loading: true});
        firestore.addNewAssignment(assignmentName, this.state.activeClass, this.state.activeSemester, this.props.user.uid)
            .then( () => {
                this.getGradeInfo();
                this.setState({loading: false});
            });
    }

    removeAssignment = async assignmentName => {
        this.setState({loading: true});
        firestore.removeAssignment(assignmentName, this.state.activeClass, this.state.activeSemester, this.props.user.uid)
            .then( () => {
                this.getGradeInfo();
                this.setState({loading: false});
            });
    }

    addAssignmentWeight = async (assignmentWeight, assignmentName) => {
        this.setState({loading: true});
        let aw = parseFloat(assignmentWeight.replace(",", "."));
        firestore.addAssignmentWeight(aw, assignmentName, this.state.activeClass, this.state.activeSemester, this.props.user.uid)
            .then( () => {
                this.getGradeInfo();
                this.setState({loading: false});
            });
    }
    
    getGradeInfo = async () => {
        if(this.props.user.uid){
            let gradeData = await firestore.getGradeInfo(this.props.user.uid);
            this.setState({gradeData: gradeData.data()});
        }
    }

    render() {
        return (
            <Tabs page={this.state.activeTab}>
              <Tab heading={ <TabHeading><Icon type="MaterialIcons" name="date-range" /><Text>Semester</Text></TabHeading>}>
                <AddInput 
                    inputName="Semester" 
                    setActiveTab={ this.setActiveTab } 
                    setActiveInput={ this.setActiveSemester } 
                    nextTab={ 1 } 
                    activeInput={ this.state.activeSemester }
                    createNewInput={ this.addNewSemester }   
                    loading={ this.state.loading } 
                    listInfo={Object.keys(this.state.gradeData)}
                />
              </Tab>
              <Tab heading={ <TabHeading><Icon type="MaterialIcons" name="class" /><Text>Class</Text></TabHeading>}>
                <AddInput 
                    inputName="Class" 
                    setActiveTab={ this.setActiveTab } 
                    setActiveInput={ this.setActiveClass } 
                    selectedSemester={this.state.activeSemester} 
                    nextTab={ 2 } 
                    activeInput={this.state.activeClass}
                    createNewInput={ this.addNewClass }   
                    loading={ this.state.loading }
                    listInfo={this.state.activeSemester && this.state.gradeData[this.state.activeSemester] ? Object.keys(this.state.gradeData[this.state.activeSemester]) : [] }
                />
              </Tab>
              <Tab heading={ <TabHeading><Icon  type="MaterialIcons" name="work" /><Text>Work</Text></TabHeading>}>
                <AddClasswork 
                    selectedSemester={this.state.activeSemester} 
                    selectedClass={this.state.activeClass} 
                    createNewInput={this.addNewAssignment}
                    listInfo={this.state.activeSemester && this.state.gradeData[this.state.activeSemester] && this.state.gradeData[this.state.activeSemester][this.state.activeClass] ? this.state.gradeData[this.state.activeSemester][this.state.activeClass] : {} }                    
                    loading={this.state.loading}
                    removeAssignment={this.removeAssignment}
                    addAssignmentWeight={this.addAssignmentWeight}
               />
              </Tab>
            </Tabs>
      );
    }
  }