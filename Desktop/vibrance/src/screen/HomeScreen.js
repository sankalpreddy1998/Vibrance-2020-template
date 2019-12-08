import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

class HomeScreen extends React.Component {
    render() {
      const auth = this.props.auth;
      return(
        <View style={styles.container}>
          <Text>HomeScreen</Text>
        </View>
      );
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth);
    
  return{
    auth: state.auth, 
  }
}

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6e6e6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    plain: {
      flex: 1,
    },
});