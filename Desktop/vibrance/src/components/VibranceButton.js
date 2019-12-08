import React from 'react';
import {View,StyleSheet,TouchableHighlight,Text,Image,Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class VibranceButton extends React.Component{
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

        const galleryX = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [10,-37]
        })
        const galleryY = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [10,-40]
        })


        const vibranceX = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [10,13]
        })
        const vibranceY = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [10,-70]
        })


        const contactX = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [10,63]
        })
        const contactY = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: [10,-40]
        })


        return (
            <View style={{position:'absolute',bottom:5,alignItems:'center',backgroundColor:'transparent'}}>
                <Animated.View style={{position:"absolute",left: galleryX, top: galleryY}}>
                    <View style={styles.secondary_button}>
                        <Ionicons name="ios-images" size={24} color="white" />
                    </View>
                </Animated.View>
                <Animated.View style={{position:"absolute",left: vibranceX, top: vibranceY}}>
                    <View style={styles.secondary_button}>
                        <Ionicons name="ios-images" size={24} color="white" />
                    </View>
                </Animated.View>
                <Animated.View style={{position:"absolute",left: contactX, top: contactY}}>
                    <View style={styles.secondary_button}>
                        <Ionicons name="ios-call" size={24} color="white" />
                    </View>
                </Animated.View>
                <Animated.View style={[styles.button,sizeStyle]}>
                    <TouchableHighlight onPress={this.handdlePress} underlayColor={0}>
                        <Animated.View style={{backgroundColor:"#DB4FCD",height:65,width:65,borderRadius:70,justifyContent:'center',alignItems:'center'}}>
                            <Image
                            style={{width: 40, height: 35, position:'relative', top:3}}
                            source={require('../assets/Vibrance_button1.png')}
                            />
                        </Animated.View>
                    </TouchableHighlight>     
                </Animated.View>
            </View>
        );
    }
}

export default VibranceButton;

const styles = StyleSheet.create({
    button:{
        borderRadius:70,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#7F58FF',
        shadowRadius:5,
        shadowOffset:{height:10},
        shadowOpacity:0.3,
        elevation:3
    },
    secondary_button:{
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        borderRadius:24,
        backgroundColor:'#DB4FCD'
    }
});