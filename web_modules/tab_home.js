import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Navigator,
  Dimensions,
  TouchableOpacity 
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

var WINDOW_WIDTH = Dimensions.get('window').width;
var Swiper = require('react-native-swiper');
var List = require('./component_list');
const buttons = ['取消', '军事', '娱乐', '社会'];

class Tab_Home extends Component { 
	
	constructor(props){  
		super(props);  
	}  
	
	showActionSheet(){
		this.ActionSheet.show();
	}
	
	render() {
		return (
			<View style={{flex:1,justifyContent:'flex-start',alignItems:'center', bottom : 5}}>  
				<View style={styles.header}>  
					<View style={styles.header_btn}></View>
					<View style={styles.header_center}>
						<Text style={styles.header_title}>新闻网</Text>
					</View>
					<TouchableOpacity  onPress={this.showActionSheet.bind(this)}>
						<Image source={require('./images/header/more.png')} style={styles.header_icon,styles.header_btn}/>  
					</TouchableOpacity>
				</View>
				<Swiper style={styles.wrapper} showsButtons={false} autoplay={false} height={200} showsPagination={true}>
					<Image style={styles.slide} source={ require('./images/demo/slideshow1.jpg') }></Image>
					<Image style={styles.slide} source={ require('./images/demo/slideshow2.jpg') }></Image>
					<Image style={styles.slide} source={ require('./images/demo/slideshow3.jpg') }></Image>
					<Image style={styles.slide} source={ require('./images/demo/slideshow4.jpg') }></Image>
					<Image style={styles.slide} source={ require('./images/demo/slideshow5.jpg') }></Image>
				</Swiper>
				<List dataNums="6" route={this.props.route} navigator={this.props.navigator}/>
				<ActionSheet 
                    ref={(o) => this.ActionSheet = o}
                    title="进入新闻推荐分类！"
                    options={buttons}
                    cancelButtonIndex={0}
                    destructiveButtonIndex={1}
                />
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
    },  
	header_btn : {
		height: 30,  
        width: 30
	},
    header_icon: {  
        resizeMode: 'stretch'  
    },

	slide: {
		width: WINDOW_WIDTH,
		height:200,
		resizeMode: "stretch"
	}
});  
module.exports = Tab_Home;