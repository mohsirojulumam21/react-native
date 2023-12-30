import React  from "react";
import { View,Text,TouchableOpacity, StatusBar, TextInput } from "react-native";
import icon from 'react-native-vector-icons/Ionicons'

const header = (props) => {
    return(
        <view>
                <StatusBar barStyle='dark-content' backgroundcolor={'#f4f4f4'}/>
        <text 
        style={{color: 'black'}}>hallo</text>
        <text 
        style={{fontSize: 22,fontWeight: 'bold', color: '#212121'}}>
          mamad salekor
          </text>
          <view style={{flexDirection:'row'}}>
          <TextInput 
          value={props.pencarian}
          onChangeText={text=> props.setpencarian(text)}
          placeholder="cari informasi tentang kesehatan"
          style={{
            backgroundColor: '#ffffff',
            elevation: 3,
            marginTop: 20,
            paddingLeft: 10,
            borderRadius:5,
            flex: 1,
          }}
          />
          <TouchableOpacity
          style={{
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: 'blue',
           marginTop: 20,
           paddinghorizontal: 20,
           borderRadius: 5,
           marginLeft:10,
           elevation: 3.
           }}>
          <icon name="search" size={25} color="white" />
          </TouchableOpacity>
          </view>  
        </view>
    )
}

export default app;