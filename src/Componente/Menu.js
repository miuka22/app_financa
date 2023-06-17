import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Portal, Modal } from "react-native-paper";
import { useState } from "react"


function MenuSup() {
    const [visible, setVisible] = useState(false)

    const abrirModal = () => setVisible(true)
    const fecharModal = () => setVisible(false)

    return (
        <View>
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
                <Image style={styles.menu} source={require('../../assets/menu.png')}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

})

export { MenuSup }