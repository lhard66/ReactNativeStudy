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
				<ListView
					dataSource={}							//数据源
					renderRow{this.renderRow}	//渲染布局
				/>
			</View>
		);
	}
	renderRow(rowData,sectionID,rowID,highlightRow){
		reutrn(
			<View style={styles.cellViewStyle}>
    		<Image source={{uri:rowData.img}} style={styles.imgStyle} />
    		<View style={style.wordStyle}>
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