import { Text, View, Image, StyleSheet, Pressable, Animated } from "react-native"
import { Button, Portal, Modal, PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font'
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context";

function TelaPrincipal({ navigation }) {
    const [loaded] = useFonts({
        SourceSansProBlack: require('../../../assets/fonts/SourceSansPro-Black.ttf'),
        SourceSansProBold: require('../../../assets/fonts/SourceSansPro-Bold.ttf'),
        SourceSansProSemiBold: require('../../../assets/fonts/SourceSansPro-SemiBold.ttf'),
        SourceSansProRegular: require('../../../assets/fonts/SourceSansPro-Regular.ttf')
    })
    const [visible, setVisible] = useState(false)

    const abrirModal = () => setVisible(true)
    const fecharModal = () => setVisible(false)

    if (!loaded) {
        return null
    }

    return (

        <PaperProvider>
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
                        <Portal>
                            <Modal visible={visible} onDismiss={fecharModal}
                            style={styles.menuModal}
                            >
                                <View style={styles.menuConteudo}>
                                    <Pressable style={styles.menuItem}><Text style={styles.txt16b}>Perfil</Text></Pressable>
                                </View>
                                <View style={styles.menuConteudo}>
                                    <Pressable onPress={()=>navigation.navigate('TelaLogin')} style={styles.menuItem}><Text style={styles.txt16b}>Sair</Text></Pressable>
                                </View>
                                <View style={styles.menuConteudo}>
                                    <Pressable style={styles.menuItem}><Text style={styles.txt16b}>Termos de uso</Text></Pressable>
                                </View>
                            </Modal>
                        </Portal>
                        <Pressable onPress={abrirModal}>
                            <Image style={styles.menu} source={require('../../../assets/menu.png')}/>
                        </Pressable>
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
                <Pressable onPress={() => navigation.navigate('TelaReceita')} style={styles.botaoNav}>
                    <Image
                        source={require('../../../assets/receitaOff.png')}
                        style={styles.iconInferior}
                    />
                    <Text style={styles.txt12r}>Receita</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('testes')} style={styles.botaoNav}>
                    <Image
                        source={require('../../../assets/despesaOff.png')}
                        style={styles.iconInferior}
                    />
                    <Text style={styles.txt12r}>Despesa</Text>
                </Pressable>
            </View>
        </View>
                    </PaperProvider>
    )
}

const styles = StyleSheet.create({
    menuModal: {
        justifyContent:'flex-start',
        alignItems: 'flex-end',
    },
    menuConteudo: {
        backgroundColor: '#9485EE',
        width:139,
        height:51,
        alignItems:'flex-end',
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6252BA',
        height: 49,
        width: 137,
    },
    perfil: {
        flexDirection:'row'
    },
    barraSuperior: {
        backgroundColor: '#7B68EE',
        height: 200,
    },
    menu: {
        height: 20,
        width: 30,
    },
    faixaUm: {
        top: 50,
        paddingHorizontal: 40,
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
        //backgroundColor: '#101010',
        alignItems: 'baseline'
    },
    txt12b: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'SourceSansProBold',
        paddingTop: 6,
    },
    txt16b: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'SourceSansProBold',
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
        flex: 1,
        justifyContent: 'space-between',
    },
    botaoNav: {
        alignItems: 'center',
        paddingVertical: 16,
        width: 60,
    },
    iconInferior: {
        height: 25,
        width: 25,
    },
    barraInferior: {
        alignItems: 'center',
        backgroundColor: '#7B68EE',
        height: 80,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
})

export default TelaPrincipal;