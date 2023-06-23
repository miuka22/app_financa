import { useState } from "react"
import { useFonts } from 'expo-font'
import { View, Text, StyleSheet, Pressable, Image } from "react-native"
import { Portal, Modal } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import {Calendar, LocaleConfig} from 'react-native-calendars';

function Calendario() {
    const navigation = useNavigation()
    const [visible, setVisible] = useState(true)

    const [loaded] = useFonts({
        SourceSansProSemiBold: require('../../assets/fonts/SourceSansPro-SemiBold.ttf'),
    })

    const abrirModal = () => setVisible(true)
    const fecharModal = () => setVisible(false)

    const [selected, setSelected] = useState('');

    if (!loaded) {
        return null
    }


    return (
        <View>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={fecharModal}
                    style={styles.menuModal}
                >
                    <View style={styles.conteiner}>
                        <View style={styles.calendario}>
                            <Calendar
                                onDayPress={day => {
                                    setSelected(day.dateString)
                                }}
                            markedDates={{
                                [selected]: {selected: true, disableTouchEvent: true, selectedColor: '#423880'}
                            }}
                            theme={{
                                backgroundColor: '#ff0',
                                calendarBackground: '#FFFFFF',
                                selectedDayTextColor: '#FFFFFF',
                                todayTextColor: '#423880',
                                dayTextColor: '#2d4150',
                                textDisabledColor: '#C1C1C1'
                            }}
                            />
                        </View>
                        <View style={styles.localBotoes}>

                        </View>
                    </View>
                </Modal>
            </Portal>
            <Pressable style={styles.btnCalendario} onPress={abrirModal}>
                <Text style={styles.txt24sb}>DATA</Text>
            </Pressable>
        </View>
    )
}

LocaleConfig.locales['br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Décembre'
      ],
      monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
      dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      today: "Hoje"
    
}

LocaleConfig.defaultLocale = 'br';

const styles = StyleSheet.create({
    calendario: {
        backgroundColor: '#303030',
        width: 350,
    },
    btnCalendario: {
        height: 50,
        width: 350,
        backgroundColor: '#423880',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuModal: {
        justifyContent:'center',
        alignItems: 'center',
    },
    menuConteudo: {
        backgroundColor: '#9485EE',
        width:139,
        height:51,
        alignItems:'flex-end',
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6252BA',
        height: 49,
        width: 137,
    },
    txt24sb: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'SourceSansProSemiBold',
    },
    conteiner: {
        height: 450,
        width: 350,
        backgroundColor: '#505050',
        alignItems: 'center',
    },
})

export { Calendario }