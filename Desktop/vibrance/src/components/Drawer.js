import React from 'react';
import {View,StyleSheet,TouchableHighlight,Text,Image,Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Drawer extends React.Component{
    buttonSize = new Animated.Value(1);
    mode = new Animated.Value(0);

    handdlePress = () =>{
        Animated.sequence([
            Animated.timing(this.buttonSize,{
                toValue:0.95,
                duration:100
            }),
            Animated.timing(this.buttonSize,{
                toValue:1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0,
                duration:300
            })
        ]).start();
    };
    render(){
        const sizeStyle = {
            transform: [{scale: this.buttonSize}]
        }

        const drawerX = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [-250,0]
        })
        const drawerY = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [-430,-20]
        })

        return (
            <View style={{alignItems:'center'}}>
                <Animated.View style={{position:"absolute",left: drawerX, top: drawerY}}>
                    <View style={styles.drawer}>
                        <Ionicons name="ios-images" size={24} color="white" />
                    </View>
                </Animated.View>
                <Animated.View style={[styles.button,sizeStyle]}>
                    <TouchableHighlight onPress={this.handdlePress} underlayColor={0}>
                        <Image source={require('../assets/menu_icon.png')} style={{width:26,height:20}} resizeMode='contain'/>
                    </TouchableHighlight>     
                </Animated.View>
            </View>
        );
    }
}

export default Drawer;

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#7F58FF',
        shadowRadius:5,
        shadowOffset:{height:10},
        shadowOpacity:0.3,
        elevation:3,
        marginLeft:20
    },
    drawer:{
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        width:250,
        height:450,
        backgroundColor:'#FFFFFF',
        elevation:3,
        borderRadius:20,
        shadowRadius:5,
        shadowColor:'#7F58FF',
        shadowOffset:{height:10},
        shadowOpacity:0.3,
    }
});