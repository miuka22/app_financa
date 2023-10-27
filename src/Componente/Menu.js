import { useState } from "react"
import { View, Text, StyleSheet, Pressable, Image } from "react-native"
import { Portal, Modal } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"

function MenuSup() {
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false)

    const abrirModal = () => setVisible(true)
    const fecharModal = () => setVisible(false)

    const btnSair = () => {
        navigation.navigate('TelaLogin')
        fecharModal()
    }
    const btnPerfil = () => {
        navigation.navigate('TelaPerfil')
        fecharModal()
    }
    const btnTermosDeUso = () => {
        fecharModal()
    }

    return (
        <View>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={fecharModal}
                    style={styles.menuModal}
                >
                    <View style={styles.menuConteudo}>
                        <Pressable onPress={btnSair} style={styles.menuItem}><Text style={styles.txt16b}>Sair</Text></Pressable>
                    </View>
                </Modal>
            </Portal>
            <Pressable style={{ padding: 10 }} onPress={abrirModal}>
                <Image style={styles.menu} source={require('../../assets/menu.png')} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    menuModal: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    menuConteudo: {
        backgroundColor: '#9485EE',
        width: 139,
        height: 51,
        alignItems: 'flex-end',
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6252BA',
        height: 49,
        width: 137,
    },
    txt16b: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'SourceSansProBold',
    },
    menu: {
        height: 20,
        width: 30,
    },
})

export { MenuSup }
