/**
 * Created by lmy2534290808 on 2017/5/6.
 * 创建组件的实例：有三种方法
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
/**
 * 方式1：ES6
 * 推荐
 */
/*export  default  class HelloComponent extends Component {
 render() {
 return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello</Text>
 }

 }*/
/**
 * 方式二：ES5
 */
/*var HelloComponent = React.createClass({
 render() {
 return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello</Text>
 }

 })
 module.exports = HelloComponent;*/

/**
 * 方式三：函数式
 * 无状态，不能使用this.state
 */
function HelloComponent(props) {
    return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello.{props.name}</Text>
}
module.exports = HelloComponent;