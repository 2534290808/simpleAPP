/**
 * Created by lmy2534290808 on 2017/5/7.
 * 自定义属性
 */
import React, {Component,PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class PropsTest extends Component {
    static defaultProps = {
        name: '小红',
        age:20
    }
   static propTypes={//规定属性的类型
        name:PropTypes.string,
       age:PropTypes.number,
       sex:PropTypes.string.isRequired//表示该属性是必须的
   }
    render() {
        return <Text style={{backgroundColor:'green'}}>{this.props.name}</Text>
    }
}