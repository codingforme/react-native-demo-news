import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

var GiftList = require('./component_giftlist');

class Tab_Suggest extends Component { 
	render() {
		return (
			<View style={{flex:1,justifyContent:'flex-start',alignItems:'center', bottom : 5}}>  
				<View style={styles.header}>  
					<View style={styles.header_center}>
						<Text style={styles.header_title}>推荐新闻</Text>
					</View> 
				</View>
				<GiftList route={this.props.route} navigator={this.props.navigator}/>
			</View>   
		);
	}
}

const styles = StyleSheet.create({  
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
    }
});  
module.exports = Tab_Suggest;