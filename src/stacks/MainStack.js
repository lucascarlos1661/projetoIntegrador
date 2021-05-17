import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Form from '../screens/Form'
import Admin from '../screens/Admin'
import FormAdmin from '../screens/FormAdmin'


const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator
        initialRouteName='Preload'
        screenOptions={{
            headerShown: false
        }}
    >

        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} options={
            {
                title: 'Perfil',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#5DB075',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
        <Stack.Screen name="Form" component={Form} options={
            {
                title: 'Formulário',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#5DB075',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="FormAdmin" component={FormAdmin} options={
            {
                title: 'Consulta de Formulário',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#5DB075',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
    </Stack.Navigator>
);

