import HomeScreen from './src/screen/HomeScreen';
import EventsScreen from './src/screen/EventsScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import CalenderScreen from './src/screen/CalenderScreen';

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import VibranceButton from './src/components/VibranceButton';
import Drawer from './src/components/Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Events: EventsScreen,
  Vibrance: {
    screen: () => null, // Empty screen
    navigationOptions: () => ({
        tabBarIcon: <VibranceButton /> // Plus button component
    })
  },
  Calendar: CalenderScreen,
  Profile: ProfileScreen,
},
{
  initialRouteName : 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'ios-home'; 
      } else if (routeName === 'Events') {
        iconName = 'ios-bookmark';
      }else if (routeName === 'Calendar') {
        iconName = 'ios-calendar';
      }else if (routeName === 'Profile') {
        iconName = 'ios-contact';
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    showLabel: false,
    activeTintColor: '#A83C9E', // active icon color
    inactiveTintColor: '#F5BCEF',  // inactive icon color
    style: {
        backgroundColor: '#FDFDFD', // TabBar background
        borderTopColor: 'white',
    }
  }
});

const AppStackNav = createStackNavigator({
    tabs:{
      screen:TabNavigator,
      navigationOptions: {
        headerStyle: {
          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0, 
          borderBottomWidth: 0.3,
          borderBottomColor: 'gray',
          backgroundColor: '#F9F9F9',
        }
      }
    } 
  },
  {
    headerLayoutPreset:'center'
  }
);

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const headerLeft = <Drawer />;
  const headerRight= <Ionicons name="ios-cart" size={25} color="#A1ABB2" onPress={()=>navigation.navigate('cart')} style={{marginRight:20}}/>;
  const title= "Vibrance";
  const headerTitleStyle = {
    fontWeight: 'bold',
    fontSize: 17,
    color:'#000000',
  };
  
  return {
    title,headerLeft,headerRight,headerTitleStyle,
  }; 

};

const AppContainer = createAppContainer(AppStackNav);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        
          <View style={{flex:1,}}>
            <StatusBar barStyle="dark-content" />
            <AppContainer />
          </View>

      </Provider>
    );
  }
}