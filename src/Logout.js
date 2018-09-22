import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { auth } from './firebase';
import AppHeader from './Header';
import styles from './styles';

export default class Logout extends React.Component {

    componentWillMount = () => {
        auth.signOut();
    }

    componentDidMount = () => {
        this.props.navigation.navigate("Add Classes")
    }

    render() {
        return (
            <View style={styles.main}>
                <AppHeader title="Logout" />
                <ActivityIndicator />        
            </View>
        )
    }
}
