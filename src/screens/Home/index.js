import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob'

import {
    Container, Title, TitleButton, TitleButtonText, ContainerTop, NameArea, Name,
    FormView, FormButton, FormButtonText, ImageArea, AvatarIcon, IconArea, IconEdit, TitleArea
} from './styles'

import { UserContext } from '../../contexts/UserContext'

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const { state: user } = useContext(UserContext)
    const [avatar, setAvatar] = useState(null)
    const [pic, setPic] = useState(null)

    const navigation = useNavigation()


    const buttonConfirm = () => {
        (user.name == '' || user.phone == '' || user.email == '') ?
            Alert.alert("Atenção", "Antes de iniciar a avaliação confirme suas informações", [
                {
                    text: "Ok", onPress: () => { navigation.navigate('Profile') }
                }
            ])
            :
            navigation.navigate('Form')
    }

    const logOut = () => {

        Alert.alert("Sair", "Deseja realmente sair?", [
            {
                text: "Cancelar",
                style: "cancel"
            },
            {
                text: "Sair", onPress: async () => {
                    try {
                        await AsyncStorage.removeItem('user')
                    } catch (e) {
                        console.log(e)
                    }


                    navigation.reset({
                        routes: [{ name: 'SignIn' }]
                    })
                }
            }
        ]
        )
    }

    const options = {
        title: 'Selecione:',
        takePhotoButtonTitle: 'Tirar uma foto',
        ChooseFromLibraryButtonTitle: 'Selecionar uma foto da galeria',
        includeBase64: true
    }

    const selectPhoto = async () => {

        // if (user.avatar != '') {

        //     let respAsyncStorage = await AsyncStorage.getItem('user')
        //     let responseAsyncStorage = JSON.parse(respAsyncStorage)

        //     responseAsyncStorage.data.avatar = 'https://pisistemas.000webhostapp.com/src/assets/User_' + user.id + '_avatar.png'

        //     respJSON = JSON.stringify(responseAsyncStorage)

        //     try {
        //         await AsyncStorage.removeItem('user')
        //     } catch (e) {
        //         console.log(e)
        //     }

        //     try {
        //         await AsyncStorage.setItem('user', respJSON)
        //     } catch (e) {
        //         console.log(e)
        //     }

        // }

        launchImageLibrary(options, (response) => {

            if (response.didCancel) {

            }
            else if (response.error) {
                console.log('Image Picker Error: ', response.error)
            }

            else {
                let source = { uri: response.uri }
                setAvatar(source)

                let data = response.base64
                let userId = user.id.toString()
                setPic(response.base64)
                RNFetchBlob.fetch('POST', 'https://pisistemas.000webhostapp.com/api/uploadImage.php', {
                    Authorization: "Bearer access-token",
                    otherHeader: "foo",
                    'Content-Type': 'multipart/form-data',
                }, [
                    { name: 'image', filename: userId + '_avatar.png', data: data },
                ]).then((resp) => {
                    let responseJson = JSON.parse(resp.data)
                    let avatarLink = responseJson.avatar
                })
            }
        })
    }


    return (

        <Container>
            <ContainerTop>
                <TitleArea>
                    <TitleButton>
                        <TitleButtonText onPress={() => navigation.navigate('Profile')}>Perfil</TitleButtonText>
                    </TitleButton>
                    <Title>Bem Vindo</Title>
                    <TitleButton onPress={logOut}>
                        <TitleButtonText>Sair</TitleButtonText>
                    </TitleButton>
                </TitleArea>
                <ImageArea>

                    {
                        avatar != null ?
                            <AvatarIcon source={avatar} />
                            :
                            <AvatarIcon source={{ uri: 'https://pisistemas.000webhostapp.com/src/assets/default-avatar.png' }} />
                    }

                    <IconArea>
                        <IconEdit onPress={() => selectPhoto()}>
                            <IconEntypo name='edit' size={20} />
                        </IconEdit>
                    </IconArea>
                </ImageArea>
                <NameArea>
                    <Name>{user.name}</Name>
                </NameArea>
            </ContainerTop>

            {
                user.admin == 1 ?

                    <FormView>
                        <FormButton onPress={() => navigation.navigate('Admin')}>
                            <IconEntypo name='chevron-right' color='#FFF' size={20} />
                        </FormButton>
                        <FormButtonText>ADM</FormButtonText>
                    </FormView>
                    :
                    <FormView>
                        <FormButton onPress={buttonConfirm}>
                            <IconEntypo name='chevron-right' color='#FFF' size={20} />
                        </FormButton>
                        <FormButtonText>Iniciar Avaliação</FormButtonText>
                    </FormView>
            }

        </Container >
    )
}