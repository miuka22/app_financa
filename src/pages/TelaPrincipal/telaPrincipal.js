
import { Text, View, Image, StyleSheet, FlatList, Animated } from "react-native"
import { useFonts } from 'expo-font'
import { BarraInferiorPrincipal } from '../../Componente/BarraInferior'
import { MenuSup } from '../../Componente/Menu'
import { USER } from "../../DATA/usuario"
import { useEffect, useState } from "react"
import axios from "axios"
import { List, Avatar } from 'react-native-paper';

function TelaPrincipal({ navigation }) {
    const [loaded] = useFonts({
        SourceSansProBlack: require('../../../assets/fonts/SourceSansPro-Black.ttf'),
        SourceSansProBold: require('../../../assets/fonts/SourceSansPro-Bold.ttf'),
        SourceSansProSemiBold: require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
        SourceSansProRegular: require('../../../assets/fonts/SourceSansPro-Regular.ttf')
    })
    const [ historico, setHistorico ] = useState([])
    const userData = Object.values(historico)
    const [ valorTotal, setValorTotal ] = useState(0)
    
    useEffect( () => {
        (async () => {
            const {data} = await axios.get('https://api-backend-bd-tarde.onrender.com/despesas/').then((res) => res)

            console.log(data.length)
            const acumulador = data.reduce((total, despesa) => total - despesa.valorDespesas, 0)
            setValorTotal(acumulador)
            setHistorico(data)
        })()
    },[])
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
                        Olá, Emily
                    </Text>
                    </View>
                    <MenuSup/>
                </View>
                <View style={styles.saldo}>
                    <Text style={styles.txt25bk}>
                        Saldo em conta
                    </Text>
                    <Text style={styles.txt28sb}>
                        R$: {valorTotal}
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
                            renderItem={({item}) => <Item
                                data={item.dataDespesa}
                                categoria={item.categoria}
                                valor={item.valorDespesas}
                            />}
                        />
                    </View>
                </View>
            </View>
            <BarraInferiorPrincipal/>
        </View>
    )
}

const Item = ({valor, categoria, data}) => (
    <View style={styles.listaConteiner}><List.Item 
        style={styles.lista}
        titleStyle={styles.dataLista}
        title={data}
        descriptionStyle={styles.descricaoLista}
        description={categoria}

        left={()=><Avatar.Image
            size={30}
            source={require('../../../assets/despesa.png')}
            style={styles.avatarDespesa}
        />}

        right={()=><Text style={styles.valorLista}>R$ -{valor}</Text> }
    /></View>
);

const styles = StyleSheet.create({
    valorLista: {
        color: '#DD0000',
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
        height:50,
        justifyContent: 'center',
    },
    flatlistContainer: {
        paddingTop: 50,
        flex: 1,
        //backgroundColor: '#101010',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    flatlistCabecalho:{
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
        flex:1, 
        //backgroundColor: '#202020',
        justifyContent: 'flex-start',
        bottom: 50
    },
    perfil: {
        flexDirection:'row'
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