import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Post from './Post';
import Box from './Box'


class Home extends Component {
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
  export default Home;