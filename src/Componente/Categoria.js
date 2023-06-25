import { useState } from "react"
import { useFonts } from 'expo-font'
import { View, Text, StyleSheet, Pressable, Image } from "react-native"
import { Portal, Modal } from "react-native-paper"

function Categoria() {
    const [visible, setVisible] = useState(false)
    const abrirModal = ()=> setVisible(true)
    const fecharModal = ()=> setVisible(false)
    const [loaded] = useFonts({
        SourceSansProSemiBold: require('../../assets/fonts/SourceSansPro-SemiBold.ttf'),
    })
    const valorFixo = () => {
        setCatSelecionada('Valor Fixo')
        fecharModal()
    }
    const valorVariavel = () => {
        setCatSelecionada('Valor Variavel')
        fecharModal()
    }
    const [catSelecionada, setCatSelecionada] = useState('Categoria')
    if (!loaded) {
        return null
    }


    return(
        <View>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={fecharModal}
                    style={styles.menuModal}
                >
                    <View style={styles.menuConteudo}>
                        <Pressable onPress={valorFixo} style={styles.menuItem}><Text style={styles.txt24sb}>
                        Valores Fixos</Text></Pressable>
                        <Pressable onPress={valorVariavel} style={styles.menuItem}><Text style={styles.txt24sb}>
                        Valores Variáveis</Text></Pressable>
                    </View>
                </Modal>
            </Portal>
            <Pressable style={styles.btnCategoria} onPress={abrirModal}>
                <Text style={styles.txt24sb}>{catSelecionada}</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    menuModal: {
        alignItems: 'center',
    },
    menuConteudo: {
        backgroundColor: '#9485EE',
        width:350,
        height:100,
        padding: 2
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6252BA',
        height: 46,
        width: 346,
        marginBottom: 4
    },menu: {
        height: 20,
        width: 30,
    },
    btnCategoria: {
        borderRadius:  11,
        height: 50,
        width: 350,
        backgroundColor: '#423880',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt24sb: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'SourceSansProSemiBold',
    },
})
export { Categoria }