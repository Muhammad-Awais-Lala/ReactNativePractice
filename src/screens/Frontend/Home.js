import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import lalaLogo from '../../assets/images/lala.jpeg'
// React Native vector icons
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Home({ navigation }) {
  return (
    <View style={styles.flexConter}>
      {/* <Image style={styles.image} source={lalaLogo} /> */}
      <Text style={styles.h1}>Home <Icon name="home" size={32} color="orange"/></Text>

      {/* <Icon name="refresh" size={33} color="orange"/> */}
      <Icon name="signal" size={30} color="#900" />

      <Button title='About Me!'
        color='orange'
        onPress={() => { navigation.navigate("About") }}
      />

    </View>
  )
}

const styles = StyleSheet.create({

  flexConter: {
    // alignContent:"center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  image: {
    width: 200,
    height: 200
  },

  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  h1:{
    fontSize:32,
    marginBottom:5,
  }
})






