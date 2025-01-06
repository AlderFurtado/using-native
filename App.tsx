/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {NativeModules} from 'react-native';
const {CalculatorModule} = NativeModules


function App(): React.JSX.Element {
  const [primesNative, setPrimesNative] = useState("")
  const [timeNative, setTimeNative] = useState("0")
  const [primesJs, setPrimesJs] = useState("")
  const [timeJs, setTimeJs] = useState("0")
  const [isLoadingJs, setIsLoadingJs] = useState(false)
  const [isLoadingNative, setIsLoadingNative] = useState(false)

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function findPrimeNumbersNative(limit:number): string{
    return CalculatorModule.findPrimeNumbers(limit) 
  }

  function findPrimesNumberJs(limit:number): string{
    let primes = []
    for (let index = 1; index <= limit; index++) {
      let isPrime = true
      for (let focus = 1; focus <= index; focus++) {
        if(focus != 1 && focus != index){
          const result = index % focus
          if(result == 0) isPrime = false
        }
      }
      if(isPrime) primes.push(index)
    }
    return primes.join(", ")
  }
 
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{justifyContent:'center',alignItems:'center',marginTop:12}}>
        <Text
          style={{
            fontSize:22,
          }}
        >Find primes number(10000)</Text>
        <Text
          style={{
            fontSize:22,
          }}
        >Encontre números primos(10000)</Text>
      </View>
      
      <View style={{
        flexDirection:'row',
      }}>
        <TouchableOpacity
        style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: "yellow"
        }}
          onPress={
            () => {
              let start = Date.now();
              let primesJs = findPrimesNumberJs(10000)
              let timeTakenJs = Date.now() - start;
              setPrimesJs(primesJs)
              setTimeJs(timeTakenJs.toString())
            }
          }
        >
          <Text>JS</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: "grey"
        }}
          onPress={
            () => {
              let start = Date.now();
              let primesNative = findPrimeNumbersNative(10000)
              let timeTakenNative = Date.now() - start;
              setPrimesNative(primesNative)
              setTimeNative(timeTakenNative.toString())
            }
          }
        >
          <Text>Native</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{
        flexDirection:'row',
      }}>
        <ScrollView style={{
          flex:1
        }}>
          <Text
            style={{
              fontSize:14,
              fontWeight:'bold'
            }}
          >executation time: {timeJs} ms</Text>
          <Text>{primesJs}</Text>
        </ScrollView>
        <ScrollView style={{
          flex:1
        }}>
          <Text
            style={{
              fontSize:14,
              fontWeight:'bold'
            }}
          >executation time: {timeNative} ms</Text>
          <Text>{primesNative}</Text>
        </ScrollView>
      </View>
   
    </SafeAreaView>
  );
}

export default App;
