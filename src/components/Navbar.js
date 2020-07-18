import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



class Navbar extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.navbar}>
          <TouchableOpacity>
            <Text style={{color: 'white', fontSize: 20, marginLeft: 5}}>
              {' '}
              <Entypo name="camera" style={{fontSize: 30}} />
            </Text>
          </TouchableOpacity>

          <Text style={{color: 'white', fontSize: 20}}>
            {'   '} <Feather name="search" style={{fontSize: 30}} />
          </Text>

          <TextInput
            type="text"
            name="searchbar"
            placeholder=" Search"
            style={{
              height: 35,
              borderColor: 'gray',
              borderBottomWidth: 1,
              width: 200,
              color: 'white',
            }}
          />
          <TouchableOpacity>
            <Text style={{color: 'white', marginRight: 5}}>
              <MaterialCommunityIcons
                name="facebook-messenger"
                style={{fontSize: 30}}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    height: 55,
    backgroundColor: '#3b5998',
    flexDirection: 'row',
    paddingTop: 10,
    top: 0,
    justifyContent: 'space-between',
  },
});
export default Navbar;
