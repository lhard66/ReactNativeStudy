import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
} from 'react-native';

const imageData = require('./data/swiperImage.json');
const {
	width
} = require('Dimensions').get('window');

class SwiperView extends Component {
	render() {
		return (
			<View style = {styles.container}>
					<ScrollView>						
						{this.renderAllImage()}
					</ScrollView> 
				</View>
		);
	}
	renderAllImage() {
		let images = [];
		let imgsArr = imageData.data;
		for (let i = 0; i < imgsArr.length; i++) {
			let imgItem = imgsArr[i];
			images.push(
				<Image source={{uri:imgItem.img}} style={styles.imgItem} key={i} />
			);
		}
		return images;
	}
};

const styles = StyleSheet.create({
	container: {

	},
	imgItem: {
		width: width,
		height: 120,
	}
});

module.exports = SwiperView;