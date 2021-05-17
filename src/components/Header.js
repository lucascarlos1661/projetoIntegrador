import React from 'react'
import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const Container = styled.SafeAreaView`
    height: 60px;
    padding: 15px;
    background-color: #5DB075
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.Text`
    font-size: 16px;
    color: #268596;
    margin-left: 10px;
    font-weight: bold;
    color: #FFF;
    font-size: 20px;
`

const NavigationBack = styled.TouchableOpacity`
    height: 40px;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
`

const Filter = styled.TouchableOpacity`
    height: 40px;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
`

export default ({ title, onPressFilter }) => {

    const navigation = useNavigation()

    return (
        <Container>
            <NavigationBack onPress={() => navigation.goBack()}>
                <Feather name='arrow-left' size={30} color={'#FFF'} />
            </NavigationBack>
            <Title>{title}</Title>
            <Filter onPress={onPressFilter}>
                <Feather name='filter' size={30} color={'#FFF'} />
            </Filter>
        </Container>
    )

}