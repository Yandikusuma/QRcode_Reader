/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';


 import {
   StyleSheet,
   Text,
   TouchableOpacity,
   Linking
 } from 'react-native';
 import Scan from './src/component/scan';
 
 
 export default class App extends React.Component {
  
 
   render() {
     return (
       <Scan />
     );
   }
 }
 
 const styles = StyleSheet.create({
   centerText: {
     flex: 1,
     fontSize: 18,
     padding: 32,
     color: '#777'
   },
   textBold: {
     fontWeight: '500',
     color: '#000'
   },
   buttonText: {
     fontSize: 21,
     color: 'rgb(0,122,255)'
   },
   buttonTouchable: {
     padding: 16
   }
 });
 