/**
 * Created by ms.kim2 on 2016-07-13.
 */
'use strict';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

class MyCamera extends Component {

  constructor(props) {
    super(props);
  }

  // static propTypes = {
  //   navigator: React.PropTypes.object.isRequired,
  //   showSplashScreen: React.PropTypes.bool,
  //   placeholder: React.PropTypes.string,
  // }

  /**
   * Navigates to same scene (for Demo purposes)
   */
  // _navigate = (navbarTitle) => {
  //   this.props.navigator.push({
  //     title: navbarTitle,
  //     component: ComingSoon,
  //     index: 2
  //   });
  // }


  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}><Icon name="camera" size={30} color="#4F8EF7" /></Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
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
    backgroundColor: '#000',
    opacity: 1.0,
    borderRadius: 15,
    color: '#000',
    padding: 20,
    margin: 50
  }
});

module.exports = MyCamera;
module.exports.details = {
  title: 'My Camera'
};