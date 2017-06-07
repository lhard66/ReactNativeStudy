import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	ListView
} from 'react-native'

class Gongfu extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>gongfu</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 8,
	}
});

module.exports = Gongfu;