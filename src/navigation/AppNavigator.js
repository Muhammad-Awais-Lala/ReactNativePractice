import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome'


import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
import Footer from '../components/Footer';
import logo from '../assets/images/logo.png'
import Gallery from '../screens/Frontend/Gallery'
import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'
import { useAuthContext } from '../contexts/AuthContext'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

// Tab Navigation
const MyTabs = () => {
    return (
        <Tab.Navigator screenOptions={{

            tabBarStyle: { backgroundColor: 'orange' }, // Changes tab bar background color
            tabBarLabelStyle: { color: 'black', fontSize: 12 }, // Changes label text color and style
            tabBarActiveTintColor: 'black', // Changes active tab icon and label color
            tabBarInactiveTintColor: 'white', // Changes inactive tab icon and label color
            headerShown:"false"
        }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarShowLabel:false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="home" color={color} size={size} />
                )
            }} />
            <Tab.Screen name='About' component={About} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name='users' color={color} size={size} />
                )
            }} />
            <Tab.Screen name='Contact' component={Contact} initialParams={{ number: "123", email: "abc@gmail.com" }} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name='phone' color={color} size={size} />
                ),
                tabBarBadge: 5,
            }} />
            <Tab.Screen name='Gallery' component={Gallery} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name='picture-o' color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    )
}

///////////////////////////////////////////////////// Main Component ///////////////////////////////////////
export default function AppNavigator() {

    const {isAuth} = useAuthContext()

    return (
        <NavigationContainer>
            {/* <MyTabs/> */}

            {/* Stack Navigation  */}
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: "orange"
                },
                headerTintColor: "white"

            }}>
                {
                    isAuth?<Stack.Group screenOptions={{headerShown:false}}>
                    <Stack.Screen name='Root' component={MyTabs} options={{
                            headerTitle: "Lala's Mart",
                            // headerTitle:()=> <Image source={lalaLogo} style={{width:205,height:25}}></Image>,
                            // headerLeft:()=> <Image source={logo} style={{width:25,height:25}}></Image>
                        }} />
                    <Stack.Screen name='About' component={About} />
                    <Stack.Screen name='Contact' component={Contact} />
                    {/* <Footer/> */}
                </Stack.Group>

                :<Stack.Group screenOptions={{headerShown:false}}>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register' component={Register} />
                </Stack.Group>
                }

            </Stack.Navigator>

        </NavigationContainer>
    )
} 