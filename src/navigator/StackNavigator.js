import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Game from '../screens/Game'
import Intro from '../screens/Intro'
import Tutorial from '../screens/Tutorial'
import SplashScreen from '../screens/Splash'


const Stack = createStackNavigator()

const StackNavigator = () => {


  return (
    <Stack.Navigator 
      initialRouteName='splash'
      screenOptions={{
        
      }}
    >
        <Stack.Screen name='splash' component={SplashScreen} />

        <Stack.Screen name='intro' component={Intro} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name='tutorial' component={Tutorial} />
        <Stack.Screen name='game' component={Game} />
        
    </Stack.Navigator>
  )
}

export default StackNavigator