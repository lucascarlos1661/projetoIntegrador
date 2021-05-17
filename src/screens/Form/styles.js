import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    padding: 15px;
    background-color: #FFF
`

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

export const SubTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    padding-top: 15px;
    padding-bottom: 10px;
`

export const TitleLabel = styled.Text`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 18px;
    margin-right: 50px;
`

export const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #FFF;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
`

export const InputAreaWithoutLine = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    color: #FFF;
`

export const Label = styled.Text`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 18px;
    margin-right: 50px;
`

export const TextBoxArea = styled.View`
    flex:1;
    margin-top: 5px;
    height: 90px
    border: 1px solid #000;
    border-radius: 6px
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 15px;
`

export const Line = styled.View `
    margin-bottom: 15px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
`

export const TextBox = styled.TextInput`
    height: 85px
    width: 100%
    padding-left: 15px;
    font-size: 18px;
    color: #000
`

export const TextBoxLengthArea = styled.View`
    align-items: flex-end;
    padding-top: 15px;
    width: 100%;
`

export const TextBoxLength = styled.Text`
    font-size: 16px;
`

export const PickerArea = styled.View`
    flex: 1;
    border: 1px solid #000;
    border-radius: 3px
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #FFF;
`

export const InputConfirmArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: baseline;
    padding-top: 10px;
    color: #FFF;
    border-top-width: ${StyleSheet.hairlineWidth}px;
`
export const LabelConfirm = styled.Text`
    align-items: center;
    font-size: 16px;
    margin-right: 40px;
`

export const ConfirmButton = styled.TouchableOpacity`
    height: 45px;
    width: 100%
    background-color: #5DB075;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`

export const ConfirmButtonText = styled.Text`
    font-size: 18px;
    color : #FFF;
`

export const CenteredModalView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`
export const ModalView = styled.View`
    justify-content: space-between;
    width: 80%;
    height: 220px;
    background-color: white;
    border-radius: 20px;
    align-items: center;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`

export const ModalTop = styled.View`
    height: 55%;
    width: 100%;
    border-top-start-radius: 20px;
    border-top-end-radius: 20px;
    background-color: ${props => props.color || "green"};
    flex-direction: row;
    align-items: center;
    padding: 15px;
`

export const ModalTextTop = styled.Text`
    margin-left: 30px;
    color: #FFF
    font-weight: bold
    font-size: 18px;
`

export const ModalBotton = styled.View`
    height: 45%;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`

export const ModalBottonText = styled.Text`
    font-size: 16px;
    color : #000;
    font-weight: bold;
`

export const ModalButtonConfirm = styled.TouchableOpacity`
    height: 45px;
    width: 30%
    justify-content: center;
    align-items: center;
    border: 2px solid #000; 
    border-radius: 10px;
`

export const ModalButtonText = styled.Text`
    font-size: 18px;
    color : #000;
`

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
`