import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, TouchableHighlight, Alert, Platform, StatusBar, SafeAreaView } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';


export default function App() {
  console.log(useDeviceOrientation())
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WelcomeScreen />
      {/* <ViewImageScreen/> */}
    </SafeAreaView>
  );
}

