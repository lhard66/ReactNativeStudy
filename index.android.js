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


export default class AwesomeProject extends Component {
  render() {
    return (
      <FlexDimensionsBasics/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

{ /*可选模块*/ } 
{ /*<BeautyView>*/ }
{/*<LoginView/>*/}
