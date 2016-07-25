/**
 * Created by ms.kim2 on 2016-07-25.
 */

'use strict';

var React = require('React');
var Platform = require('Platform');
var BackAndroid = require('BackAndroid');
import NavbarElements from '../components/navbar.elements';
import TabBar from '../components/navigation/MainTab';

var MyNavigator = React.createClass({

  _handlers: ([]: Array<() => boolean>),

  componentDidMount: function() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  },

  componentWillUnmount: function() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  },

  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener,
    };
  },

  addBackButtonListener: function(listener) {
    this._handlers.push(listener);
  },

  removeBackButtonListener: function(listener) {
    this._handlers = this._handlers.filter((handler) => handler !== listener);
  },

  handleBackButton: function() {
    for (let i = this._handlers.length - 1; i >= 0; i--) {
      if (this._handlers[i]()) {
        return true;
      }
    }

    const {navigator} = this.refs;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    if (this.props.tab !== 'schedule') {
      this.props.dispatch(switchTab('schedule'));
      return true;
    }
    return false;
  },
render: function() {
  return (
    <NavigationBar
      title={<NavbarElements.Title title={route.title || null}/>}
      statusBar={{style: 'light-content', hidden: false}}
      style={[AppStyles.navbar]}
      tintColor={AppConfig.primaryColor}
      leftButton={<NavbarElements.LeftButton onPress={leftButton.onPress} icon={leftButton.icon}/>}/>
    < TabBar / >
  );
}
});