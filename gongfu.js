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
} from 'react-native'

const gfData = require('./data/gongfu.json');
const {
	width
} = require('Dimensions').get('window');

class Gongfu extends Component {
	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			// 根据指定的dataBlob和 rowIdentities为ListViewDataSource复制填充数据。dataBlob即原始数据。需要在初始化时定义抽取函数（否则使用默认的抽取函数）。
			dataSource: ds.cloneWithRows(gfData.data),
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}//数据源
					renderRow={this.renderRow}	//渲染布局
				>					
				</ListView>
			</View>
		);
	}
	renderRow(rowData, sectionID, rowID, highlightRow) {
		return (
			<TouchableOpacity activeOpacity={0.5} onPress={()=>{Alert.alert(rowID+'row')}}>			
				<View style={styles.cellViewStyle}>
	    		<Image source={{uri:rowData.icon}} style={styles.imgStyle} />
	    		<View style={styles.wordStyle}>
	    			<Text style={styles.titleStyle}>{rowData.name}</Text>
	    			<Text style={styles.infoStyle}>{rowData.info}</Text>
	    		</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 8,
	},
	cellViewStyle: {
		padding: 10,
		backgroundColor: '#FFF',
		borderBottomWidth: 0.5,
		borderBottomColor: '#e8e8e8',
		flexDirection: 'row',
	},
	imgStyle: {
		height: 60,
		width: 60,
		marginRight: 15,
	},
	wordStyle: {

	},
	titleStyle: {
		color: 'red',
		fontSize: 18,
		width: width * 0.7,
		marginBottom: 8,
	},
	infoStyle: {
		color: 'blue',
	}
});

module.exports = Gongfu;