import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  ListView,
  Alert
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
var List_Detail = require("./component_list_detail");

class Simple_List extends Component {

	// 初始化模拟数据
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			testText : 'i am test text',
			dataSource: ds.cloneWithRows(this._makeData())
		};
	}
	
	_makeData(){
		var List_Data = [];
		for(var i=1; i<= this.props.dataNums; i++){
			List_Data.push({
				img : i%2==0?require( "./images/demo/newsImg1.png"):require( "./images/demo/newsImg2.png"),
				title : "国务院严格控制新设行政许可",
				content : "国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可"
			});
		}
		return List_Data;
	}
	
	_pressRow(title){
		this.props.navigator.push({
			name: '列表详情',
			component:List_Detail,
			params:{  
				title : title 
			}  
		});		 
    }
	
	_renderRowView(rowData) {
		//numberOfLines 限制显示几行
		
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
   
	}
	
	render() {
		return (
			<ScrollView>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={ this._renderRowView.bind(this)}/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({  
	row : {
		width:WINDOW_WIDTH,
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
}); 
module.exports = Simple_List;