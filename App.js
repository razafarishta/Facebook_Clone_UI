import React, {useEffect} from 'react';
//import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
//import Login from './src/components/Login/Login';
import Signup from './src/components/Signup/Signup';
//import Carousel from './src/components/Carousel';
//import GeneralStarExample from './src/components/GeneralStarExample';
//import TapRatingScreen from './screens/TapRatingScreen';
//import AppNavigator from './src/navigators/AppNavigator';
//import HomeScreen from './screens/HomeScreen';
//import Home from './src/components/Home/Home';
//import Photo from './src/components/Profile/Photo';
//import Profile from './src/components/Profile/Profile';
//import Signup from './src/components/Signup/Signup';
//import LoginPage from './src/components/Login/LoginPage';
//import LoginPage from './src/components/Login/LoginPage';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Signup />;
};
export default App;
