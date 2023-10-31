
import { Text, View, Image, StyleSheet, FlatList, Animated } from "react-native"
import { useFonts } from 'expo-font'
import { BarraInferiorPrincipal } from '../../Componente/BarraInferior'
import { MenuSup } from '../../Componente/Menu'
import { useEffect, useState, useCallback } from "react"
import { api } from '../../api'
import { List, Avatar } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect, useNavigation } from "@react-navigation/native"

function TelaPrincipal({ navigation }) {
    const [dadosUsuarios, setDadosUsuarios] = useState('')
    const [loaded] = useFonts({
        SourceSansProBlack: require('../../../assets/fonts/SourceSansPro-Black.ttf'),
        SourceSansProBold: require('../../../assets/fonts/SourceSansPro-Bold.ttf'),
        SourceSansProSemiBold: require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
        SourceSansProRegular: require('../../../assets/fonts/SourceSansPro-Regular.ttf')
    })
    const [historico, setHistorico] = useState([])
    const userData = Object.values(historico)
    const [valorTotal, setValorTotal] = useState(0)

    const nav = useNavigation()
    nav.addListener('focus', () => {
        puxarDados()
    })

    
    async function puxarDados() {
        const userData = await AsyncStorage.getItem("userData")
        setDadosUsuarios(JSON.parse(userData))
        const { data } = await api.get(`usuarios/${idUsuario}/conta/`).then((res) => res)
        const acumulador = data.reduce((total, valor) => total + valor.valor, 0)
        setValorTotal(acumulador)
        setHistorico(data)
        const idUsuario = dadosUsuarios?.userData.id
    }

    useEffect(() => {  
        // nav.addListener('focus', () => {
        //     console.log('OPA');
        // })
            (async () => {
                puxarDados()
            })()
    }, [])

    // const nomeCompleto = dadosUsuarios.userData?.nome
    const nomeSeparado = () => dadosUsuarios.userData?.nome == null? 'carreegando...': dadosUsuarios.userData?.nome.split(' ')[0]

    if (!loaded) {
        return null
    }

    return (
        <View style={styles.fundo}>
            <View style={styles.barraSuperior}>
                <View style={styles.faixaUm}>
                    <View style={styles.perfil}>
                        <Image
                            source={require('../../../assets/iconPerfil.png')}
                            style={styles.iconPerfil}
                        ></Image>
                        <Text style={styles.txt24sb}>
                            Olá {nomeSeparado()}
                        </Text>
                    </View>
                    <MenuSup />
                </View>
                <View style={styles.saldo}>
                    <Text style={styles.txt25bk}>
                        Saldo em conta
                    </Text>
                    <Text style={styles.txt28sb}>
                        R$: {valorTotal.toFixed(2)}
                    </Text>
                </View>
            </View>
            <View style={styles.flatlistContainer}>
                <View style={styles.historicoList}>
                    <View style={styles.flatlistCabecalho}>
                        <Text style={styles.txt26b}>Histórico da conta</Text>
                    </View>
                    <View style={styles.historicoItem}>
                        <FlatList
                            data={userData}
                            renderItem={({ item }) => <Item
                                data={item.data}
                                categoria={item.categoria}
                                valor={item.valor}
                                tipo={item.tipo}
                            />}
                        />
                    </View>
                </View>
            </View>
            <BarraInferiorPrincipal />
        </View>
    )
}

const Item = ({ valor, categoria, data, tipo }) => (
    <View style={styles.listaConteiner}><List.Item
        style={styles.lista}
        titleStyle={styles.dataLista}
        title={data}
        descriptionStyle={styles.descricaoLista}
        description={categoria}

        left={ tipo == 'receita'?
        () => <Avatar.Image
            size={30} 
            source={require('../../../assets/receita.png')}
            style={styles.avatarDespesa}
        />
        :() => <Avatar.Image
        size={30} 
        source={require('../../../assets/despesa.png')}
        style={styles.avatarDespesa}
    />}

        right={ tipo == 'receita'?
            () => <Text style={styles.valorListaReceita}>R$ {valor.toFixed(2)}</Text>
        :() => <Text style={styles.valorListaDespesa}>R$ {valor.toFixed(2)}</Text>}
    /></View>
);


const styles = StyleSheet.create({
    valorListaDespesa: {
        color: '#DD0000',
        fontSize: 20,
        fontFamily: 'SourceSansProSemiBold',
    },
    valorListaReceita: {
        color: '#007700',
        fontSize: 20,
        fontFamily: 'SourceSansProSemiBold',
    },
    descricaoLista: {
        color: '#000000',
        fontSize: 18,
        fontFamily: 'SourceSansProSemiBold',
    },
    dataLista: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'SourceSansProRegular',
        alignItems: 'baseline'
    },
    avatarDespesa: {
        backgroundColor: '#FFFFFF00',
    },
    listaConteiner: {
    },
    lista: {
        //backgroundColor: '#404040',
        borderBottomWidth: 1,
        borderBottomColor: '#423880',
        width: 350,
        height: 50,
        justifyContent: 'center',
    },
    flatlistContainer: {
        paddingTop: 50,
        flex: 1,
        //backgroundColor: '#101010',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    flatlistCabecalho: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#303030',
        borderBottomColor: '#423880',
        borderBottomWidth: 1,
    },
    historicoList: {
        width: 350,
        height: 360,
        flex: 1,
        //backgroundColor: '#202020',
        justifyContent: 'flex-start',
        bottom: 50
    },
    perfil: {
        flexDirection: 'row'
    },
    barraSuperior: {
        backgroundColor: '#423880',
        height: 200,
    },
    faixaUm: {
        top: 50,
        paddingHorizontal: 40,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    txt26b: {
        color: '#000000',
        fontSize: 26,
        fontFamily: 'SourceSansProBold',
        paddingHorizontal: 10,
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
        paddingHorizontal: 30
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
    fundo: {
        height: '100%',
        justifyContent: 'space-between',
    },
})

export default TelaPrincipal;
