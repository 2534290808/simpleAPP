/**
 * Created by lmy2534290808 on 2017/5/7.
 */
import React, {Component} from "react";
import {StyleSheet, View, Text, Image} from "react-native";
export default class StateTest extends Component {
    state = {//这也是初始化组件的一种方法
        size: 80
    }

    constructor(props) {
        super(props);
        /* this.state={//初始化组件的state
         size:80
         }*/
    }

    render() {
        return (<View>
            <Text onPress={()=>{this.setState({size:this.state.size+10});}}>吹啊，吹啊。。。</Text>
            <Image style={{width: this.state.size, height: this.state.size}} source={require('../img/ququ.jpg')}/>
        </View>)
    }
}