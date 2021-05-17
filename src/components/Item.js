import React, { useState } from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Modal } from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Area = styled.View`
    width: 100%;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
`
const AvatarButton = styled.TouchableOpacity`
`

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`

const InfoArea = styled.View`
    margin-left: 17px;
    width: 180px;
`

const ActionArea = styled.View`
    margin-left: 13px;
    align-items: center;
    justify-content: space-around;
    width: 60px;
`

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`

const Registration = styled.Text`
    margin-top: 2px;
    font-size: 15px;
`

const CPF = styled.Text`
    margin-top: 2px;
    font-size: 15px;
`

const Phone = styled.Text`
    font-size: 15px;
`

const Email = styled.Text`
    font-size: 15px;
`

const Date = styled.Text`
    margin-top: 3px;
    font-size: 15px;
`

const CheckFormButton = styled.TouchableOpacity`
    margin-top: 3px;
    height: 40px;
    width: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

export const CenteredModalView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`

export const ModalView = styled.View`
    justify-content: space-between;
    width: 70%;
    height: 330px;
    background-color: white;
    border-radius: 20px;
    align-items: center;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`

const AvatarModal = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 20px;
`

export const ModalTop = styled.View`
    height: 40%;
    width: 100%;
    border-top-start-radius: 20px;
    border-top-end-radius: 20px;
    background-color: #F0F0F0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;
`

export const ModalTextTop = styled.Text`
    margin-left: 30px;
    color: #FFF
    font-weight: bold
    font-size: 18px;
`

export const ModalBotton = styled.View`
    height: 60%;
    width: 100%;
    justify-content: flex-start;
    padding: 15px;
`

export const ModalBottonText = styled.Text`
    font-size: 16px;
    color : #000;
    font-weight: bold;
`
export const ModalButtonView = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
`

export const ModalButtonConfirm = styled.TouchableOpacity`
    height: 40px;
    width: 25%
    justify-content: center;
    align-items: center;
    border: 2px solid #000; 
    border-radius: 10px;
    margin-top: 5px;
`

export const ModalButtonText = styled.Text`
    font-size: 18px;
    color : #000;
`


export default ({ data }) => {

    const navigation = useNavigation()

    const [infoUser, setInfoUser] = useState(false)

    const getFormattedDate = (date) => {

        separeteDate = date.split(' ')

        date = separeteDate[0]
        time = separeteDate[1]

        let day = date.split('-')[2]
        let month = date.split('-')[1]
        let year = date.split('-')[0]

        let hour = time.split(':')[0]
        let minute = time.split(':')[1]

        return (day + '/' + month + '/' + year + ' ' + hour + ':' + minute)
    }

    return (
        <Area>
            <AvatarButton onPress={() => setInfoUser(true)}>
                {data.avatar == '' ?
                    <Avatar source={{ uri: 'https://pisistemas.000webhostapp.com/src/assets/default-avatar.png' }} />
                    :
                    <Avatar source={{ uri: data.avatar }} />
                }
            </AvatarButton>
            <InfoArea>
                <UserName>{data.name}</UserName>
                <Registration>{data.registration}</Registration>
                <Phone>{data.phone}</Phone>
                <Date>{getFormattedDate(data.dateTime)}</Date>
            </InfoArea>
            <ActionArea>
                {data.suspect == 1 ?
                    <IconEntypo name='emoji-sad' size={30} color={'#F00'} />
                    :
                    <IconEntypo name='emoji-happy' size={30} color={'#0F0'} />
                }

                <CheckFormButton onPress={() => {
                    navigation.navigate('FormAdmin', {
                        data
                    });
                }}>
                    <IconEntypo name='chevron-right' color='#606060' size={30} />
                </CheckFormButton>

            </ActionArea>


            <Modal
                animationType="fade"
                transparent={true}
                visible={infoUser}
                onRequestClose={() => {
                    setInfoUser(!infoUser);
                }}
            >
                <CenteredModalView>
                    <ModalView>
                        <ModalTop>{data.avatar == '' ?
                            <AvatarModal source={{ uri: 'https://pisistemas.000webhostapp.com/src/assets/default-avatar.png' }} />
                            :
                            <AvatarModal source={{ uri: data.avatar }} />
                        }
                        </ModalTop>
                        <ModalBotton>
                            <UserName>{data.name}</UserName>
                            <Registration>{data.registration}</Registration>
                            <CPF>{data.cpf}</CPF>
                            <Phone>{data.phone}</Phone>
                            <Email>{data.email}</Email>
                            <ModalButtonView>
                                <ModalButtonConfirm onPress={() => setInfoUser(!infoUser)}>
                                    <ModalButtonText>Ok</ModalButtonText>
                                </ModalButtonConfirm>
                            </ModalButtonView>
                        </ModalBotton>

                    </ModalView>
                </CenteredModalView>
            </Modal>
        </Area>
    )
}
