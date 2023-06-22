import { useState } from "react"
import { View, Text, StyleSheet, Pressable, Image } from "react-native"
import { Portal, Modal } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"

function Calendario() {
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false)

    const abrirModal = () => setVisible(true)
    const fecharModal = () => setVisible(false)

    

    return (
        <View>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={fecharModal}
                    style={styles.menuModal}
                >
                    <View style={styles.conteiner}>
                        <View style={styles.calendario}>

                        </View>
                        <View style={styles.localBotoes}>

                        </View>
                    </View>
                </Modal>
            </Portal>
            <Pressable onPress={abrirModal}>
                <Image style={styles.menu} source={require('../../assets/menu.png')}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    menuModal: {
        justifyContent:'center',
        alignItems: 'center',
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
    txt16b: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'SourceSansProBold',
    },
    conteiner: {
        height: 250,
        width: 250,
        backgroundColor: '#505050'
    },
})

export { Calendario }