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
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0
		};
	}
	static defaultProps = {
		duration: 5000
	}

	render() {
		return (
			<View style = {styles.container}>
					<ScrollView
						ref="scrollView"
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={true}						
					>						
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

	componentDidMount() {
		this.startTimer();
	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
	startTimer() {
		let scrollView = this.refs.scrollView;
		let imgCount = imageData.data.length;
		let num = 0;
		this.timer = setInterval(() => {
			let activePage = 0;
			console.log(this.state.currentPage);					
			if ((this.state.currentPage + 1) >= imgCount) {
				activePage = 0;
			} else {
				activePage = this.state.currentPage + 1;
			}
			this.setState({
				currentPage: activePage
			});

			let offsetX = activePage * width;
			scrollView.scrollResponderScrollTo({
				x: offsetX,
				y: 0,
				animated: true
			});
		}, this.props.duration);
	}
};

const styles = StyleSheet.create({
	container: {
		marginTop: 25
	},
	imgItem: {
		width: width,
		height: 160,
	}
});

module.exports = SwiperView;