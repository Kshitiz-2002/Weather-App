import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highLow, highlowWrapper, bodyWrapper, description, message } = styles
  return(
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText messageOne={'High: 8'} messageTwo={'Low: 6'} containerStyles={highlowWrapper} messageOneStyles={highLow} messageTwoStyles={highLow}/>
      </View>  
        <RowText messageOne = {"It's Sunny"} messageTwo = {"Its Perfect T-Shirt Weather"} containerStyles={bodyWrapper} messageOneStyles={description} messageTwoStyles={message} />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center' 
  },
  wrapper:{
    backgroundColor:'pink',
    flex:1
  },
  temp: {
    color:'black',
    fontSize: 48
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highLow :{
    fontSize:20,
    color:"black"
  },
  highlowWrapper:{
    flexDirection:'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})

export default CurrentWeather;