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
} from 'react-native'

const gfData = require('./data/gongfu.json');

class Gongfu extends Component {
	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource:ds.cloneWithRows(gfData.data),
		}
	}
	render() {
		console.log(this.state.dataSource);		
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
		return(
			<View style={styles.cellViewStyle}>
    		<Image source={{uri:rowData.img}} style={styles.imgStyle} />
    		<View style={styles.wordStyle}>
    			<Text style={styles.titleStyle}>123456</Text>
    			<Text style={styles.infoStyle}>abcdefg</Text>
    		</View>
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