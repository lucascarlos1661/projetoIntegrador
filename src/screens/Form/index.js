import React, { useContext, useState } from 'react'
import { ScrollView, Alert, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { Picker } from '@react-native-picker/picker'
import { RadioButton } from 'react-native-paper'
import {
    Container, Title, SubTitle, InputArea, InputAreaWithoutLine, Label,
    TextBoxArea, TextBox, TextBoxLengthArea, Line, TextBoxLength, PickerArea, TitleLabel,
    InputConfirmArea, LabelConfirm, ConfirmButton, ConfirmButtonText, LoadingIcon,
    CenteredModalView, ModalView, ModalTop, ModalTextTop, ModalBotton,
    ModalBottonText, ModalButtonConfirm, ModalButtonText
} from './styles'

import Api from '../../Api'
import { UserContext } from '../../contexts/UserContext'

export default () => {

    const { state: user } = useContext(UserContext);

    const navigation = useNavigation();

    const [feverField, setFeverField] = useState(false)
    const [corizaField, setCorizaField] = useState(false)
    const [congestionField, setCongestionField] = useState(false)
    const [breathingField, setBreathingField] = useState(false)
    const [smellField, setSmellField] = useState(false)
    const [tasteField, setTasteField] = useState(false)
    const [noneField, setNoneField] = useState(true)
    const [anotherSymptomField, setAnotherSymptomField] = useState('')
    const [contactField, setContactField] = useState(false)
    const [contactDetailsField, setContactDetailsField] = useState('')

    const [familyFeverField, setFamilyFeverField] = useState(false)
    const [familyCorizaField, setFamilyCorizaField] = useState(false)
    const [familyCongestionField, setFamilyCongestionField] = useState(false)
    const [familyBreathingField, setFamilyBreathingField] = useState(false)
    const [familySmellField, setFamilySmellField] = useState(false)
    const [familyTasteField, setFamilyTasteField] = useState(false)
    const [noneFamilyField, setNoneFamilyField] = useState(true)
    const [familyAnotherSymptomField, setFamilyAnotherSymptomField] = useState('')

    const [sleepField, setSleepField] = useState('never')
    const [eatField, setEatField] = useState('never')
    const [anxietyField, setAnxietyField] = useState('never')
    const [sadnessField, setSadnessField] = useState('never')

    const [confirmField, setConfirmField] = useState(false)

    const [isLoading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const [suspect, setSuspect] = useState(false)

    const setNone = () => {
        setNoneField(!noneField)
        setFeverField(false)
        setCorizaField(false)
        setCongestionField(false)
        setBreathingField(false)
        setSmellField(false)
        setTasteField(false)
    }

    const setNoneFamily = () => {
        setNoneFamilyField(!noneFamilyField)
        setFamilyFeverField(false)
        setFamilyCorizaField(false)
        setFamilyCongestionField(false)
        setFamilyBreathingField(false)
        setFamilySmellField(false)
        setFamilyTasteField(false)
    }

    const userSuspect = () => {
        let suspectValue = false
        if (feverField == true || contactField == true || (breathingField == true && tasteField == true) ||
            (corizaField == true && congestionField == true && breathingField == true) ||
            (corizaField && congestionField && smellField) == true || familyFeverField == true ||
            (familyBreathingField == true && familyTasteField == true) ||
            (familyCorizaField == true && familyCongestionField == true && familyBreathingField == true) ||
            (familyCorizaField && familyCongestionField && familySmellField) == true) {
            setSuspect(true)
            suspectValue = true
        }
        return suspectValue
    }

    const handleConfirmCLick = async () => {
        if (confirmField === true) {
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
                            let suspectValue = userSuspect()
                            let json = await Api.formSave(
                                user.id, feverField, corizaField, congestionField, breathingField, smellField,
                                tasteField, anotherSymptomField, contactField, contactDetailsField, familyFeverField,
                                familyCorizaField, familyCongestionField, familyBreathingField, familySmellField,
                                familyTasteField, familyAnotherSymptomField, sleepField, eatField, anxietyField,
                                sadnessField, suspectValue
                            )
                            let responseJson = JSON.parse(json);

                            if (responseJson.status == 'error') {
                                alert("Erro", responseJson.message);
                                setLoading(false)
                            } else {

                                setModalVisible(!modalVisible)

                                setLoading(false)
                            }
                        }
                    }
                ]
            )

        } else {
            Alert.alert("Atenção", "Confirme o preenchimento dos campos")
            setLoading(false)
        }
    }

    return (
        <Container>
            <ScrollView>
                <Title>Marque caso apresente:</Title>
                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={feverField}
                        onValueChange={() => { setFeverField(!feverField), setNoneField(false) }}
                    />
                    <Label>Febre</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={corizaField}
                        onValueChange={() => { setCorizaField(!corizaField), setNoneField(false) }}
                    />
                    <Label>Coriza</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={congestionField}
                        onValueChange={() => { setCongestionField(!congestionField), setNoneField(false) }}
                    />
                    <Label>Congestão Nasal</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={breathingField}
                        onValueChange={() => { setBreathingField(!breathingField), setNoneField(false) }}
                    />
                    <Label>Dificuldade respiratória</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={smellField}
                        onValueChange={() => { setSmellField(!smellField), setNoneField(false) }}
                    />
                    <Label>Perda de olfato</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={tasteField}
                        onValueChange={() => { setTasteField(!tasteField), setNoneField(false) }}
                    />
                    <Label>Perda de paladar</Label>
                </InputArea>

                <InputAreaWithoutLine>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={noneField}
                        onValueChange={setNone}
                    />
                    <Label>Nenhum</Label>
                </InputAreaWithoutLine>

                <TextBoxLengthArea>
                    <TextBoxLength>{anotherSymptomField.length}/500</TextBoxLength>
                </TextBoxLengthArea>

                <TextBoxArea>
                    <TextBox
                        placeholder="Outro sintoma"
                        placeholderTextColor="#6B6B6B"
                        multiline={true}
                        maxLength={500}
                        value={anotherSymptomField}
                        onChangeText={t => setAnotherSymptomField(t)}
                    />
                </TextBoxArea>

                <Line />

                <Title>Você teve contato com alguma pessoa caso positivo para covid nos ultimos 14 dias?</Title>

                <InputAreaWithoutLine>
                    <RadioButton
                        value="true"
                        color="#008577"
                        status={contactField == true ? 'checked' : 'unchecked'}
                        onPress={() => setContactField(true)}
                    />
                    <Label>Sim</Label>
                    <RadioButton
                        value="false"
                        color="#008577"
                        status={contactField == false ? 'checked' : 'unchecked'}
                        onPress={() => setContactField(false)}
                    />
                    <Label>Não</Label>
                </InputAreaWithoutLine>

                <TextBoxLengthArea>
                    <TextBoxLength>{contactDetailsField.length}/500</TextBoxLength>
                </TextBoxLengthArea>

                <TextBoxArea>
                    <TextBox
                        placeholder="Observação"
                        placeholderTextColor="#6B6B6B"
                        multiline={true}
                        maxLength={500}
                        value={contactDetailsField}
                        onChangeText={t => setContactDetailsField(t)}
                    />
                </TextBoxArea>

                <Line />

                <Title>Com relação a sua família. Na sua casa alguem está sentindo algum dos sintomas listados abaixo?
                Em caso positivo selecione o(s) sintoma(s).
                </Title>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={familyFeverField}
                        onValueChange={() => { setFamilyFeverField(!familyFeverField), setNoneFamilyField(false) }}
                    />
                    <Label>Febre</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={familyCorizaField}
                        onValueChange={() => { setFamilyCorizaField(!familyCorizaField), setNoneFamilyField(false) }}
                    />
                    <Label>Coriza</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={familyCongestionField}
                        onValueChange={() => { setFamilyCongestionField(!familyCongestionField), setNoneFamilyField(false) }}
                    />
                    <Label>Congestão Nasal</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={familyBreathingField}
                        onValueChange={() => { setFamilyBreathingField(!familyBreathingField), setNoneFamilyField(false) }}
                    />
                    <Label>Dificuldade respiratória</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={familySmellField}
                        onValueChange={() => { setFamilySmellField(!familySmellField), setNoneFamilyField(false) }}
                    />
                    <Label>Perda de olfato</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={familyTasteField}
                        onValueChange={() => { setFamilyTasteField(!familyTasteField), setNoneFamilyField(false) }}
                    />
                    <Label>Perda de paladar</Label>
                </InputArea>

                <InputAreaWithoutLine>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={noneFamilyField}
                        onValueChange={setNoneFamily}
                    />
                    <Label>Nenhum</Label>
                </InputAreaWithoutLine>

                <TextBoxLengthArea>
                    <TextBoxLength>{familyAnotherSymptomField.length}/500</TextBoxLength>
                </TextBoxLengthArea>

                <TextBoxArea>
                    <TextBox
                        placeholder="Outro sintoma"
                        placeholderTextColor="#6B6B6B"
                        multiline={true}
                        maxLength={500}
                        value={familyAnotherSymptomField}
                        onChangeText={t => setFamilyAnotherSymptomField(t)}
                    />
                </TextBoxArea>

                <Line />

                <Title>Perguntas sobre saúde emocional</Title>

                <SubTitle>Diante de cada situação, selecione a opção que você mais se identifique</SubTitle>

                <TitleLabel>Alteração ou distúrbios do sono (insônia, dificuldade para dormir ou sono em excesso</TitleLabel>

                <PickerArea>
                    <Picker
                        mode={'dropdown'}
                        itemStyle={{ backgroundColor: "#FFF", color: "#FFF" }}
                        selectedValue={sleepField}
                        onValueChange={(itemValue, itemIndex) =>
                            setSleepField(itemValue)
                        }>
                        <Picker.Item label="Nunca" value="never" />
                        <Picker.Item label="Raramente" value="rarely" />
                        <Picker.Item label="Às vezes" value="sometimes" />
                        <Picker.Item label="Frequentemente" value="often" />
                    </Picker>
                </PickerArea>

                <Line />

                <TitleLabel>Necessidade de comer exageramente, usar álcool ou outras substâncias de forma abusiva</TitleLabel>

                <PickerArea>
                    <Picker
                        mode={'dropdown'}
                        selectedValue={eatField}
                        onValueChange={(itemValue, itemIndex) =>
                            setEatField(itemValue)
                        }>
                        <Picker.Item label="Nunca" value="never" />
                        <Picker.Item label="Raramente" value="rarely" />
                        <Picker.Item label="Às vezes" value="sometimes" />
                        <Picker.Item label="Frequentemente" value="often" />
                    </Picker>
                </PickerArea>

                <Line />

                <TitleLabel>Excesso de ansiedade, sensação de nervosismo ou preocupação</TitleLabel>

                <PickerArea>
                    <Picker
                        mode={'dropdown'}
                        selectedValue={anxietyField}
                        onValueChange={(itemValue, itemIndex) =>
                            setAnxietyField(itemValue)
                        }>
                        <Picker.Item label="Nunca" value="never" />
                        <Picker.Item label="Raramente" value="rarely" />
                        <Picker.Item label="Às vezes" value="sometimes" />
                        <Picker.Item label="Frequentemente" value="often" />
                    </Picker>
                </PickerArea>

                <Line />

                <TitleLabel>Tristeza acompanhada por sensação de que tudo vai dar errado, sentimento de desamparo</TitleLabel>

                <PickerArea>
                    <Picker
                        mode={'dropdown'}
                        selectedValue={sadnessField}
                        onValueChange={(itemValue, itemIndex) =>
                            setSadnessField(itemValue)
                        }>
                        <Picker.Item label="Nunca" value="never" />
                        <Picker.Item label="Raramente" value="rarely" />
                        <Picker.Item label="Às vezes" value="sometimes" />
                        <Picker.Item label="Frequentemente" value="often" />
                    </Picker>
                </PickerArea>

                <InputConfirmArea>
                    <CheckBox
                        tintColors={{ true: '#008577', false: '#000' }}
                        value={confirmField}
                        onValueChange={setConfirmField}
                    />
                    <LabelConfirm>Confirmo que os dados preenchidos são verídicos e apresentam minha real situação</LabelConfirm>
                </InputConfirmArea>

                <Title>{confirmField}</Title>

                {isLoading &&
                    <LoadingIcon size='large' color='#5DB075' />
                }

                {!isLoading &&

                    <ConfirmButton onPress={handleConfirmCLick}>
                        <ConfirmButtonText>SALVAR</ConfirmButtonText>
                    </ConfirmButton>
                }

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <CenteredModalView>
                        <ModalView>
                            {
                                suspect == true ?
                                    <>
                                        <ModalTop color="red">
                                            <IconEntypo name='emoji-sad' size={50} color={'#FFF'} />
                                            <ModalTextTop>Suspeita de Covid</ModalTextTop>
                                        </ModalTop>
                                        <ModalBotton>
                                            <ModalBottonText>Iremos entrar em contato</ModalBottonText>
                                            <ModalButtonConfirm onPress={() => navigation.navigate('Home')}>
                                                <ModalButtonText>Ok</ModalButtonText>
                                            </ModalButtonConfirm>
                                        </ModalBotton>
                                    </>

                                    :

                                    <>

                                        <ModalTop>
                                            <IconEntypo name='emoji-happy' size={50} color={'#FFF'} />
                                            <ModalTextTop>Estou bem!</ModalTextTop>
                                        </ModalTop>
                                        <ModalBotton>
                                            <ModalBottonText>Tudo certo</ModalBottonText>
                                            <ModalButtonConfirm onPress={() => navigation.navigate('Home')}>
                                                <ModalButtonText>Ok</ModalButtonText>
                                            </ModalButtonConfirm>
                                        </ModalBotton>
                                    </>
                            }
                        </ModalView>
                    </CenteredModalView>
                </Modal>
            </ScrollView>
        </Container>
    )
}