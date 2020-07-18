/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import * as firebase from 'firebase';
import {firebaseAuth} from '../../../environment/Config';
console.disableYellowBox = true;

//import Loading from '../Login/Loading';
//import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    //LoggedIn: false,
    //isLoading: false,
    uid: '',
  };
  handleSignup = () => {
    console.log('handleSignup');
    firebaseAuth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        if (firebaseAuth.currentUser) {
          var userId = firebaseAuth.currentUser.uid;
          if (userId) {
            firebase
              .database()
              .ref('users/' + userId)
              .set({
                name: this.state.name,
                email: this.state.email,
                userid: userId,
              })

              .catch(error => this.setState({errorMessage: error.message}));
          }
        }
      });
  };
  render() {
    return (
      <View
        style={{
          //flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3b5998',
          height: '100%',
          // height:responsiveHeight(500)
        }}>
        <View>
          <View style={{marginBottom: 5, marginTop: 50}}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 30,
              }}>
              Signup
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
              Name:
            </Text>
            <TextInput
              placeholder="Name"
              style={{
                height: 40,
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: 'white',
                width: responsiveWidth(65),
                borderRadius: 5,
                paddingLeft: 10,
              }}
              onChangeText={name => this.setState({name})}
              value={this.state.name}
            />
            <Text
              style={{
                color: 'white',
                textAlign: 'left',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Email
            </Text>
            <TextInput
              placeholder="Email"
              style={{
                height: 40,
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: 'white',
                width: responsiveWidth(65),
                borderRadius: 5,
                paddingLeft: 10,
              }}
              // name="email"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <Text
              style={{
                color: 'white',
                textAlign: 'left',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 10,
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
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity onPress={this.handleSignup}>
            <Text
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                color: '#3b5998',
                backgroundColor: 'white',
                width: responsiveWidth(65),
                height: 40,
                borderRadius: 2,
                paddingLeft: 93,
                paddingTop: 5,
                marginTop: 30,
              }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
