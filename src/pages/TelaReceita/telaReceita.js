
import { Text, View, Alert, StyleSheet, Pressable, useWindowDimensions } from "react-native"
import { useFonts } from 'expo-font'
import { BarraInferiorDespesa, BarraInferiorReceita } from '../../Componente/BarraInferior'
import { MenuSup } from '../../Componente/Menu'
import { Calendario, data } from "../../Componente/Calendario"
import { Categoria, categoriaExportada } from "../../Componente/Categoria"
import { useState } from "react"
import CurrencyInput from 'react-native-currency-input';
import { api } from '../../api'

function TelaReceita({ navigation }) {
    const [loaded] = useFonts({
        SourceSansProBlack: require('../../../assets/fonts/SourceSansPro-Black.ttf'),
        SourceSansProBold: require('../../../assets/fonts/SourceSansPro-Bold.ttf'),
        SourceSansProSemiBold: require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
        SourceSansProRegular: require('../../../assets/fonts/SourceSansPro-Regular.ttf')
    })
    const {height, width} = useWindowDimensions();
    const adicionar = () => {
        setDataCalendario(data())
        setCategoria(categoriaExportada())

        if (categoria == 'categoria' || valorDinheiro == 0 || valorDinheiro == null) {
            Alert.alert('Money Mind', 'Insira valores válidos', [
                {text: 'OK'},
              ]);
        } else {
            console.log('chegou em else')
            cadastrarReceita()
        }

        async function cadastrarReceita() {
            const response = await api.post('cadastrar/dinheiroconta/',{
                data: dataCalendario,
                categoria: categoria,
                valor: valorDinheiro,
                tipo: 'receita'
            })
            console.log(response.data.retorno)
            navigation.navigate('TelaPrincipal')
        }
        
        console.log(`VALOR: ${valorDinheiro}`)
        console.log(`DATA: ${dataCalendario}`)
        console.log(`CATEGORIA: ${categoria}`)
        console.log(`=====================`)
    }
    
    const [valorDinheiro,setValorDinheiro]=useState("")
    const [dataCalendario, setDataCalendario] = useState('');
    const [categoria, setCategoria] = useState("");

    if (!loaded) {
        return null
    }
    function atualizarCat(cat){
        setCategoria(cat)
    }
    function atualizarData(data) {
        setDataCalendario(data)
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
                        Nova Receita
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
                            value={valorDinheiro}
                            onChangeValue={setValorDinheiro}
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
                    <Calendario atualizarData={atualizarData}/>
                    <Categoria atualizarCat={atualizarCat}/>
                </View>
                <Pressable onPress={()=>{adicionar()}} style={styles.btnAdicionar}><Text style={styles.txt20bk}>
                ADICIONAR</Text></Pressable>
            </View>
            <BarraInferiorReceita/>
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

export default TelaReceita