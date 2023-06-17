import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { useFonts } from 'expo-font'
import { BarraInferiorReceita } from "../../Componente/BarraInferior"

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
                
                
                <BarraInferiorReceita/>
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
})

export default TelaReceita;