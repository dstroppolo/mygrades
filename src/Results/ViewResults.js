import React from 'react'
import { Grid, BarChart } from 'react-native-svg-charts'
import { Container } from 'native-base';
import AppHeader from '../Header';
import HeaderTabs from './ResultsHeaderTabs';



export default class StackedBarChartWithOnPressExample extends React.PureComponent {

    render() {
 
        const fill = 'rgb(134, 65, 244)'
        const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ]
 
        return (
            <Container style={styles.main}>
                <AppHeader title="Enter class info" hasTabs/>
                <HeaderTabs user={this.props.screenProps.user} />
            </Container>

        )
    }
}
