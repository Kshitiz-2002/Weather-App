import React from 'react';
import { StyleSheet } from 'react-native';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native'; 
import CurrentWeather from './src/screens/CurrrentWeather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator()
 
const App = () => {
  return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={'Cuurent'} component={CurrentWeather}/>
          <Tab.Screen name={'Upcoming'} component={UpcomingWeather}/>
          <Tab.Screen name={'City'} component={City}/>
        </Tab.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App;