/**
 * Created by ms.kim2 on 2016-07-13.
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import AppStyles from '../../styles';

import MainTabBar from './MainTabBar';
import Platform from 'Platform';
import BackAndroid from 'BackAndroid';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ImagePicker from '../../screens/imagepicker';
import MyCamera from '../../screens/mycamera';

export default React.createClass({

  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={1}
      renderTabBar={() => <MainTabBar />}
    >
      <ScrollView tabLabel="ios-camera"  style={[AppStyles.container]} >
        <MyCamera/>
      </ScrollView>
      <ScrollView tabLabel="ios-image" style={[AppStyles.container]}>
        <ImagePicker/>
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Messenger</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Notifications</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-list" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Other nav</Text>
        </View>
      </ScrollView>
    </ScrollableTabView>
  },
});

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});