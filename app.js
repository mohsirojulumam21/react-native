import React, {useState, useEffect} from "react";
import { View,Text,TouchableOpacity, StatusBar,  TextInput} from "react-native";
import icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from "react-native-linear-gradient";
import menubar from './src/components/menubar';
import { Header } from "./src/components/header";

const app = () => {

  const [pencarian, setpencarian] =useState();

  return(
    <view style= {{flex: 1, backgroundColor: '#f4f4f4'}}>

      <View 
      style= {{
        flex: 1, 
        marginHorizontal:20, 
        marginTop: 10,
        }}>
          <header pencarian={pencarian} setpencarian={setpencarian}/>
          <view style={{flexDirection: 'row', marginTop:20}}>
            <text style={{color:'blue', fontWeight: 'bold', marginTop: 10,}}>
              jadwal pemeriksaan
            </text>
            <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
            <text style={{color:'yellow', fontWeight: 'bold', marginTop: 10,}}>
              lihat semua
            </text>
            </TouchableOpacity>
          </view>
          <view
           style={{
            borderRadius: 10, 
            backgroundColor: 'white', 
            elevation: 10,
            marginTop: 10,
            }}>
          <linearGradient 
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0}}
          style={{borderRadius: 10}}
          colors={['#018bf7', '#00baf7',]}>
            <TouchableOpacity style={{padding: 20, borderRadius:10}}>
              <view style={{flexDirection:'row'}}>
              <image source={require('./src/image/amam.jpg')} style={{
                width: 50, 
                height: 50,
                borderRadius: 25,
                borderColor: 'white',
                borderWidth: 2
                }}
                />
                <view style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
                  <text style={{color: 'white', fontWeight:'bold'}}>Dr. zaini</text>
                  <text style={{color: 'white'}}>Dokter umum</text>

                </view>
              </view>
              
              
            <view style={{marginTop: 10}}>
              <view style={{flexDirection:"row"}}>
                <icon name="time" size={25} color="white" />
                <view style={{justifyContent: 'center', alightitems:'center'}}>
                  <text style={{color: 'white'}}>01 januari 2024</text>
                </view>
                
              </view>
              <view style={{flexDirection:"row"}}>
                <icon name="compass" size={25} color="white" />
                <view style={{justifyContent: 'center', alightitems:'center'}}>
                  <text style={{color: 'white', marginLeft:10}}>klinik muma</text>
                </view>     
              </view>  
              <view style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                <icon name="arrow-dropright-circle" size={35} color="white" />            
            </view>
            </view>

           
          </TouchableOpacity>
          </linearGradient>
          </view>
          
          
         
      </View>
      <menubar/>
    </view>
  )
}

export default app;