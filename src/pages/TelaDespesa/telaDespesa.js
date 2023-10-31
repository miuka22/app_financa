
import { Text, View, Alert, StyleSheet, Pressable, useWindowDimensions } from "react-native"
import { useFonts } from 'expo-font'
import { BarraInferiorDespesa } from '../../Componente/BarraInferior'
import { MenuSup } from '../../Componente/Menu'
import { Calendario } from "../../Componente/Calendario"
import { Categoria, categoriaExportada } from "../../Componente/Categoria"
import { useEffect, useState } from "react"
import CurrencyInput from 'react-native-currency-input';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { api } from '../../api'

function TelaDespesas({ navigation }) {
    const [loaded] = useFonts({
        SourceSansProBlack: require('../../../assets/fonts/SourceSansPro-Black.ttf'),
        SourceSansProBold: require('../../../assets/fonts/SourceSansPro-Bold.ttf'),
        SourceSansProSemiBold: require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
        SourceSansProRegular: require('../../../assets/fonts/SourceSansPro-Regular.ttf')
    })
    const {height, width} = useWindowDimensions();
    const [dadosUsuarios, setDadosUsuarios] = useState('')

    async function puxarDados() {
        const userData = await AsyncStorage.getItem("userData")
        setDadosUsuarios(JSON.parse(userData))
        console.log(dadosUsuarios.userData.id)
    }
            
    useEffect(() => {  
            (async () => {
                puxarDados()
            })()
    }, [dadosUsuarios])
    
    const adicionar = () => {
            setCategoria(categoriaExportada())
        console.log('categoria');
        console.log(categoriaExportada());
        console.log(categoria);
        console.log('dataCalendario');
        console.log(dataCalendario);

        if (categoria == 'categoria'|| valorDinheiro == 0 || valorDinheiro == null) {
            Alert.alert('Money Mind', 'Insira valores válidos', [
                {text: 'OK'},
              ]);
        } else {
            console.log('chegou em else')
            cadastrarDespesa()
        }

        async function cadastrarDespesa() {
            const response = await api.post('cadastrar/dinheiroconta/',{
                data: dataCalendario,
                categoria: categoria,
                valor: -valorDinheiro,
                tipo: 'despesa',
                userId: dadosUsuarios.userData.id
            })
            console.log(response.status)
            navigation.navigate('TelaPrincipal')
        }
        
        // console.log(`VALOR: ${valorDinheiro}`)
        // console.log(`DATA: ${dataCalendario}`)
        // console.log(`CATEGORIA: ${categoria}`)
        console.log(`=====================`)
    }
    
    const [valorDinheiro,setValorDinheiro]=useState("")
    const [dataCalendario, setDataCalendario] = useState('');
    const [categoria, setCategoria] = useState("");

    if (!loaded) {
        console.log(dataCalendario);
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
                            value={valorDinheiro}
                            onChangeValue={
                                setValorDinheiro
                            }
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