import React from 'react'
import { Container, Content, Spinner } from 'native-base';
import styles from '../styles';
import { Dimensions } from 'react-native';
import { VictoryBar, VictoryAxis, VictoryChart, VictoryTheme, VictoryStack, VictoryLabel } from "victory-native";
import { Dropdown } from 'react-native-material-dropdown';
import victoryChart from 'victory-native/lib/components/victory-chart';


export default class OverviewChart extends React.PureComponent {

    formatDataSet = () => {

        let { courses, activeSemester, gradeData } = this.props;
        let data = []
        if(courses){
            data = courses.map( course => {
                return ({
                    course: course, grade: gradeData[activeSemester][course].currentAvg
                })
            })
        }
        return data;
    }

    render() {

        let data = this.formatDataSet(); 
    // let data = [];
        if(this.props.loading){
            return (
                <Container style={styles.main}>
                    <Spinner />
                </Container>
            )
        }

        return (
            <Container style={styles.main}>
                    <Dropdown
                        label={`Select a Semester`}
                        data={ this.props.allSemesters.map( semester => { return {value: semester} }) }
                        selectedItemColor="#c4c4c4"
                        itemColor="#fff"
                        pickerStyle={{backgroundColor:"#050505"}}
                        onChangeText={ value => this.props.setActiveSemester(value) }
                    />
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
        theme={VictoryTheme.material}
        
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={this.props.courses}
          tickFormat={ c => c }
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (x)}
          domain={{y:[0,100]}}
        />
        <VictoryBar
            style={{ data: { fill: "#c43a31" }, label: {color: '#fff'} }}
            data={data}
            x="course"
            y="grade"
        />
 
      </VictoryChart>


            </Container>
        )
    }

}