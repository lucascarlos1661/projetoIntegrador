import React, { useState, useContext } from 'react'
import { Container, LoadingIcon } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react';
import { Image } from 'react-native'

import { UserContext } from '../../contexts/UserContext'

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    useEffect(() => {
        const checkLogin = async () => {
            let json = await AsyncStorage.getItem('user')
            let responseJson = JSON.parse(json)


            if (json) {
                navigation.navigate('Home')

                userDispatch({
                    type: 'setUser',
                    payload: {
                        id: responseJson.data.id,
                        registration: responseJson.data.registration,
                        cpf: responseJson.data.cpf,
                        name: responseJson.data.name,
                        phone: responseJson.data.phone,
                        email: responseJson.data.email,
                        avatar: responseJson.data.avatar,
                        admin: responseJson.data.admin
                    }
                })

            } else {
                navigation.navigate('SignIn')
            }
        }
        checkLogin()
    }, [])



    return (
        <Container>
            <Image style={{ width: 150, height: 150 }} source={require('../../assets/logo.png')} />
            <LoadingIcon size='large' color='#5DB075' />
        </Container>
    )
}