{
  /*import React, {Component} from 'react';
import {View, Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import * as firebase from 'firebase';
import {firebaseAuth} from '../../../environment/Config';

class LoginPage extends Component {
  state = {
    email: 'ali@gmail.com',
    password: '123456789',
    bgColor: StatusBar.backgroundColor,
    isLoading: false,
    LoggedIn: false,

    errorMessage: null,
  };
  handleLogin = () => {
    console.log('login');
    firebaseAuth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({LoggedIn: true});
        //this.props.navigation.navigate('Profile');
      })
      .catch(error => this.setState({errorMessage: error.message}));
  };


  render() {
    return (
      <View
        style={{
          //flex:2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3b5998',
          height: '100%',
        }}>
        <View>
          <View style={{marginBottom: 50}}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 50,
              }}>
              Facebook
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                textAlign: 'left',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Email
            </Text>
            <TextInput
              placeholder="Email or Phone"
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: 'white',
                backgroundColor: 'white',
                width: responsiveWidth(65),
                borderRadius: 5,
                paddingLeft: 10,
              }}
              //name="email"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />

            <Text
              style={{
                color: 'white',
                textAlign: 'left',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Password:
            </Text>

            <TextInput
              placeholder="Password"
              style={{
                backgroundColor: 'white',
                width: responsiveWidth(65),
                borderRadius: 5,
                paddingLeft: 10,
              }}
              secureTextEntry
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity onPress={this.handleLogin}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#3b5998',
                backgroundColor: 'white',
                width: responsiveWidth(65),
                height: 40,
                borderRadius: 2,
                paddingTop: 5,
                paddingLeft: 86,
                marginTop: 30,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Signup');
            }}
            style={{backgroundColor: 'yellow'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: 'white',
                marginTop: 10,
              }}>
              Don't Have Account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default LoginPage;
*/
}
