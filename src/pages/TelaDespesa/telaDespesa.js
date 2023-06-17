import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { useFonts } from 'expo-font'
import { BarraInferiorDespesa } from "../../Componente/BarraInferior"

function TelaDespesa({navigation}) {
    const [loaded] = useFonts ({
      SourceSansProBlack: require('../../../assets/fonts/SourceSansPro-Black.ttf'),
      SourceSansProBold: require('../../../assets/fonts/SourceSansPro-Bold.ttf'),
      SourceSansProSemiBold: require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
      SourceSansProRegular: require('../../../assets/fonts/SourceSansPro-Regular.ttf')
    })
    if(!loaded){
      return null
    }

    return(
        <View style={styles.fundo}>
            <View style={styles.barraSuperior}>
                <View style={styles.perfil}>
                    <Image
                        source={require('../../../assets/iconPerfil.png')}
                        style={styles.iconPerfil}
                    ></Image>
                    <Text style={styles.txt24sb}>
                        tela de despesaOff
                    </Text>
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
            <BarraInferiorDespesa/>
        </View>
    )
}

const styles = StyleSheet.create({
    barraSuperior:{
        backgroundColor: '#7B68EE',
        height: 200,
    },
    perfil:{
        paddingHorizontal: 40,
        top: 50,
        flexDirection: 'row',
    },
    saldo:{
        //backgroundColor: '#505050',
        height: 100,
        paddingHorizontal:40,
        top:75
    },
    txt25bk:{
        color: '#FFFFFF',
        fontSize: 25,
        fontFamily: 'SourceSansProBlack',
        //backgroundColor: '#101010',
        alignItems: 'baseline'
    },
    txt12b:{
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'SourceSansProBold',
        paddingTop: 6,
    },
    txt24sb:{
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'SourceSansProSemiBold',
        paddingHorizontal: 10,
    },
    txt28sb:{
        color: '#ffffff',
        fontSize: 28,
        fontFamily: 'SourceSansProSemiBold',
        paddingHorizontal:30
    },
    txt12r:{
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'SourceSansProRegular',
        paddingTop: 6,
    },
    iconPerfil:{
        height: 30,
        width: 30,
    },
    fundo:{
        flex: 1,
        justifyContent: 'space-between',
    },
})

export default TelaDespesa;