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

export const Note = styled.Text`
    flex-direction: row;
    font-size: 18px;
    margin-bottom: 30px;
`

export const NoteWithContent = styled.Text`
    flex-direction: row;
    font-size: 18px;
    color: blue;
    text-decoration-line: underline;
    margin-bottom: 30px;
    margin-left: 5px;
`

export const ViewNote = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    color: #FFF;
    margin-bottom: 20px;
`

export const NoteButton = styled.TouchableOpacity`
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

export const Line = styled.View`
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

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
`