import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/background.jpg")} resizeMode="cover" style={styles.image} />
      <View style={styles.login} />
      <View style={styles.register} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "black"
  },
  image: {
    flex: 1,
    height: "70%",
  },
  login: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fc5c65',
    width: 50,
    height: 50
  },
  register: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#4ecdc4',
    width: 50,
    height: 50
  },
})