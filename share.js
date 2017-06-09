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

const shareData = require('./data/cell.json');
const {
	width
} = require('Dimensions').get('window');
let cols = 2;
let cellWidth = 100;
let vMargin = (width - cellWidth * cols) / (cols + 1);
let hMargin = 25;

class Share extends Component {
	constructor(props) {
			super(props);
			let ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.state = {
				dataSource: ds.cloneWithRows(shareData.data),
			}
		}
		/*static defaultProps={
			clos:3,
			cellWidth:100,

		}*/
	render() {
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderRow}
					contentContainerStyle={styles.listViewStyle}
				>					
				</ListView>
			</View>
		)
	}
	renderRow(rowData) {
		return (
			<View style={styles.shareContainer}>
				<Image source={{uri:rowData.icon}} style={styles.img} />
				<Text style={styles.title}>{rowData.name}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
	listViewStyle: {
		flexDirection: 'row',
		flexWrap: 'wrap',//主轴上占满时换行
	},
	shareContainer: {
		width:100,
		height:70,
		marginLeft: vMargin,
		marginTop: hMargin,
		alignItems:'center',//在侧轴上对齐
	},
	img: {
		width: 100,
		height: 60,
	},
	title: {
		color:'red',
	}
});

module.exports = Share;