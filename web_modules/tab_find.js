import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
	ScrollView
} from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');
var GiftList = require('./component_giftlist');

class Tab_Find extends Component { 

	constructor(props){  
		super(props);  
	}  
	
	render() {
		 
		return (
		    <View style={styles.container}>  
				<View style={styles.header}>  
					<View style={styles.header_center}>
						<Text style={styles.header_title}>发现</Text>
					</View> 
				</View>
				<View style={styles.inputView}>  
					<TextInput placeholder="精选、最热、专栏" style={styles.TextInput} underlineColorAndroid="transparent"/>
				</View> 
				<ScrollableTabView 
					tabBarUnderlineColor="#0072C6" 
					tabBarActiveTextColor="#0072C6"
					tabBarBackgroundColor="#FFF">
					<GiftList tabLabel="精选" route={this.props.route} navigator={this.props.navigator}/>
					<GiftList tabLabel="最热" route={this.props.route} navigator={this.props.navigator}/>
					<GiftList tabLabel="专栏" route={this.props.route} navigator={this.props.navigator}/>
				</ScrollableTabView>
			</View>   
		);
	}
}


const styles = StyleSheet.create({  
	container : {
		flex:1,
		bottom : 5
	},
	/*头部*/
    header: {  
        flexDirection: 'row',   // 水平排布  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingTop: 20,  
        height:  68,    
        backgroundColor: '#0072C6',  
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中  
    },   
	header_center : {
		flex: 1,   
        alignItems: 'center', 
		justifyContent: 'center'
	},
    header_title: {  
		fontSize: 18,
		color: "white"
    },
    inputView: {
        height: 50,
		backgroundColor: '#F5F5F5',  
    },
    TextInput: {
        flex: 1,
        fontSize: 16, 
		lineHeight : 16,
		padding: 5,
		marginLeft:15,
		marginTop:10,
		marginRight:15,
		marginBottom:10,
		backgroundColor: 'white',  
    },
}); 
module.exports = Tab_Find;