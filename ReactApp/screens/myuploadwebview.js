/**
 * Created by ms.kim2 on 2016-07-27.
 */

import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyUploadWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://app.ddpstyle.com/common/awsfileupload'}}
        style={{marginTop: 20}}
      />
    );
  }
}

/* Export Component ==================================================================== */
module.exports = MyUploadWebView;
module.exports.details = {
  title: 'file upload'
};