import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import WorkList from './WorkList';

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

    getGradeInfo = async () => {
        if(this.props.user.uid){
            let gradeData = await firestore.getGradeInfo(this.props.user.uid);
            this.setState({gradeData: gradeData.data()}, () => console.log(this.state.gradeData));
        }
    }

    render() {
        return (
            <Tabs page={this.state.activeTab}>
              <Tab heading={ <TabHeading><Icon type="MaterialIcons" name="list" /><Text>Work</Text></TabHeading>}>
                <WorkList />
              </Tab>
              <Tab heading={ <TabHeading><Icon type="MaterialIcons" name="grade" /><Text>Grade</Text></TabHeading>}>
 
              </Tab>
            </Tabs>
      ); 
    }
  }