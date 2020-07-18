import React,{ Component } from "react";
import { Text,View,StyleSheet } from "react-native";

class Status extends Component{
    render(){
        return(
            <View
                style={{
                    flexDirection:'column',
                    backgroundColor:'white',
                    marginTop: -20,
                }}
            >
                <View>
                    <Text style={{fontSize:25,fontWeight:'bold', textAlign:'center'}}>
                        Ali Raza
                    </Text>
                </View>
                <View>
                    <Text style={{
                        color:'black',
                        marginTop:5,
                        marginBottom:5,
                        textAlign:'center'
                    }}>
                        I am Ali Raza and I am Computer Science Student
                    </Text>
                </View>
            </View>
        )
    }
}
export default Status;