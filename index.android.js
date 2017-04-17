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
        <View style={styles.beautyContainer}>
          <Image source={require('./imgs/cell_1.jpg')} style={styles.img}/>
          <Text style={styles.text}>包包</Text>
        </View>

        <View style={styles.beautyContainer}>
          <Image source={require('./imgs/cell_1.jpg')} style={styles.img}/>
          <Text style={styles.text}>包包</Text>
        </View>
        <View style={styles.beautyContainer}>
          <Image source={require('./imgs/cell_1.jpg')} style={styles.img}/>
          <Text style={styles.text}>包包</Text>
        </View>
        <View style={styles.beautyContainer}>
          <Image source={require('./imgs/cell_1.jpg')} style={styles.img}/>
          <Text style={styles.text}>包包</Text>
        </View>
      </View>
    );
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