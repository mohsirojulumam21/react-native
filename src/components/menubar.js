import React  from "react";
import { View,Text,TouchableOpacity, } from "react-native";
import icon from 'react-native-vector-icons/Ionicons'

const menubar = () => {

    return (
        <view style= {{
            flexDirection: 'row',
            backgroundColor: 'white',
            elevation: 3,
            paddingBottom: 7,
            marginhorizontal: 20,
            marginBottom: 10,
            borderRadius: 5,
          }}>
            <TouchableOpacity style={{flex: 1}}>
            <icon name="home" size={25} color="black" />
            <text style={{fontSize: 12}}>home</text>
            </TouchableOpacity>
            <TouchableOpacity>
            <icon name="calender" size={25} color="black" />
            <text style={{fontSize: 12}}>jadwal</text>
            </TouchableOpacity>
            <TouchableOpacity>
            <icon name="chatbubbles" size={25} color="black" />
            <text style={{fontSize: 12}}>pesan</text>
            </TouchableOpacity>
            <TouchableOpacity>
            <icon name="person" size={25} color="black" />
            <text style={{fontSize: 12}}>user</text>
            </TouchableOpacity>
            
          </view>
    );
}

export default app;