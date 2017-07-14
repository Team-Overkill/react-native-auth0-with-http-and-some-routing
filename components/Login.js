import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Auth0 from 'react-native-auth0';
import AuthConfig from '../AuthConfig'
const auth0 = new Auth0({ domain: AuthConfig.domain, clientId: AuthConfig.clientId });


export default class Login extends Component {
  _onLogin() {
    auth0
    .webAuth
    .authorize({scope: 'openid email', audience: 'https://jodilark.auth0.com/userinfo'})
    .then(credentials =>
      console.log(credentials)
      // Successfully authenticated
      // Store the accessToken      
    )
    .catch(error => {
        const loginObj = error
        console.log(`got error ${JSON.stringify(error)}`)});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Auth0Sample - Login
        </Text>
        <Text>{this.loginObj}</Text>
        <Button onPress={this._onLogin} title="Log In" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

// AppRegistry.registerComponent('Auth0Sample', () => Auth0Sample);