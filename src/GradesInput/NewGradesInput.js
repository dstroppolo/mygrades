import React from 'react';

import { Container } from 'native-base';

import HeaderTabs from './GradesHeaderTabs';
import styles from '../styles';

import AppHeader from '../Header';

export default class NewGradesInput extends React.Component {
  

    render() {

        return (
            <Container style={styles.main}>
                <AppHeader title="Enter class info" hasTabs/>
                <HeaderTabs user={this.props.screenProps.user} />
            </Container>
        )
    }
}