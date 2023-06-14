import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { useFonts } from 'expo-font'

function TelaReceita({navigation}) {
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
                <View style={styles.novaReceita}>
                    
                    <Text style={styles.txt24sb}>
                        Nova Receita 
                    </Text>
                </View>
                <View style={styles.valor}>
                    <Text style={styles.txt25bk}>
                      Valor
                    </Text>
                    <Text style={styles.txt28sb}>
                      R$: 0,00
                    </Text>
                    <Image
                        source={require('../../../assets/lapis.png')}
                        style={styles.iconlapis}
                        ></Image>
                </View>
            </View>
            <View style={styles.formInput}>
                </View>            
                
                
                <View style={styles.barraInferior}>
                <Pressable onPress={()=>navigation.navigate('TelaPrincipal')} style={styles.botaoNav}>
                    <Image
                        source={require('../../../assets/homeOff.png')}
                        style={styles.iconInferior}
                    />
                    <Text style={styles.txt12r}>Principal</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('TelaReceita')} style={styles.botaoNav}>
                    <Image
                        source={require('../../../assets/receitaOff.png')}
                        style={styles.iconInferior}
                    />
                    <Text style={styles.txt12b}>Receita</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('TelaDespesa')} style={styles.botaoNav}>
                    <Image
                        source={require('../../../assets/despesaOff.png')}
                        style={styles.iconInferior}
                    />
                    <Text style={styles.txt12b}>Despesa</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    barraSuperior:{
        backgroundColor: '#7B68EE',
        height: 160,
    },
    novaReceita:{
        paddingHorizontal: 20,
        top: 20,
        flexDirection: 'row',
        
    },
    valor:{
        height: 50,
        paddingHorizontal:30,
        top:30,
    },
    txt25bk:{
        color: '#FFFFFF',
        fontSize: 25,
        fontFamily: 'SourceSansProBold',
        alignItems: 'flex-end'
        //backgroundColor: '#101010',
        ///alignItems: 'baseline'
    },
    txt12b:{
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'SourceSansProBold',
        paddingTop: 6,
    },
    txt24sb:{
        color: '#FFFFFF',
        fontSize: 35,
        fontFamily: 'SourceSansProSemiBold',
        alignItems: 'center',
        
    },
    txt28sb:{
        color: '#ffffff',
        fontSize: 28,
        fontFamily: 'SourceSansProSemiBold',
        ///paddingHorizontal:30
        
    },
    txt12r:{
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'SourceSansProRegular',
        paddingTop: 6,
    },
    iconlapis:{
        height: 25,
        width: 25,
        ///paddingHorizontal:20,
        flexDirection:'row',
        justifyContent: 'flex-end',
        left:300,
        top:35,
        position: 'absolute',
        
        
        
    },
    fundo:{
        flex: 1,
        justifyContent: 'space-between',
    },
    botaoNav: {
        alignItems: 'center',
        paddingVertical: 16,
        width: 60,
    },
    iconInferior:{
        height: 27,
        width: 27,
    },
    barraInferior:{
        alignItems: 'center',
        backgroundColor: '#7B68EE',
        height: 65,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
})

export default TelaReceita;