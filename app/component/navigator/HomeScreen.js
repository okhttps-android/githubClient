import React from "react";
import {connect} from 'react-redux'
import {View, Text, Button,TouchableHighlight,StyleSheet} from "react-native";
import {changeBtnText} from "../../action/actions";
import http from "../../network/http.js"


class HomeScreen extends React.Component {

    loadData=()=>{
        console.log("loadData()");
        http.get("https://www.yundashi168.com/wxService/requestGet.json").then(res=>{
            console.log("res.data=",res);
        }).catch(err=>{
            console.log("res.data=",err);
        })
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={{marginBottom: 10}}>Home Screen</Text>
                <Button
                    title="详情页"
                    onPress={() => {
                        navigation.navigate('Details', {name: '动态的'});
                    }}
                />

                <Text style={{marginBottom: 10}}>{this.props.btnText}</Text>
                <Button title="更新文字"
                        onPress={() => {
                             this.props.changeText("我的第一个ReactNative项目!");
                        }}/>

                <Button style={{marginBottom: 10}}
                        title="断点调式" onPress={()=>{
                    for (let i = 0; i < 10; i++) {
                            console.log("i*i=",i*i);
                    }
                }}/>

                <TouchableHighlight
                    underlayColor="#1FB579"
                    activeOpacity={0.5}
                    style={styles.button} onPress={this.loadData.bind(this)}>
                    <Text> Touch Here </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin:10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})

const mapStateToProps = state => ({
    btnText:state.pageMainReducer.btnText
})

const mapDispatchToProps = dispatch => ({
    changeText:(text)=>{
        dispatch(changeBtnText(text));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)