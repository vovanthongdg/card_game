import { StyleSheet, Text, TouchableOpacity, View,ImageBackground,Alert, Image } from 'react-native'
import React from 'react'
import RNExitApp from 'react-native-exit-app';
import background from '../assets/background.jpg'
import logo from '../assets/logo.png'

const Intro = ({navigation}) => {
  
    
  return (
  <ImageBackground
    source={background}
    style={{flex:1}}
  >
    <View
        style={{
          flex:1,
          backgroundColor: 'rgba(0,0,0, .7)',
          justifyContent:'center',
          alignItems:'center',
          paddingHorizontal: 20
        }}
      >
      <Text style={styles.welcome}>{`CardGame Funny`}</Text>
      <Image
        source={logo}
        style={{
          width: 250,
          height: 250,
          marginBottom: 20,
          borderRadius: 15,
        }}
      ></Image>
      <View style={styles.view1}>
      <TouchableOpacity onPress={() => navigation.navigate('game')}>
        <Text style={styles.instructions}>Play Game </Text>
      </TouchableOpacity>
      </View>
      <View style={{...styles.view1,marginTop:30}}>
      <TouchableOpacity onPress={() => navigation.navigate('tutorial')}>
        <Text style={styles.instructions}>Tutorial Game </Text>
      </TouchableOpacity>
      </View>
      <View style={{...styles.view1,marginTop:30}}>
      <TouchableOpacity 
      onPress={() => {
        Alert.alert(
          "Are your sure?",
          "Are you sure you want to exit game?",
          [
            // The "Yes" button
            {
              text: "Yes",
              onPress: () => {
                RNExitApp.exitApp();
              },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
              text: "No",
            },
          ]
        );
      }}
      >
        <Text style={styles.instructions}>Exit Game </Text>
      </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  )
}

export default Intro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
      },
      welcome: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: '900',
      },
      view1: {
        height: 50,
        width: 200,
        backgroundColor: '#c3b04f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        shadowColor: "#fff",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      instructions: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
      },
})