import React from 'react';
import { ScrollView, View } from 'react-native';
import { FormLabel, Icon, FormInput, Button, Text } from 'react-native-elements';
import { Container, Content, Item, Input, Label,Tab, Tabs, TabHeading, } from 'native-base';

import HeaderTabs from './HeaderTabs';
import styles from './styles';

import AppHeader from './Header';


export default class NewInfoInput extends React.Component {
  

    render() {

        return (
            <Container style={styles.main}>
                
                <AppHeader title="Enter class info" hasTabs/>
                <HeaderTabs user={this.props.screenProps.user} />

            </Container>
        )
    }
}