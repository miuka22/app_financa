
import { Text, View, TextInput, Image, StyleSheet, Pressable, useWindowDimensions } from "react-native"
import { useFonts } from 'expo-font'
import { BarraInferiorDespesa } from '../../Componente/BarraInferior'
import { MenuSup } from '../../Componente/Menu'
import { Calendario } from "../../Componente/Calendario"
import { useState } from "react"
import CurrencyInput from 'react-native-currency-input';

function TelaPrincipal({ navigation }) {
    const [loaded] = useFonts({
        SourceSansProBlack: require('../../../assets/fonts/SourceSansPro-Black.ttf'),
        SourceSansProBold: require('../../../assets/fonts/SourceSansPro-Bold.ttf'),
        SourceSansProSemiBold: require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
        SourceSansProRegular: require('../../../assets/fonts/SourceSansPro-Regular.ttf')
    })
    const [value, setValue] = useState(0);
    const {height, width} = useWindowDimensions();

    if (!loaded) {
        return null
    }

    return (
        <View style={{
            height: height,
            justifyContent: 'space-between',
        }}>
            <View style={styles.barraSuperior}>
                <View style={styles.faixaUm}>
                    <View style={styles.perfil}>
                    <Text style={styles.txt25bk}>
                        Nova Despesa
                    </Text>
                    </View>
                    <MenuSup/>
                </View>
                <View style={styles.saldo}>
                    <Text style={styles.txt25bk}>
                        Valor
                    </Text>
                    <View style={styles.valor}>
                        <Text style={styles.txt28sb}>R$ </Text>
                        <CurrencyInput
                            style={styles.txt28sb}
                            value={value}
                            onChangeValue={setValue}
                            delimiter="."
                            separator=","
                            minValue={0}
                            placeholder="0,00"
                            placeholderTextColor={'#FFFFFF'}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <Calendario/>
                <Pressable><Text>ADICIONAR</Text></Pressable>
            </View>
            <BarraInferiorDespesa/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {},
    barraSuperior: {
        backgroundColor: '#7B68EE',
        height: 200,
    },
    valor: {
        flexDirection: 'row'
    },
    faixaUm: {
        top: 50,
        paddingHorizontal: 40,
        height: 50,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    saldo: {
        height: 100,
        paddingHorizontal: 40,
        top: 75
    },
    txt25bk: {
        color: '#FFFFFF',
        fontSize: 25,
        fontFamily: 'SourceSansProBlack',
        alignItems: 'baseline'
    },
    txt12b: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'SourceSansProBold',
        paddingTop: 6,
    },
    txt24sb: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'SourceSansProSemiBold',
        paddingHorizontal: 10,
    },
    txt28sb: {
        color: '#ffffff',
        fontSize: 28,
        fontFamily: 'SourceSansProSemiBold',
    },
    txt12r: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'SourceSansProRegular',
        paddingTop: 6,
    },
    iconPerfil: {
        height: 30,
        width: 30,
    },
})

export default TelaPrincipal;