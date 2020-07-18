/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Entypo from 'react-native-vector-icons/Entypo';

class Goals extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingTop: 10,
          paddingBottom: 10,
          justifyContent: 'space-between',
        }}>
        <View>
          <TouchableOpacity>
            <AntDesign
              name="plus"
              size={30}
              style={{
                backgroundColor: '#bed7fa',
                borderRadius: 50,
                color: '#3b5998',
                width: 50,
                height: 50,
                paddingTop: 10,
                paddingLeft: 10,
                marginLeft: 30,
              }}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: 15, color: '#3b5998', paddingTop: 5}}>
            Add to Story
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Entypo
              name="eye"
              size={30}
              style={{
                backgroundColor: '#ebede8',
                borderRadius: 50,
                color: 'black',
                width: 50,
                height: 50,
                paddingTop: 10,
                paddingLeft: 10,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: 20, color: 'black', paddingTop: 5}}>
            View as
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <FontAwesome
              name="user"
              size={30}
              style={{
                backgroundColor: '#ebede8',
                borderRadius: 50,
                color: 'black',
                width: 50,
                height: 50,
                paddingTop: 10,
                paddingLeft: 10,
                marginLeft: 28,
              }}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: 18, color: 'black', paddingTop: 5}}>
            Edit Profile
          </Text>
        </View>

        <View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={30}
              style={{
                backgroundColor: '#ebede8',
                borderRadius: 50,
                color: 'black',
                width: 50,
                height: 50,
                paddingTop: 10,
                paddingLeft: 10,
                marginLeft: 20,
                marginRight: 30,
              }}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: 28, color: 'black', paddingTop: 5}}>
            More
          </Text>
        </View>
      </View>
    );
  }
}
export default Goals;
