import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`

export const ContainerTop = styled.SafeAreaView`
    height: 25%;
    width: 100%;
    background-color: #5DB075;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 25px;
    color:#FFF;
    font-weight: bold
`

export const TitleArea = styled.View`
    height: 36px;
    width: 343px;
    margin-top: 25px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const TitleButton = styled.TouchableOpacity`
    height: 36px;
    width: 70px;
    justify-content: center;
    align-items: center;
`

export const TitleButtonText = styled.Text`
    font-size: 18px;
    color : #FFF;
`

export const AvatarIcon = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 65px;
`;

export const ImageArea = styled.View`
    margin-top: 12%;
    width: 135px;
    height: 135px;
    border-radius: 70px;
    justify-content: center;
    align-items: center;
    border: 5px solid #FFFFFF;
    background-color: #FFFFFF;
`

export const IconArea = styled.View`
    margin-top: 12%;
    width: 135px;
    height: 135px;
    border-radius: 70px;
    padding-right: 50px;
    position: absolute;
    align-items: center;
`

export const IconEdit = styled.TouchableOpacity`
    height: 30px;
    width: 30px
    background-color: #FFF;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    margin-left: 110px;
    margin-top: 20px;
`

export const NameArea = styled.View`
    width: 100%;
    align-items: center;
    padding-top: 10px;
`

export const Name = styled.Text`
    font-size: 25px;
    color:#000000;
    margin-top: 25px;
`
export const FormView = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 90%;
`

export const FormButton = styled.TouchableOpacity`
    height: 60px;
    width: 100px
    background-color: #5DB075;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`

export const FormButtonText = styled.Text`
    padding-top: 5px;
    font-size: 18px;
    color : #000000;
`
