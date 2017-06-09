/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
} from 'react';
import {
  AppRegistry,
} from 'react-native';

let BeautyView = require('./beautyView');
let LoginView = require('./loginView');
let FlexDimensionsBasics=require('./flexView1.js');
let SwiperView=require('./swiper.js');
let Gongfu=require('./gongfu.js');
let Share=require('./share');

export default class AwesomeProject extends Component {
  render() {
    return (
      <Share/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

/*可选模块
<Gongfu/>			八段锦
<SwiperView/>	轮播图
<BeautyView/>	美丽风景墙
<LoginView/>	QQ登陆
<FlexDimensionsBasics/>	Flex布局基础
*/
