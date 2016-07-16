/*
 * 页面路由
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  BackAndroid,
  Navigator,
  Image,
  Text,
  View,
  StatusBar
} from 'react-native';

var Tab = require("./tab");
var _navigator;

var Routes = React.createClass({

	configureScence: function(){
		return Navigator.SceneConfigs.FloatFromRight;
	},
	renderScene: function(route, navigator){
		_navigator = navigator;
		let Component = route.component;
		return <Component route={route} navigator={navigator}/>
	},
	render: function(){
		var renderScene = this.renderSceneAndroid;
		var configureScence = this.configureScenceAndroid;
		return (
			<Navigator
				initialRoute={{ name: '主页', component:Tab }}
				configureScene={ this.configureScence }
				renderScene={ this.renderScene}
			/>
		);
	}
});

//监听硬件的back键操作
BackAndroid.addEventListener('hardwareBackPress', function() {
	if(_navigator == null){
		return false;
	}
	if(_navigator.getCurrentRoutes().length === 1){
		return false;
	}
	_navigator.pop();
	return true;
});

module.exports = Routes;