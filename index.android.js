/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const Dimensions = require('Dimensions');
const BeautyData = require('./data/cell.json');

let {
  width
} = Dimensions.get('window');

//定义全局变量
const cols = 3;
const boxWidth = 60;
const boxHeight = 80;
const boxLeftMargin = (width - cols * boxWidth) / (cols - 1);
const boxTopMargin = 20;

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderBeauty()}
      </View>
    );
  }
  renderBeauty() {
    var allBeauty = [];
    for (let i = 0; i < BeautyData.data.length; i++) {
      let Beauty = BeautyData.data[i];
      allBeauty.push(
        <View key={i} style={styles.beautyContainer}>
      { /*目前版本："react-native": "0.43.2"。在应用中添加图片，需要重启安卓，重新打包。只有在drawable中的图片才可以被识别，在目前版本中。*/ }
          <Image source={{uri:Beauty.icon}} style={styles.img}/>
          {/*<Image source={{uri:'http://www.baidu.com/img/bd_logo1.png'}} style={styles.img}/>*/}
          <Text style={styles.text}>{Beauty.name}</Text>
        </View>
      );
    }
    return allBeauty;
  }
}

const styles = StyleSheet.create({
  container: {
    //确定主轴方向
    flexDirection: 'row',
    //换行显示
    flexWrap: 'wrap',
  },
  beautyContainer: {
    //设置侧轴对齐方式
    alignItems: 'center',
    width: boxWidth,
    height: boxHeight,
    marginLeft: boxLeftMargin,
    marginTop: boxTopMargin,
  },
  img: {
    alignSelf: 'center',
    width: 100,
    height: 60,
  },
  text: {
    alignSelf: 'center',
    color: 'orangered',
    fontSize: 13,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);