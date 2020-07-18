//import React from 'react';
import {createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import TapRatingScreen from '../../screens/TapRatingScreen';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Tap:TapRatingScreen,
    },
    {
        initialRouteName: 'Home',
    }
    
)
    const HomeNavigator= createStackNavigator({
        Home:HomeScreen
    },
    {
        navigationOptions:{
            drawerLabel:'Home',
        }
    },
    )

const drawer=createDrawerNavigator({
    AppNavigator:AppNavigator,
    Home:HomeNavigator
})

export default createAppContainer(AppNavigator);