import React , {Component} from 'react';
import {Text,View, TouchableOpacity, Image, StyleSheet, ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import{responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions'
class Photo extends Component{
    render() {
        return (
            <View style={{flexDirection:"column", backgroundColor:'white'}}>
                <View style={{paddingBottom:30}}>
                    <Image 
                        source={require("../../../Images/ali2.jpg")}
                        style={{
                            height:responsiveHeight(50),
                            width:responsiveWidth(95),
                            marginLeft:10,
                            marginRight:10,
                            borderTopLeftRadius:10,
                            borderTopRightRadius:10,
                            marginTop:10
                        }}                        
                    />                    
                </View>
                
                
            </View>
        )
    }
}
export default Photo;