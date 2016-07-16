import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
	ScrollView
} from 'react-native';

class Tab_Mine extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headtitle}>添加账号</Text>
                </View>
                <View style={styles.avatarView}>
                    <Image source={require('./images/demo/me.png')} style={styles.avatarimage}/>
                </View>
                <View style={styles.inputView}>
					<TextInput style={styles.TextInput} placeholder="手机号/邮箱" underlineColorAndroid="transparent"/>
					<View style={styles.dividerView}><View style={styles.divider}></View></View>
					<TextInput style={styles.TextInput} placeholder="密码" secureTextEntry={true} underlineColorAndroid="transparent"/>
				</View>

                <View style={styles.bottomView}>
                    <View style={styles.buttonView}>
                        <Text style={styles.loginText}>登 录</Text>
                    </View>
                    <View style={styles.bottombtnsView}>
                        <View style={styles.bottomleftbtnView}>
                            <Text style={styles.bottombtn}>无法登录？</Text>
                        </View>
                        <View style={styles.bottomrightbtnView}>
                            <Text style={styles.bottombtn}> 新用户</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
		paddingTop: 20, 
        height: 70,
        justifyContent: 'center',
    },
    headtitle: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#000000',
    },
    avatarView: {
        height: 150,
        backgroundColor: '#ECEDF1',
        justifyContent: 'center',
    },
    avatarimage: {
        width: 100,
        height: 100,
		borderRadius :100,
        alignSelf: 'center'
    },
    inputView: {
        height: 100,
    },
    TextInput: {
        flex: 1,
        fontSize: 16,
    },
    dividerView: {
        flexDirection: 'row',
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ECEDF1'
    },
    bottomView: {
        backgroundColor: '#ECEDF1',
        flex: 1,
    },
    buttonView: {
        backgroundColor: '#1DBAF1',
        margin: 10,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 17,
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10,
    },
    emptyView: {
        flex: 1,
    },
    bottombtnsView: {
        flexDirection: 'row',
    },
    bottomleftbtnView: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bottomrightbtnView: {
        flex: 1,
        height: 50,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    bottombtn: {
        fontSize: 15,
        color: '#1DBAF1',
    }
});
module.exports = Tab_Mine;