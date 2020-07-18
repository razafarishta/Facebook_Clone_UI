import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableNativeFeedback, TouchableOpacity} from 'react-native-gesture-handler';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import FriendsImage from './FriendsImage';

class Friends extends Component{
    render(){
        return(
            <View style={{
                backgroundColor:'white',
                paddingTop:10,
                paddingBottom:10,
                borderTopColor:'gray',
                borderTopWidth:1
            }}
            >
                <View>
                    <Text
                    style={{
                        marginLeft:15,
                        color:'black',
                        paddingTop:5,
                        fontWeight:'bold',
                        fontSize:20
                    }}
                    >
                        Friends
                    </Text>
                    <Text style={{color:"gray", fontSize:10, marginLeft:15}}>
                        100 Friends
                    </Text>
                </View>

                <View
                    style={{
                        paddingTop:20,
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}
                >
                    <FriendsImage 
                        img={require('../../../Images/ali.jpg')}
                        name="Ali Raza"
                    />

                    <FriendsImage 
                        img={require('../../../Images/ali.jpg')}
                        name="Ghazi Hussain"
                    />

                        <FriendsImage 
                        img={require('../../../Images/ali.jpg')}
                        name="Hamza"
                    />
                    </View>
                    <View
                        style={{
                            paddingTop:20,
                            flexDirection:'row',
                            justifyContent:'space-between'
                        }}
                    >
                        <FriendsImage 
                            img={require('../../../Images/ali3.jpg')}
                            name="raza"
                        />

                        <FriendsImage 
                            img={require('../../../Images/ali4.jpg')}
                            name="kumail"
                        />

                        <FriendsImage 
                            img={require('../../../Images/ali5.jpg')}
                            name="Hussain"
                        />
                         </View>
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize:15,
                                color:'black',
                                backgroundColor:'#f4f5f2',
                                paddingLeft:15,
                                width: responsiveWidth(95),
                                paddingTop:10,
                                marginLeft:10,
                                height:40,
                                borderRadius:10,
                                textAlign:'center',
                                fontWeight:'bold'
                            }}
                        >
                            See All Friends
                        </Text>
                    </TouchableOpacity>

            </View>
        )
    }
}
export default Friends;