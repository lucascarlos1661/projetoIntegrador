import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #FFF
`

export const ListArea = styled.View`
    width: 100%;
`

export const Scroller = styled.ScrollView`
    flex: 1;
    padding-top: 20px;
`

export const CenteredModalView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ModalView = styled.View`
    width: 70%;
    height: 260px;
    background-color: white;
    border-radius: 20px;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`

export const ModalTop = styled.View`
    height: 30%;
    width: 100%;
    border-top-start-radius: 20px;
    border-top-end-radius: 20px;
    background-color: #F0F0F0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`


export const ModalTitleView = styled.View`
    width: 80%;
    align-items: center;
`

export const ModalCloseButton = styled.TouchableOpacity`
    margin-right: 20px
`

export const ModalTitle = styled.Text`
    font-size: 18px;
    color : #000;
    font-weight: bold;
    margin-left: 37px;
`

export const ModalButtonView = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`

export const ModalButtonConfirm = styled.TouchableOpacity`
    height: 40px;
    width: 50px; 
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

export const Label = styled.Text`
    margin-left : 7px;
    height: 42px;
    width: 80px;
    font-size: 16px;
    color: #000000;
    text-align-vertical: center;
`

export const InputArea = styled.View`
    flex:1;
    padding: 10px;
`

export const InputField = styled.View`
    width: 100%;
    height: 42px;
    color: #FFF;
    flex-direction: row;
    margin-left: 3px;
    border-bottom-width: 1px;
    border-radius: 5px;
`

export const Input = styled.TextInput`
    margin-left : 7px;
    height: 42px;
    width: 150px;
    font-size: 16px;
    color: #000000;
`

export const LoadingIcon = styled.ActivityIndicator`
`

export const Footer = styled.View`
    align-items: center;
    height: 60px;
`

export const NoResults = styled.Text`
    font-size: 18px;
    color : #000;
    font-weight: bold;
`

export const NoResultsView = styled.View`
    flex:1;
    align-items: center;
`