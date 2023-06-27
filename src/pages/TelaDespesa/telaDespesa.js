
import { Text, View, TextInput, Image, StyleSheet, Pressable, useWindowDimensions } from "react-native"
import { useFonts } from 'expo-font'
import { BarraInferiorDespesa } from '../../Componente/BarraInferior'
import { MenuSup } from '../../Componente/Menu'
import { Calendario } from "../../Componente/Calendario"
import { Categoria } from "../../Componente/Categoria"
import { useState } from "react"
import CurrencyInput from 'react-native-currency-input';

function TelaDespesas({ navigation }) {
    const [loaded] = useFonts({
        SourceSansProBlack: require('../../../assets/fonts/SourceSansPro-Black.ttf'),
        SourceSansProBold: require('../../../assets/fonts/SourceSansPro-Bold.ttf'),
        SourceSansProSemiBold: require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
        SourceSansProRegular: require('../../../assets/fonts/SourceSansPro-Regular.ttf')
    })
    const {height, width} = useWindowDimensions();
    const adicionar = () => {
        navigation.navigate('TelaPrincipal')
    }
    const urlDev = "http://localhost:3000"
    const urlProduct = "https://api-backend-bd-tarde.onrender.com"
    
    
    const [valorD,setValue]=useState("")
    ///const [value, setValue] = useState('');
    //const [categoria, setCategoria] = useState("");
    console.log(valorD)

    //console.log(categoria)

    const load = async () => {
        const result = await fetch(`${urlProduct}/despesas`,
          {
            method: "POST",
            headers: {
            valorDespesas: valorD,
           /// categoria: categoria
            },
          }
    
        ).then(res => res)
        const despesasResult = await result.json()
        console.log('despesasResult',despesasResult)
        }
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
                            value={valorD}
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
                <View style={styles.componentesExprt}>
                    <Calendario/>
                    <Categoria/>
                </View>
                <Pressable onPress={()=>load} style={styles.btnAdicionar}><Text style={styles.txt20bk}>
                ADICIONAR</Text></Pressable>
            </View>
            <BarraInferiorDespesa/>
        </View>
    )
}

const styles = StyleSheet.create({
    componentesExprt: {
        height: 150,
        justifyContent: 'space-between',
    },
    btnAdicionar: {
        borderRadius:  11,
        height: 50,
        width: 250,
        backgroundColor: '#423880',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 50,
        flex: 1,
    },
    barraSuperior: {
        backgroundColor: '#423880',
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
    txt20bk: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'SourceSansProBlack',
        alignItems: 'baseline',
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

export default TelaDespesas