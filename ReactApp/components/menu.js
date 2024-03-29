/**
 * Menu Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

// Screens
import StyleGuide from '../screens/style.guide'
import ComingSoon from '../screens/soon'
import FormExample from '../screens/forms'
import ListViewExample from '../screens/listview'
import Camera from '../screens/mycamera'
//import Soon2 from '../screens/soon2'
//import PhotoBrowser from '../screens/photobrowser'
//import ImageCropPicker from '../screens/imagecroppicker'
import ImagePicker from '../screens/imagepicker'
import ItemListView from '../screens/itemlistview'

/* Component ==================================================================== */
class Menu extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      menu: [
        {title: 'Home', component: ComingSoon, props: {passProps: {placeholder: '신기하고 재밌는 React-Native~~~'}}},
        {title: 'Text List', component: ListViewExample, props: {noImages: true}},
        {title: 'Image List', component: ListViewExample},
        {title: 'Item List', component: ItemListView},
        {title: 'ImagePicker', component: ImagePicker},
        {title: 'My Camera', component: Camera},
        {title: 'Forms', component: FormExample},
        {title: 'Style Guide', component: StyleGuide},
        /*{title: 'ImageCropPicker', component: ImageCropPicker},*/
        /*{title: '테스트-화면', component: Soon2},*/
        /*{title: 'Photo Browser', component: PhotoBrowser},*/
      ],
    };
  }

  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  }

  /**
    * RENDER
    */
  render = () => {
    let { navigate } = this.props;
    let { menu } = this.state;

    // Build the actual Menu Items
    let menuItems = [];
    menu.map((item)=>{
      let { title, component, props } = item;

      menuItems.push(
        <TouchableOpacity key={'menu-item-'+title}
          onPress={()=>navigate(title, component, props)}>
          <View style={[styles.menuItem]}>
            <Text style={[AppStyles.baseText, styles.menuItem_text]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={[styles.menuContainer]}>
        <View style={[styles.menu]}>{menuItems}</View>
      </View>
    );
  }
}


/* Styles ==================================================================== */
const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: "#111111",
  },
  menu: {
    flex: 1,
    left: 0,
    right: 0,
    height: AppConfig.windowHeight,
    backgroundColor: "#111111",
    padding: 20,
    paddingTop: AppConfig.statusBarHeight,
  },
  menuItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 18,
    lineHeight: parseInt(18 + (18 * 0.5)),
    fontWeight: '500',
    marginTop: 10,
    flex: 1,
    color: "#EEE"
  },
});

/* Export Component ==================================================================== */
export default Menu