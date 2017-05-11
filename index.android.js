/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LifecycleComponent from "./component/LifecycleComponent";
import ElComponent, {name, age, sum} from "./component/ElComponent";
import PropsTest from "./component/PropsTest";
import StateTest from './component/StateTest';
import RefTest from './component/RefTest';
import Student from './class/Student';
import Lmy from './class/Lmy';
import TouchableTest from './component/TouchableTest';
export default class simpleApp extends Component {
    constructor(props) {
        super(props);
        this.state = {remove: false, size: 0};
        this.stu=new Student("stu",0,'girl');
        this.lmy=new Lmy();
    }

    render() {
        var view = this.state.remove ? null : <LifecycleComponent/>;
        var text = this.state.remove ? "添加我" : "干掉我";
        var param = {name: '小明', age: 12, sex: "男"};
        var {sex} = param;//ES6中解构赋值，取出部分属性
        return (
            <View style={styles.container}>
                <Text onPress={() => {
                    this.setState({remove: !this.state.remove});
                }}>{text}</Text>
                {view}
                <ElComponent/>
                <Text>名字：{name}，年龄：{age}</Text>
                <Text>1+2={sum(1, 2)}</Text>
                <PropsTest name="小明" sex="男"/>
                <PropsTest {...param}/>{/*//可ES6中的通过延展操作符进行属性传递*/}
                <PropsTest sex={sex}/>
                <StateTest/>
                <Text style={{fontSize: 20}} onPress={() => {
                   // var size=this.refs.refTest.getSize();
                    //this.refs[refTest].getSize();
                    var size=this.refTest.getSize();
                    this.setState({size:size});
                }}>获取气球大小：{this.state.size}</Text>
                <RefTest
                   // ref="refTest"
                    ref={refTest=>{this.refTest=refTest}}
                />
                <Text>{this.stu.getText()}</Text>
                <Text>{this.lmy.getText()}</Text>
                <TouchableTest/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('simpleApp', () => simpleApp);
