/**
 * Created by lmy2534290808 on 2017/5/6.
 * 组件生命周期实例
 */
import React, {Component} from 'react';
import  {
    StyleSheet,
    Text,
    View,
    ToastAndroid
} from 'react-native';

export default class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("--------constructor----------");
        //ToastAndroid.show("------------------", ToastAndroid.SHORT);
    }

    componentWillMount() {
        console.log("--------componentWillMount----------");
    }

    componentDidMount() {
        console.log("--------componentDidMount----------");
    }

    componentWillReceiveProps(props) {
        console.log("--------componentWillReceiveProps----------");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("--------shouldComponentUpdate----------");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("--------componentWillUpdate----------");
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("--------componentDidUpdate----------");
    }

    componentWillUnmount() {
        console.log("--------componentWillUnmount----------");
    }

    render() {
        console.log("========render========");
        return (<View><Text style={{fontSize: 20, backgroundColor: 'red'}} onPress={() => {
            this.setState({count: this.state.count + 1});
        }}>Hellokugou点击了我{this.state.count}次</Text></View>)

    }

}