import React from 'react';
import {View,Text, ImageBackground, Button, TouchableOpacity} from 'react-native'
import background from '../assets/background.jpg'
export default function Tutorial({navigation}){
    return(
        <ImageBackground
            source={background}
            style={{flex:1}}
        >
        <View
            style={{
                flex:1,
                backgroundColor:'rgba(0,0,0,.7)',
                alignItems: 'center',
            }}
        >
            <Text style={{fontSize: 30, color:'#fff', fontWeight: '900'}}>Tutorial</Text>

            <Text style={{ lineHeight: 35,color:'white',fontSize:20,paddingVertical:20,paddingHorizontal:20}}>
            Each Minesweeper Funny game starts out with a grid of unmarked squares. After clicking one of these squares, some of the squares will disappear, some will remain blank, and some will have numbers on them. It's your job to use the numbers to figure out which of the blank squares have mines and which are safe to click.
            </Text>
            <View style={{
                height: 50,
                width: 100,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius:10,
                shadowColor: "#fff",
                shadowOffset: {
                  width: 0,
                  height: 2,
                }
            }}
                >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{fontSize: 20, color: '#434'}}>Back </Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </ImageBackground>
    )
}