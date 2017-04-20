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

var BeautyView = require('./beautyView');

export default class AwesomeProject extends Component {
  render() {
    return (
      <BeautyView/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);