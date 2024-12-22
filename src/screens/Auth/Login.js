import { View, Text, StyleSheet, TextInput, Button, Platform } from 'react-native'
import React, { useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'

const initialState = { email: "", password: "" }

export default function Login() {

    const {dispatch}=useAuthContext()
    const [state, setState] = useState(initialState)

    const handleChange = (name,value) => {
        setState(s => ({ ...s, [name]: value }))
    }


    const handleLogin = () => {
        const { email, password } = state
        console.log(email)
        console.log(password)
        dispatch({type:"SET_LOGED_IN"})
    }


    return (
        <View style={styles.flexContainer}>
            <Text style={styles.h1}>Login</Text>
            <Text>Operating Syste : {Platform.OS}</Text>
            <Text>Version : {Platform.Version}</Text>
            <Text>Pad : {Platform.isPad? "true":"false"}</Text>

            <TextInput style={styles.formControle}
                placeholder="Enter your Email"
                placeholderTextColor="black"
                keyboardType='email-address'            //which type of keyboard shown for user
                onChangeText={val => handleChange("email",val)} // As we do in React using onchange={handleChange}
            />

            <TextInput style={styles.formControle}
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry     // Password invisible in the form od dots
                onChangeText={val => handleChange("password",val)}
            />

            <View style={{ width: "100%" }}>
                <Button title='Login' color="orange" onPress={handleLogin} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    h1: {
        fontSize: 48,
        color: "orange",
        marginBottom: 16,
    },
    formControle: {
        // style for input box 
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 4,
        marginBottom: 10,
        width: "100%"
    }
})