import React from 'react'
import { Container, Content, Spinner } from 'native-base';
import styles from '../styles';
import { Text, View } from 'react-native';
import { VictoryBar, VictoryAxis, VictoryChart, VictoryTheme, VictoryStack, VictoryLabel } from "victory-native";
import { Dropdown } from 'react-native-material-dropdown';
import victoryChart from 'victory-native/lib/components/victory-chart';
import { getGradeBars } from './Calculations';


export default class OverviewChart extends React.PureComponent {


    formatDataSet = () => {

        let { courses, activeSemester, gradeData } = this.props;
        let courseData = [];
        if(gradeData[activeSemester]){
            courseData = getGradeBars(gradeData[activeSemester]);
        }
        let data1 = [{course:"", grade: ""}];
        let data2 = [{course:"", grade: ""}];
        let data3 = [{course:"", grade: ""}];
        if(courses.length){
            data1 = courses.map( (course, i) => {
                return ({
                    course: course, 
                    grade: parseFloat(courseData[0][i])
                })
            })
            data2 = courses.map( (course, i) => {
                return ({
                    course: course, 
                    grade: parseFloat(courseData[1][i])
                })
            })
            data3 = courses.map( (course, i) => {
                return ({
                    course: course, 
                    grade: parseFloat(courseData[2][i])
                })
            })
        }
        return [data1, data2, data3];
    }

    renderBars = data => {
        if(this.props.activeSemester){
            return (
                <VictoryStack colorScale={["#2BB1FF", "yellow", "green"]}>
                    <VictoryBar
                        data={data[0]}
                        x="course"
                        y="grade"
                        labels={d => d.grade}
                        style={{ labels: { fill: "white" } }}
                        labelComponent={<VictoryLabel dy={30}/>}
                    />
                    <VictoryBar
                        data={data[1]}
                        x="course"
                        y="grade"
                    />
                    <VictoryBar
                        data={data[2]}
                        x="course"
                        y="grade"
                        labels={d => d._y1}
                        style={{ labels: { fill: "white" } }}
                        labelComponent={<VictoryLabel dy={30}/>}
                    />
                    </VictoryStack>
                    
            )
        }
    }

    render() {

        let data = this.formatDataSet(); 

        if(this.props.loading){
            return (
                <Container style={styles.main}>
                    <Spinner />
                </Container>
            )
        }

        return (
            <Container style={styles.main}>
                <View style={{...styles.wrapper}}>
                    <Dropdown
                        label={`Select a Semester`}
                        data={ this.props.allSemesters.map( semester => { return {value: semester} }) }
                        baseColor="#fff"
                        textColor="#fff"
                        selectedItemColor="#c4c4c4"
                        itemColor="#fff"
                        pickerStyle={{backgroundColor:"#050505"}}
                        onChangeText={ value => this.props.setActiveSemester(value) }
                    />
                </View>
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
                    {this.renderBars(data)}
            </VictoryChart>
                <Text style={{color:"#2BB1FF"}} >Your current cumulated grade. </Text>
                <Text style={{color:"yellow"}}>Your maximum possible current grade.</Text>
                <Text style={{color:"green"}}>Your maximum possible final grade.</Text>
            </Container>
        )
    }

}