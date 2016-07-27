/**
 * Created by ms.kim2 on 2016-07-27.
 */

import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://app.ddpstyle.com/common/awsfilelist?imgType=thumb'}}
        style={{marginTop: 20}}
      />
    );
  }
}

/* Export Component ==================================================================== */
module.exports = MyWebView;
module.exports.details = {
  title: 'thumbnail web page'
};