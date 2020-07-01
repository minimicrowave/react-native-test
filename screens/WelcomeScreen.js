import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} resizeMode="contain"/>
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </ImageBackground>
      <View style={styles.login} />
      <View style={styles.register} />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 8,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30
  },
  logo: {
    width: "25%",
    height: "25%",
  },
  text: {
    flex: 1
  },
  container: {
    flex: 1,
  },
  login: {
    flex: 1,
    backgroundColor: '#fc5c65',
  },
  register: {
    flex: 1,
    backgroundColor: '#4ecdc4',
  },

});
