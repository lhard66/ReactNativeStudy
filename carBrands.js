/**
 * 汽车品牌ListView
 * 因ListView已废弃，故使用方法参见gongfu.js。
 */
import React, { component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView,
}	from 'react-native';

const Car = require('./data/car.json');

class CarBrands extends Component {
	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2,
			sectionHeaderHasChanged: (s1, s2) => s1 != s2,
		});
	}

	render() {
		return (
			<ListView
				dataSource = {this.state.dataSource}
				renderRow = {}
			/>
		)
	}

}