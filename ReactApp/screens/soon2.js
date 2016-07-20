/**
 * Created by ms.kim2 on 2016-07-13.
 */
'use strict';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
// App Globals
import AppStyles from '../styles'


class Soon2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[AppStyles.container]}>
          <Text style={styles.capture} > 화면 테스트 Ionicons <Icon name="ios-camera" size={24} color="#4F8EF7" /> </Text>
          <Text style={styles.capture} > 화면 테스트 FontAwesome <FaIcon name="camera" size={30} color="#4F8EF7" /> </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

module.exports = Soon2;
module.exports.details = {
  title: 'My Soon2'
};