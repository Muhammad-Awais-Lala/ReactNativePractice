import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import logo from '../../assets/images/logo.png'

export default function Gallery() {
  return (
    <View style={styles.flexConter}>
      {/* Image from internet */}
      <Image style={styles.image} source={{uri:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ce/79/18/ce7918a9-ca2a-6ae4-b74e-217c2ac3fe05/AppIconSpark-0-0-1x_U007emarketing-0-7-0-85-220-0.png/1200x630wa.png"}}/>

      {/* Image from local */}
      {/* <Image style={styles.image} source={logo} /> */}

      <Button title='Press Me!' color='orange' onPress={() => alert("Button Presed")} />

      <TouchableOpacity style={styles.button}
        activeOpacity={0.5}
        onPress={() => alert('In TouchableOpacity we can style using opacity(transparency of color)')}>
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight style={styles.button}
        underlayColor='magenta'
        onPress={() => alert('In TouchableHeighlight we can change color of button on clicked')}>
        <Text style={styles.buttonText}>TouchableHeighlight</Text>
      </TouchableHighlight>
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
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})