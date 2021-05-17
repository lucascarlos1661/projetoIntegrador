import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    padding: 15px;
    background-color: #FFF
`
export const Label = styled.Text`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 18px;
`

export const InputField = styled.View`
    width: 100%;
    height: 45px;
    color: #FFF;
    background-color: #E8E8E8;
    flex-direction: row;
    border-radius: 10px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    border: 1px solid #BDBDBD; 
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000000;
    margin-left: 10px;
`;

export const ReadOnlyInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #A0A0A0;
    margin-left: 10px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 45px;
    width: 100%;
    background-color: #5DB075;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color : #FFF;
`

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
`