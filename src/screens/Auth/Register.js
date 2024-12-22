import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Register() {
    return (
        <View style={style.flexContainer}>
            <Text style={style.h1}>Register</Text>
            
        </View>
    )
}

const style = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1: {
        fontSize: 48,
    }
})