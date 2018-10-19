import React from 'react';
import Divider from './StyledComponents/Divider';
import { Container, Content, Item, Input, Label, Button, Spinner, H2 } from 'native-base';
import { Text } from 'react-native';

import AppHeader from './Header';
import { auth } from './firebase';
import styles from './styles';


export default class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			password: '',
			email: '',
			repeatPassword: '',
			errors: [],
			loading: false
		}
	}

	addNewUser = async () => {
		await this.setState({loading: true, errors: []});
		let { password, repeatPassword, email } = this.state;

		let result = '';

		if(password !== repeatPassword){
			result = {message: 'The passwords do not match.'};
		} else {
			result = await auth.createUserWithEmailAndPassword(email, password);
		}

		if(result){
			this.setState({loading: false, errors: [...this.state.errors, result]});
		}

	}

	render() {
		return (
			<Container style={styles.main}>
				<AppHeader title="Register" />

				<Content style={styles.wrapper}>

					<Item stackedLabel>
						<Label>Email</Label>
						<Input onChangeText={text => this.setState({ email: text })} />
					</Item>

					<Divider />

					<Item stackedLabel>
						<Label>Password</Label>
						<Input secureTextEntry={true} onChangeText={text => this.setState({ password: text })} />
					</Item>

					<Item stackedLabel>
						<Label>Repeat Password</Label>
						<Input secureTextEntry={true} onChangeText={text => this.setState({ repeatPassword: text })} />
					</Item>

					<Button disabled={this.state.loading} success full large title="Submit" onPress={() => this.addNewUser()} style={{ marginTop: 40 }}>
						{ this.state.loading ? <Spinner/> : <Text>Register</Text> }
					</Button>
					{this.state.errors.map( (error, i) => <H2 key={i} style={{color:'#ef3e3e'}}>{error.message}</H2>)}
				</Content>
			</Container>

		);
	}
}