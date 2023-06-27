
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
    const userData = Object.values(USER.historico)

    useEffect( () => {
        (async () => {
        const {data:HISTORICO} = await axios.get('http://localhost:3000/despesas'
        ).then((res) => res)
        setHistorico(HISTORICO)
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
                        Olá, {`${historico[1]?.dataDespesa} ${USER.historico[2].valor}`}
                    </Text>
                    </View>
                    <MenuSup/>
                </View>
                <View style={styles.saldo}>
                    <Text style={styles.txt25bk}>
                        Saldo em conta
                    </Text>
                    <Text style={styles.txt28sb}>
                        R$: 205,11
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
                                data={item.data}
                                categoria={item.categoria}
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
    <List.Item 
        style={styles.listaContainer}
        title={data}
        description={categoria}
    />
);

const styles = StyleSheet.create({
    listaContainer: {
        //backgroundColor: '#404040',
        width: 350,
        height:50,
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
        flex:1, 
        //backgroundColor: '#202020',
        justifyContent: 'flex-start',
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