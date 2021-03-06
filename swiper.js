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
	//变量state初始化
	constructor(props) {
			super(props);
			this.state = {
				currentPage: 0,				
			};			
		}
		//常量props初始化
	static defaultProps = {
		duration: 3000
	}

	render() {
		return (
			<View style = {styles.container}>
					<ScrollView
						ref="scrollView"
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={true}					
						onScrollBeginDrag={this.onScrollBeginDrag}	
						onScrollEndDrag={this.onScrollEndDrag}
					>						
						{this.renderAllImage()}
					</ScrollView> 
					<View style={styles.pageIndicator}>
						{this.renderPageCircle()}
					</View>
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
	renderPageCircle() {
			var indicatorArr = [];
			var indicatorStyle;
			for (let i = 0; i < imageData.data.length; i++) {
				indicatorStyle = (i == this.state.currentPage) ? {
					color: 'orange'
				} : {
					color: '#fff'
				};
				indicatorArr.push(
					<Text key={i} style={[{fontSize:25},indicatorStyle]}>&bull;</Text>
				);
			}
			return indicatorArr;
		}
		//应用加载完成调用
	componentDidMount() {
			this.startTimer();
		}
		//对时间组件做防异常处理
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
	startTimer() {
		let scrollView = this.refs.scrollView;
		let imgCount = imageData.data.length;
		let num = 0;
		this.timer = setInterval(() => {
			let activePage = 0;
			//state变量调用方式
			console.log(this.state.currentPage);
			if ((this.state.currentPage + 1) >= imgCount) {
				activePage = 0;
			} else {
				activePage = this.state.currentPage + 1;
			}
			//state变量设值方式
			this.setState({
				currentPage: activePage
			});

			let offsetX = activePage * width;
			scrollView.scrollResponderScrollTo({
				x: offsetX,
				y: 0,
				animated: true
			});
			//常量调用方式
		}, this.props.duration);		
		console.log(this);
	}
	//开始拖拽停止计时，停止拖拽开始计时。
	onScrollBeginDrag(){
		//这里的this指向ScrollView，而非SwiperView类。故this.timer数据为undifine.
		//ScrollView拖拽时会自动停止计时，文章地址：http://blog.csdn.net/real_bird/article/details/55657548
		// clearInterval(this.timer);
		console.log('开始拖动');
	}
	onScrollEndDrag(){
		console.log('停止拖动');
	}
};

const styles = StyleSheet.create({
	container: {
		marginTop: 8,
	},
	imgItem: {
		width: width,
		height: 160,
	},
	pageIndicator: {
		width: width,
		height: 25,
		backgroundColor: 'rgba(0,0,0,0.4)',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		justifyContent:'flex-end',
		paddingRight:6,
	}
});

module.exports = SwiperView;