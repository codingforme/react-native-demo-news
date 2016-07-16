import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  WebView,
  ScrollView,
  Dimensions,
  ListView,
  BackAndroid
} from 'react-native';
 
class List_Detail extends Component {

	// 初始化模拟数据
	constructor(props) {
		super(props);
	}
	
	goback(){
		const { navigator } = this.props;  
        if(navigator) {  
            navigator.pop();  
        }  
	}
	
	render() {
		return (			
			<View  style={{flex:1}}>  
				<View style={styles.header}>  
					<TouchableOpacity
						onPress={ () => this.goback() }>
						<Image source={require('./images/header/back.png')} style={styles.header_icon,styles.header_btn}/> 
					</TouchableOpacity>
					<View style={styles.header_center}>
						<Text style={styles.header_title}>{this.props.route.params.title}</Text>
					</View> 
				</View>
				<WebView
					ref="webview"
					style={styles.webview}
					source={{uri: "http://xw.qq.com/m/news/index.htm"}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					startInLoadingState={true}
					scalesPageToFit={true}
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
		height: 40,  
        width: 60
	},
    header_icon: {  
        resizeMode: 'stretch'  
    },
	webview : {
	
	}
}); 
module.exports = List_Detail;