import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Navigator,
  Dimensions,
  TouchableHighlight,
  ToastAndroid
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
var GiftedListView = require('react-native-gifted-listview'); //下拉刷新列表
var List_Detail = require("./component_list_detail");
 
var Gift_List = React.createClass({

	_onFetch(page = 1, callback, options) {
		setTimeout(() => {
			var rows = this._makeData(page);
			if (page === 4) {
				callback(rows, {
				  allLoaded: true, // the end of the list is reached
				});
			} else {
				callback(rows);
			}
			ToastAndroid.show('Data Loaded!', ToastAndroid.SHORT)
		}, 1000); // simulating network fetching
	},
	_makeData(page){
		var List_Data = [];
		for(var i=1; i<= 6; i++){
			List_Data.push({
				img : i%2==0?require( "./images/demo/newsImg1.png"):require( "./images/demo/newsImg2.png"),
				title : "国务院严格控制from page" + page,
				content : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可"
			});
		}
		return List_Data;
	},
	_pressRow(title){
		this.props.navigator.push({
			name: '列表详情',
			component:List_Detail,
			params:{  
				title : title 
			}  
		});		 
    },
	_renderRowView(rowData) {
		return (
			<TouchableHighlight 
				underlayColor='#c8c7cc'
				onPress={ this._pressRow.bind(this, rowData.title)}>
				<View style={styles.row}>
					<Image style={styles.left} source={ rowData.img }></Image>
					<View style={styles.right}>
						<Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
						<Text style={styles.content} numberOfLines={3}>{rowData.content}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	},

	render() {
		return (
			<View style={styles.container}>
				<GiftedListView
					rowView={this._renderRowView}
					onFetch={this._onFetch}
					firstLoader={true} // display a loader for the first fetching
					pagination={true} // enable infinite scrolling using touch to load more
					refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
					withSections={false} // enable sections
					customStyles={{
						paginationView: {
							backgroundColor: '#eee',
						}
					}}
					refreshableTintColor="blue"/>
			</View>
		);
	}
});

var styles = {
	container: {
		width:WINDOW_WIDTH,
		flex: 1,
		backgroundColor: '#FFF',
	},
	row : {
		flexDirection:'row',
		borderColor : "#d4d4d4",
		borderBottomWidth : 1
	},
	left : {
		width: 80,
        height: 80,
        margin : 10
	},
	right : {
		flex:1,
		padding: 10,
		paddingLeft: 0
	},
	title : {
		fontSize: 19,
        color: '#656565'
	},
	content : {
		fontSize: 15,
        color: '#656565'
	}
}; 

module.exports = Gift_List;