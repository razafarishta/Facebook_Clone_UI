import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Post from '../src/components/Home/Post';
import Box from '../src/components/Home/Box';
//import Feather from 'react-native-vector-icons/Feather';
class HomeScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor:"silver"}}>
        <ScrollView>
          <Post />
          <Box />
        </ScrollView>
      </View>
    );
  }
}
export default HomeScreen;
