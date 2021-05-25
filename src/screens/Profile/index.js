import React, { useContext, useState } from 'react'
import { mask, } from "remask"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IconEntypo from 'react-native-vector-icons/Entypo'

import {
    Container, Label, InputField, Input,
    CustomButton, CustomButtonText, ReadOnlyInput, LoadingIcon
} from './styles'

import Api from '../../Api'
import { UserContext } from '../../contexts/UserContext'


export default ({ state }) => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const { state: user } = useContext(UserContext)

    const navigation = useNavigation()

    const [registrationlField, setRegistrationField] = useState(user.registration)
    const [cpfField, setCpfField] = useState(user.cpf)
    const [nameField, setNameField] = useState(user.name)
    const [phoneField, setPhoneField] = useState(user.phone)
    const [emailField, setEmailField] = useState(user.email)
    const [avatarField, setAvatarField] = useState(user.avatar)
    const [isLoading, setLoading] = useState(false)

    const handleChangeCLick = async () => {

        if (nameField != '' && phoneField != '' && emailField != '') {

            if (phoneField.length < 14) {
                return (
                    Alert.alert(
                        "Atenção",
                        "Por favor preencha um telefone válido"
                    )
                )
            }

            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(emailField)) {

                isValid = false;

                return (

                    Alert.alert(
                        "Atenção",
                        "Por favor preencha um email válido"
                    )
                )
            }

            Alert.alert(
                "Salvar",
                "Deseja realmente salvar?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "Salvar", onPress: async () => {

                            setLoading(true)
                            let json = await Api.updateUser(user.id, user.registration, user.cpf, nameField, phoneField, emailField, avatarField)
                            let responseJson = JSON.parse(json)

                            if (responseJson.status == 'error') {
                                alert("Erro", responseJson.message);
                                setLoading(false)
                            } else {
                                userDispatch({
                                    type: 'setUser',
                                    payload: {
                                        id: user.id,
                                        name: nameField,
                                        phone: phoneField,
                                        email: emailField,
                                        avatar: avatarField,
                                    }
                                })

                                try {
                                    await AsyncStorage.removeItem('user')
                                } catch (e) {
                                    console.log(e)
                                }

                                try {
                                    await AsyncStorage.setItem('user', json)
                                } catch (e) {
                                    console.log(e)
                                }

                                Alert.alert("Sucesso", "Dados confirmados", [
                                    {
                                        text: "Ok", onPress: () => { navigation.navigate('Home') }
                                    }
                                ])
                                setLoading(false)
                            }
                        }
                    }
                ]
            )

        } else {
            Alert.alert("Atenção", "Preencha todos os campos corretamente!")
            setLoading(false)
        }
    }

    const maskCPF = ev => {
        setCpfField(mask(ev, ['999.999.999-99']))
    }

    const maskPhone = ev => {
        setPhoneField(mask(ev, ['(99)99999-9999']))
    }

    return (

        <Container>
            <ScrollView>
                <Label>Matrícula:</Label>
                <InputField>
                    <IconEntypo name='user' size={20} />
                    <ReadOnlyInput
                        value={registrationlField}
                        onChangeText={t => setRegistrationField(t)}
                        maxLength={9}
                        editable={false}
                    />
                </InputField>

                <Label>CPF:</Label>
                <InputField>
                    <IconEntypo name='key' size={20} />
                    <ReadOnlyInput
                        value={cpfField}
                        onChangeText={maskCPF}
                        maxLength={14}
                        keyboardType="number-pad"
                        editable={false}
                    />
                </InputField>

                <Label>Nome:</Label>
                <InputField>
                    <IconEntypo name='documents' size={20} />
                    <ReadOnlyInput
                        value={nameField}
                        onChangeText={t => setNameField(t)}
                        editable={false}
                    />
                </InputField>
                <Label>Telefone:</Label>
                <InputField>
                    <IconEntypo name='phone' size={20} />
                    <Input
                        value={phoneField}
                        maxLength={14}
                        onChangeText={maskPhone}
                        keyboardType="phone-pad"
                    />
                </InputField>

                <Label>Email:</Label>
                <InputField>
                    <IconEntypo name='mail' size={20} />
                    <Input
                        keyboardType="email-address"
                        value={emailField}
                        onChangeText={t => setEmailField(t)}
                    />
                </InputField>

                {isLoading &&
                    <LoadingIcon size='large' color='#5DB075' />
                }

                {!isLoading &&

                    <CustomButton onPress={handleChangeCLick}>
                        <CustomButtonText>SALVAR</CustomButtonText>
                    </CustomButton>
                }
            </ScrollView>
        </Container>
    )
}