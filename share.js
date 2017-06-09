/*
	九宫格分享	
*/
import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	Image,
	ListView,
	TouchableOpacity,
	Alert,
} from 'react-native';

// const shareData = require('./data/shareData.json');
const {
	width
} = require('Dimensions').get('window');

class Share extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>123</Text>
			</View>
		)
	}
	renderRow(rowData) {
		return (
			<View style={styles.shareContainer}>
				<Image source={{uri:'cell_1'}} style={styles.img} />
				<Text style={styles.title}>123</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
	shareContainer: {

	},
	img: {

	},
	title: {

	}
});

module.exports = Share;