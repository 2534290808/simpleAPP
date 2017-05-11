/**
 * Created by lmy2534290808 on 2017/5/7.
 * 导出组件和变量以及函数
 */
import React,{Component} from "react";
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
const name="lmy";
var age=24;
export {name,age};
export function sum(a,b){
    return a+b;
}
export default class ElComponent extends Component{
    render(){
        return <Text>Hello,ElComponent,</Text>
    }
}