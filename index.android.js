/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import Login from './components/Login'
import mainSrv from './service/mainSrv'
import axios from 'axios';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends Component {
  static navigationOptions = {
      title: 'Banana',
  };
  
  handleGetClick(){
    axios.get('http://192.168.0.77:3000/api/tests')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handlePostClick(){
    axios.post('http://192.168.0.77:3000/api/tests', {
      name: "Fred"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }



  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!!! what?
        </Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
        <Login />
        <Button onPress={this.handleGetClick} title="TestGet" />
        <Button onPress={this.handlePostClick} title="TestPost" />

        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const applogintest = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});


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

AppRegistry.registerComponent('applogintest', () => applogintest);
