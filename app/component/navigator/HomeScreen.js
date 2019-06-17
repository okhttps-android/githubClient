import React from "react";
import { View, Text ,Button} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {DetailsScreen} from "./DetailsScreen";

class HomeScreen extends React.Component {

    render() {
        const {navigation} = this.props;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{marginBottom: 10}}>Home Screen</Text>
                <Button
                    title="详情页"
                    onPress={() => {
                        navigation.navigate('Details', {name: '动态的'});
                    }}
                />

            </View>
        );
    }
}

export const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "首页",
            headerBackTitle:'返回主界面',//设置返回此页面的返回按钮文案，有长度限制
        }
    },
    Details:{
        screen:DetailsScreen,
        navigationOptions : {
            title: '详情',
            headerBackTitle:'返回',//设置返回此页面的返回按钮文案，有长度限制
        }
    }
}, {
    initialRouteName: 'Home',
});


 export default createAppContainer(AppNavigator);