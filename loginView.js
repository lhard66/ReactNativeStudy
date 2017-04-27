import React, {
	Component
} from 'react';

import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';

class LoginView extends Component {
	render() {
		return (
			<View style={styles.loginContainer}>
				<Text>login qq view</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	loginContainer: {
		backgroundColor: 'red',
	},
});

module.exports = LoginView;