/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   useColorScheme,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native'
 import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import Game from './src/screens/Game';
import store from './src/config/store';
import StackNavigator from './src/navigator/StackNavigator';


 
 
 
 
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     // <SafeAreaView style={backgroundStyle}>
     //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
     //   <Game/>
       
     // </SafeAreaView>
 
     <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      </Provider>
   );
 };
 
 const styles = StyleSheet.create({
 
 });
 
 export default App;
 