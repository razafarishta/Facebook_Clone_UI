import React, { Component } from "react";
import { Text, View ,ScrollView} from "react-native";
import Photo from './Photo';
//import Box from "../Home/Box";
import Status from "./Status";
import Goals from "./Goals";
import Location from "./Location";
import Friends from "./Friends";
import Timeline from "./Timeline";

class Profile extends Component{
    render(){
        return(
            <View style={{backgroundColor:'silver'}}>
                <ScrollView>
                    <Photo />
                    <Status />
                    <Goals />
                    <Location />
                    <Friends />
                    <Timeline />
                </ScrollView>
            </View>
        )
    }
}
export default Profile;