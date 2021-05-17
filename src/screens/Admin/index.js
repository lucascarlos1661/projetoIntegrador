import React, { useState, useEffect } from 'react'
import { RefreshControl, Modal, Alert } from 'react-native'
import { mask, } from "remask"
import AntDesign from 'react-native-vector-icons/AntDesign'


import {
    Container, ListArea, Footer, LoadingIcon, Scroller, ModalView, ModalButtonView, CenteredModalView, ModalTop,
    ModalCloseButton, ModalButtonConfirm, ModalButtonText, ModalTitle, ModalTitleView, Label, InputArea, InputField,
    Input, NoResults, NoResultsView

} from './styles'

import Header from '../../components/Header'
import Item from '../../components/Item'

import Api from '../../Api'


export default () => {

    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [filterVisible, setFilterVisible] = useState(false)
    const [registration, setRegistration] = useState('')
    const [date, setDate] = useState('')
    const [offset, setOffset] = useState(0)
    const [where, setWhere] = useState('')

    const filterData = async () => {

        let day = date.split('/')[0]
        let month = date.split('/')[1]
        let year = date.split('/')[2]

        let pattern = new RegExp(/^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/)

        let dateFormated = (year + '-' + month + '-' + day)

        if (registration == '' && date == '') {

            setWhere('')

            setLoading(true)
            setList([])
            setOffset(0)
            setFilterVisible(false)
            let json = await Api.formQuery(0, '')
            setList(json)
            setOffset(20)
            setLoading(false)

        } else {

            if (!pattern.test(date)) {

                isValid = false

                return (

                    Alert.alert(
                        "Atenção",
                        "Por favor digite uma data válida."
                    )
                )
            }


            if (date == '') {

                let w = "where user.registration = '" + registration + "'"
                setWhere(w)

                setLoading(true)
                setList([])
                setOffset(0)
                setFilterVisible(false)
                let json = await Api.formQuery(0, w)
                setList(json)
                setOffset(20)

                setLoading(false)

            } else if (date != '' && registration != '') {

                let w = "where user.registration = '" + registration + "' and dateTime LIKE '" + dateFormated + "%'"

                setWhere(w)

                setLoading(true)
                setList([])
                setOffset(0)
                setFilterVisible(false)
                let json = await Api.formQuery(0, w)
                setList(json)
                setOffset(20)
                setLoading(false)

            } else {

                let w = "where dateTime LIKE '" + dateFormated + "%'"

                setWhere(w)

                setLoading(true)
                setList([])
                setOffset(0)
                setFilterVisible(false)
                let json = await Api.formQuery(0, w)
                setList(json)
                setOffset(20)
                setLoading(false)
            }
        }
    }

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    }

    const onRefresh = async () => {
        setRefreshing(false)
        setLoading(true)
        setList([])
        setOffset(0)
        let json = await Api.formQuery(0, where)
        setList(json)
        setOffset(20)
        setLoading(false)
    }

    useEffect(() => {
        getForms()
    }, [])

    const getForms = async () => {

        setLoading(true)
        let json = await Api.formQuery(offset, where)
        setList(list.concat(json))
        setOffset(offset + 20)
        setLoading(false)
    }

    return (
        <Container>

            <Header
                title={'Painel'}
                onPressFilter={() => setFilterVisible(!filterVisible)}
            />
            <Scroller onScroll={({ nativeEvent }) => {
                if (isCloseToBottom(nativeEvent)) {
                    getForms()
                }
            }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

                {
                    <>
                        <ListArea>
                            {
                                (list.toString() == [] && loading == false) ?

                                    <NoResultsView>
                                        <NoResults>
                                            Nenhum resultado encontrado
                                        </NoResults>
                                    </NoResultsView>

                                    :

                                    list.map((item, k) => (
                                        <Item key={k} data={item} />
                                    ))
                            }
                        </ListArea>
                    </>
                }

                <Footer>
                    {loading &&
                        <LoadingIcon size="large" color="#5DB075" />
                    }
                </Footer>
            </Scroller>
            <Modal
                animationType="fade"
                transparent={true}
                visible={filterVisible}
                onRequestClose={() => {
                    setFilterVisible(!filterVisible);
                }}
            >
                <CenteredModalView>
                    <ModalView>
                        <ModalTop>
                            <ModalTitleView>
                                <ModalTitle>Filtro</ModalTitle>
                            </ModalTitleView>
                            <ModalCloseButton onPress={() => setFilterVisible(!filterVisible)}>
                                <AntDesign name='close' size={26} />
                            </ModalCloseButton>
                        </ModalTop>

                        <InputArea>

                            <InputField>
                                <Label>Matrícula: </Label>
                                <Input
                                    value={registration}
                                    onChangeText={t => setRegistration(t)}
                                    maxLength={9}
                                />
                            </InputField>

                            <InputField>
                                <Label>Data: </Label>
                                <Input
                                    value={date}
                                    onChangeText={t => setDate(mask(t, ['99/99/9999']))}
                                    keyboardType="number-pad"
                                    maxLength={10}
                                />
                            </InputField>


                        </InputArea>

                        <ModalButtonView>
                            <ModalButtonConfirm onPress={filterData}>
                                <ModalButtonText>Ok</ModalButtonText>
                            </ModalButtonConfirm>
                        </ModalButtonView>
                    </ModalView>
                </CenteredModalView>
            </Modal>
        </Container>

    )

}