import React, {
	Component
} from 'react';

import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
} from 'react-native';

let {
	width
} = require('Dimensions').get('window');

class LoginView extends Component {
	render() {
		return (
			<View style={styles.loginContainerStyle}>
				<Image source={require('./imgs/header.png')} style={styles.headerStyle} />
				<TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} />
				<TextInput placeholder={'请输入密码'} style={styles.textInputStyle} secureTextEntry ={true} />				
				<View style={styles.loginBtnStyle}>
					<Text>登录</Text>
				</View>
				<View style={styles.settingStyle}>
					<Text>无法登录</Text>
					<Text>新用户</Text>
				</View>
				<View style={styles.otherLoginStyle}>
					<Text>其他登录方式：</Text>
					<Image source={require('./imgs/share1.png')} style={styles.othersImgStyle} />
					<Image source={require('./imgs/share2.png')} style={styles.othersImgStyle} />
					<Image source={require('./imgs/share3.png')} style={styles.othersImgStyle} />					
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	loginContainerStyle: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#ddd',
	},
	headerStyle: {
		width: 80,
		height: 80,
		borderRadius: 40,
		borderWidth: 2,
		borderColor: '#FFF',
		marginTop: 50,
		marginBottom: 30,
	},
	textInputStyle: {
		height: 38,
		width: width,		
		textAlign: 'center',
	},
	loginBtnStyle:{
		height:35,
		width:width*0.95,
		backgroundColor:'blue',
		marginTop:30,
		marginBottom:20,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:8,
	},
	settingStyle:{
		flexDirection:'row',
		justifyContent:'space-between',
		width:width*0.95,
	},
	otherLoginStyle:{
		flexDirection:'row',
		alignItems:'center',
		position:'absolute',
		bottom:10,
		left:20,
	},
	othersImgStyle:{
		width:50,
		height:50,
		borderRadius:25,
		marginLeft:8,
	}

});

module.exports = LoginView;