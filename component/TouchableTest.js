/**
 * Created by lmy2534290808 on 2017/5/7.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback,Alert,Button} from 'react-native';
export default class TouchableTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({count: this.state.count + 1})
                    }}
                    onLongPress={()=>{Alert.alert('提示','确定要删除吗？',[
                        {text:'取消',onPress:()=>{},style:'cancel'},
                        {text:'确定',onPress:()=>{}}
                    ])}}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            我是TouchableWithoutFeedback,单击我
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.text}>您单击了:{this.state.count}次</Text>
          <Button title="登录" onPress={()=>{}} color='red' accessibilityLabel="dglkfjdslfjdlj"/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 1
    },
    buttonText: {fontSize: 10},
    text: {
        fontSize: 20
    }
})