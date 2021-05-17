import React, { useState, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Image, Alert } from 'react-native'
import { mask, } from "remask";
import IconEntypo from 'react-native-vector-icons/Entypo'

import { Container, InputArea, Title, CustomButton, CustomButtonText, LoadingIcon, InputField, Input } from './styles'

import { UserContext } from '../../contexts/UserContext'

import Api from '../../Api'

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()


    const [registrationlField, setRegistrationField] = useState('')
    const [cpfField, setCpfField] = useState('')
    const [isLoading, setLoading] = useState(false)

    const handleSignCLick = async () => {
        setLoading(true)
        if (registrationlField != '' && cpfField != '') {

            let json = await Api.signIn(registrationlField, cpfField)

            let responseJson = JSON.parse(json)

            if (responseJson.status == 'error') {

                Alert.alert(
                    "Atenção", responseJson.message
                )
                setLoading(false)
            } else {
                try {
                    await AsyncStorage.setItem('user', json)
                } catch (e) {
                    console.log(e)
                }

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

                navigation.reset({
                    routes: [{ name: 'Home' }]
                })
                setLoading(false)

            }


        } else {

            Alert.alert(
                "Atenção",
                "Por favor preencha todos os campos"
            )

            setLoading(false)
        }
    }

    const maskCPF = ev => {
        setCpfField(mask(ev, ['999.999.999-99']))
    }

    return (

        <Container>

            <Image style={{ width: 150, height: 150 }} source={require('../../assets/logo.png')} />

            <Title>Login</Title>

            <InputArea>
                <InputField>
                    <IconEntypo name='user' size={20} />
                    <Input
                        placeholder="Digite sua matricula"
                        placeholderTextColor="#000000"
                        value={registrationlField}
                        onChangeText={t => setRegistrationField(t)}
                        maxLength={9}
                    />
                </InputField>
                <InputField>
                    <IconEntypo name='key' size={20} />
                    <Input
                        placeholder="Digite seu CPF"
                        placeholderTextColor="#000000"
                        value={cpfField}
                        onChangeText={maskCPF}
                        maxLength={14}
                        keyboardType="number-pad"
                    />
                </InputField>

                {isLoading &&
                    <LoadingIcon size='large' color='#5DB075' />
                }

                {!isLoading &&

                    <CustomButton onPress={handleSignCLick} >
                        <CustomButtonText>LOGIN</CustomButtonText>
                    </CustomButton>
                }
            </InputArea>
        </Container>
    )
}