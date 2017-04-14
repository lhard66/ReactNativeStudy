/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require('./imgs/cell_1.jpg')} style={styles.img}/>
          <Text style={styles.text}>包包</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
