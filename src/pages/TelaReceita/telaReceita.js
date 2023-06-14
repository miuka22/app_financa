import { View, Text, StyleSheet } from "react-native" 
import { useFonts } from 'expo-font'


function TelaReceita() {
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
                    
                    <Text style={styles.txt24sb}>
                        Nova Receitas
                    </Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.txt25bk}>
                      Valor
                    </Text>
                    <Text style={styles.txt28sb}>
                      R$: 205,11
                    </Text>
                </View>

                </View>
                </View>

        </View>
            <View style={styles.barraInferior}>
                <Pressable onPress={()=>navigation.navigate('TelaPrincipal')} style={styles.botaoNav}>
                    <Image
                        source={require('../../../assets/homeOff.png')}
                        style={styles.iconInferior}
                    />
                    <Text style={styles.txt12r}>Principal</Text>
                </Pressable>
                <Pressable style={styles.botaoNav}>
                    <Image
                        source={require('../../../assets/receitaOn.png')}
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
const styles=StyleSheet.create({
    barraSuperior:{
        backgroundColor: '#7B68EE',
        height: 200,
    },
    title:{
        height:100,
        paddingHorizontal:40,
        top:75

    },

    txt24sb:{
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:40,
        fontFamily: 'SourceSansProBlack',
        fontSize: 24,
        color:'#fff',
    }

})

export default TelaReceita