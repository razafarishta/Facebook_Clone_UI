{/*import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createAppContainer} from 'react-navigation';
import Home from './Home/Home';
//import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Profile from './Profile/Profile';

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons
            name="home-circle"
            size={25}
            color={tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="user-circle" size={24} color={tintColor} />
        ),
      },
    },
    // Notification: {
    //     screen:NotificationMain,
    //     navigationOptions: {
    //         tabBarIcon:({tintColor})=>(
    //             <MaterialIcons name="notifications" size={25} color={tintColor} />
    //         )
    //     }
    // },
    // Tabs:{
    //     screen:TabRow,
    //     navigationOptions:{
    //         tabBarIcon:({tintColor})=>(
    //             <MaterialCommunityIcons name="table-of-contents" size={25} color={tintColor} />
    //         )
    //     }
    // }
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'top',
    tabBarOptions: {
      showIcon: true,
      pressColor: 'gray',
      showLabel: false,
      activeTintColor: '#3b5998',
      inactiveTintColor: 'gray',
      tabStyle: {
        width: 70,
      },
      style: {
        backgroundColor: 'white',
        elevation: 4,
        paddingTop: 0,
        height: 55,
        top: 0,
      },
      indicatorStyle: {
        backgroundColor: '#3b5998',
        marginBottom: 0.5,
        width: 65,
        marginLeft: 5,
      },
    },
    order: ['Home', 'Profile'],
  },
);
export default Navbar = createAppContainer(TabNavigator);
/*}