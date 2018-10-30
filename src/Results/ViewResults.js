import React from 'react'
import { Container } from 'native-base';
import AppHeader from '../Header';
import HeaderTabs from './ResultsHeaderTabs';



export default class StackedBarChartWithOnPressExample extends React.PureComponent {

    render() {
 
        return (
            <Container style={styles.main}>
                <AppHeader title="Enter class info" hasTabs/>
                <HeaderTabs user={this.props.screenProps.user} />
            </Container>

        )
    }
}
