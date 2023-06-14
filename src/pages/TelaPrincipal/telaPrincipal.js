import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { useFonts } from 'expo-font'

function TelaPrincipal({navigation}) {
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
                <View style={styles.faixaUm}>
                    <View style={styles.menu}>

                    </View>
                        </View>
                    <View style={styles.perfil}>
                        <Image
                            source={require('../../../assets/iconPerfil.png')}
                            style={styles.iconPerfil}
                            ></Image>
                        <Text style={styles.txt24sb}>
                            Olá, Emily
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
            <View style={styles.barraInferior}>
                <Pressable style={styles.botaoNav}>
                    <Image
                        source={require('../../../assets/homeOn.png')}
                        style={styles.iconInferior}
                    />
                    <Text style={styles.txt12b}>Principal</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('TelaReceita')} style={styles.botaoNav}>
                    <Image
                        source={require('../../../assets/receitaOff.png')}
                        style={styles.iconInferior}
                    />
                    <Text style={styles.txt12r}>Receita</Text>
                </Pressable>

                <Pressable onPress={()=>navigation.navigate('TelaReceita')} style={styles.botaoNav}>
                <Pressable onPress={()=>navigation.navigate('TelaDespesa')} style={styles.botaoNav}>

                    <Image
                        source={require('../../../assets/despesaOff.png')}
                        style={styles.iconInferior}
                    />
                    <Text style={styles.txt12r}>Despesa</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    botaoNav: {
        alignItems: 'center',
        paddingVertical: 16,
        width: 60,
    },
    iconInferior:{
        height: 28,
        width: 28,
    },
    barraInferior:{
        alignItems: 'center',
        backgroundColor: '#7B68EE',
        height: 82,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    barraSuperior:{
        backgroundColor: '#7B68EE',
        height: 200,
    },
    faixaUm: {
        top: 50,
        paddingHorizontal: 40,
        alignItems: 'flex-end',
    },
    menu: {
        height: 20,
        width: 30,
        backgroundColor: '#FFFFFF'
    },
    perfil:{
        top: 50,
        paddingHorizontal: 40,
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

export default TelaPrincipal;