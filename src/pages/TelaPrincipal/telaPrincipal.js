
import { Text, View, Image, StyleSheet, Pressable, Animated } from "react-native"
import { useFonts } from 'expo-font'
import { BarraInferiorPrincipal } from '../../Componente/BarraInferior'
import { MenuSup } from '../../Componente/Menu'
import { USER } from '../../DATA/usuario'

function TelaPrincipal({ navigation }) {
    const [loaded] = useFonts({
        SourceSansProBlack: require('../../../assets/fonts/SourceSansPro-Black.ttf'),
        SourceSansProBold: require('../../../assets/fonts/SourceSansPro-Bold.ttf'),
        SourceSansProSemiBold: require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
        SourceSansProRegular: require('../../../assets/fonts/SourceSansPro-Regular.ttf')
    })

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
                        Olá, {USER.nome.primeiroNome}
                    </Text>
                    </View>
                    <MenuSup/>
                </View>
                <View style={styles.flatlistConteiner}></View>
                <View style={styles.saldo}>
                    <Text style={styles.txt25bk}>
                        Saldo em conta
                    </Text>
                    <Text style={styles.txt28sb}>
                        R$: 205,11
                    </Text>
                </View>
            </View>
            <BarraInferiorPrincipal/>
        </View>
    )
}

const styles = StyleSheet.create({
    flatlistConteiner: {
        backgroundColor: '#505050',
        flex: 1
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