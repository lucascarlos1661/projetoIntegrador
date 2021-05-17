import React, { useState } from 'react';
import { ScrollView, Alert, Modal } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { Picker } from '@react-native-picker/picker'
import { RadioButton } from 'react-native-paper'
import {
    Container, Title, SubTitle, InputArea, InputAreaWithoutLine, Label,
    Note, ViewNote, NoteButton, NoteWithContent, Line, PickerArea, TitleLabel,
} from './styles'


export default ({ route }) => {

    const { data } = route.params


    const [fever] = useState(data.fever == 1 ? !!data.fever : !data.fever)
    const [coriza] = useState(data.coriza == 1 ? !!data.coriza : !data.coriza)
    const [congestion] = useState(data.congestion == 1 ? !!data.congestion : !data.congestion)
    const [breathing,] = useState(data.breathing == 1 ? !!data.breathing : !data.breathing)
    const [smell] = useState(data.smell == 1 ? !!data.smell : !data.smell)
    const [taste] = useState(data.taste == 1 ? !!data.taste : !data.taste)
    const [anotherSymptom] = useState(data.anotherSymptom)
    const [contact] = useState(data.contact == 1 ? !!data.contact : !data.contact)
    const [contactDetails] = useState(data.contactDetails)

    const [familyFever] = useState(data.familyFever == 1 ? !!data.familyFever : !data.familyFever)
    const [familyCoriza] = useState(data.familyCoriza == 1 ? !!data.familyCoriza : !data.familyCoriza)
    const [familyCongestion] = useState(data.familyCongestion == 1 ? !!data.familyCongestion : !data.familyCongestion)
    const [familyBreathing] = useState(data.familyBreathing == 1 ? !!data.familyBreathing : !data.familyBreathing)
    const [familySmell] = useState(data.familySmell == 1 ? !!data.familySmell : !data.familySmell)
    const [familyTaste] = useState(data.familyTaste == 1 ? !!data.familyTaste : !data.familyTaste)
    const [familyAnotherSymptom] = useState(data.familyAnotherSymptom)

    const [sleep, setSleep] = useState(data.sleep)
    const [eat, setEat] = useState(data.eat)
    const [anxiety, setAnxiety] = useState(data.anxiety)
    const [sadness, setSadness] = useState(data.sadness)


    return (
        <Container>
            <ScrollView>

                <Title>Marque caso apresente:</Title>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={fever}
                        disabled={true}
                    />
                    <Label>Febre</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={coriza}
                        disabled={true}
                    />
                    <Label>Coriza</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={congestion}
                        disabled={true}
                    />
                    <Label>Congestão Nasal</Label>
                </InputArea>


                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={breathing}
                        disabled={true}
                    />
                    <Label>Dificuldade respiratória</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={smell}
                        disabled={true}
                    />
                    <Label>Perda de olfato</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={taste}
                        disabled={true}
                    />
                    <Label>Perda de paladar</Label>
                </InputArea>

                <ViewNote>
                    <Note>Observação:</Note>
                    {
                        anotherSymptom == '' ?
                            <Note>  Nenhuma observação</Note>
                            :
                            <NoteButton onPress={() => Alert.alert("Observação", anotherSymptom)}>
                                <NoteWithContent>Vizualizar observação</NoteWithContent>
                            </NoteButton>
                    }

                </ViewNote>

                <Line />

                <Title>Você teve contato com alguma pessoa caso positivo para covid nos ultimos 14 dias?</Title>

                <InputAreaWithoutLine>
                    <RadioButton
                        value="true"
                        disabled={true}
                        color="#008577"
                        status={contact == true ? 'checked' : 'unchecked'}
                    />
                    <Label>Sim</Label>
                    <RadioButton
                        value="false"
                        disabled={true}
                        color="#008577"
                        status={contact == false ? 'checked' : 'unchecked'}
                    />
                    <Label>Não</Label>
                </InputAreaWithoutLine>

                <ViewNote>
                    <Note>Observação:</Note>
                    {
                        anotherSymptom == '' ?
                            <Note>  Nenhuma observação</Note>
                            :
                            <NoteButton onPress={() => Alert.alert("Observação", contactDetails)}>
                                <NoteWithContent>Vizualizar observação</NoteWithContent>
                            </NoteButton>
                    }

                </ViewNote>

                <Line />

                <Title>Com relação a sua família. Na sua casa alguem está sentindo algum dos sintomas listados abaixo?
                Em caso positivo selecione o(s) sintoma(s).
                </Title>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={familyFever}
                        disabled={true}
                    />
                    <Label>Febre</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={familyCoriza}
                        disabled={true}
                    />
                    <Label>Coriza</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={familyCongestion}
                        disabled={true}
                    />
                    <Label>Congestão Nasal</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={familyBreathing}
                        disabled={true}
                    />
                    <Label>Dificuldade respiratória</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={familySmell}
                        disabled={true}
                    />
                    <Label>Perda de olfato</Label>
                </InputArea>

                <InputArea>
                    <CheckBox
                        tintColor={'#bdbdbd'}
                        value={familyTaste}
                        disabled={true}
                    />
                    <Label>Perda de paladar</Label>
                </InputArea>

                <ViewNote>
                    <Note>Observação:</Note>
                    {
                        anotherSymptom == '' ?
                            <Note>  Nenhuma observação</Note>
                            :
                            <NoteButton onPress={() => Alert.alert("Observação", familyAnotherSymptom)}>
                                <NoteWithContent>Vizualizar observação</NoteWithContent>
                            </NoteButton>
                    }

                </ViewNote>

                <Line />

                <Title>Perguntas sobre saúde emocional</Title>

                <SubTitle>Diante de cada situação, selecione a opção que você mais se identifique</SubTitle>

                <TitleLabel>Alteração ou distúrbios do sono (insônia, dificuldade para dormir ou sono em excesso</TitleLabel>

                <PickerArea>
                    <Picker
                        mode={'dropdown'}
                        enabled={false}
                        style={{ color: '#bdbdbd' }}
                        selectedValue={sleep}
                        onValueChange={(itemValue, itemIndex) =>
                            setSleep(itemValue)
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
                        enabled={false}
                        style={{ color: '#bdbdbd' }}
                        selectedValue={eat}
                        onValueChange={(itemValue, itemIndex) =>
                            setEat(itemValue)
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
                        enabled={false}
                        style={{ color: '#bdbdbd' }}
                        selectedValue={anxiety}
                        onValueChange={(itemValue, itemIndex) =>
                            setAnxiety(itemValue)
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
                        enabled={false}
                        style={{ color: '#bdbdbd' }}
                        selectedValue={sadness}
                        onValueChange={(itemValue, itemIndex) =>
                            setSadness(itemValue)
                        }>
                        <Picker.Item label="Nunca" value="never" />
                        <Picker.Item label="Raramente" value="rarely" />
                        <Picker.Item label="Às vezes" value="sometimes" />
                        <Picker.Item label="Frequentemente" value="often" />
                    </Picker>
                </PickerArea>

            </ScrollView>
        </Container>
    )
}