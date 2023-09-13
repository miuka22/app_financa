import { useState } from "react"
import { View, Text, StyleSheet, Pressable, Image } from "react-native"
import { Portal, Modal } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"

function Termo() {
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
                <View style={styles.menuConteudo}>
                    <Text style={styles.txt}>
                        
Ao utilizar nosso aplicativo Money Mind, você concorda que coletamos e armazenamos seu nome e e-mail com a finalidade exclusiva de verificar sua identidade ao entrar no aplicativo e para auxiliar na recuperação da senha, caso necessário. Essas informações são essenciais para garantir a segurança de sua conta e para fornecer a você acesso seguro aos recursos e serviços financeiros oferecidos pelo aplicativo.

Garantimos que seus dados pessoais serão armazenados de forma segura em nossos servidores, protegidos por medidas adequadas para prevenir o acesso não autorizado, uso indevido ou divulgação. Seus dados serão mantidos em nosso sistema somente pelo tempo necessário para cumprir a finalidade de verificação da identidade e recuperação de senha, conforme exigido por lei.

Apenas membros autorizados de nossa equipe terão acesso aos seus dados pessoais, estritamente limitado àqueles que precisam realizar as verificações de identidade e auxiliar na recuperação da senha. Esses membros estão sujeitos a obrigações de confidencialidade e utilizarão seus dados apenas para os fins previstos neste termo de uso.

Nós não compartilharemos seus dados pessoais com terceiros, exceto quando exigido por lei ou quando você fornecer consentimento expresso para tal compartilhamento. Comprometemo-nos a não vender, alugar ou negociar seus dados pessoais com qualquer outra organização, empresa ou indivíduo.

De acordo com a legislação aplicável à proteção de dados pessoais, você possui o direito de acessar, corrigir ou excluir suas informações pessoais armazenadas em nosso aplicativo. Se desejar exercer esses direitos ou tiver dúvidas sobre o processamento de seus dados pessoais, entre em contato conosco por meio dos canais de suporte fornecidos no aplicativo.

Reservamos o direito de atualizar ou modificar este termo de uso, se necessário. Quaisquer alterações serão comunicadas a você por meio de notificação no aplicativo ou por e-mail. Ao continuar a utilizar o aplicativo após tais alterações, você concorda em estar vinculado à versão atualizada do termo de uso.

                    </Text>
                </View>
            </Modal>
        </Portal>
        <Pressable onPress={abrirModal}>
           <Text>Eu li e aceito os termos de uso
           </Text>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    menuModal: {
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal:70,
        paddingVertical: 150
    },
    menuConteudo: {
        backgroundColor: '#ffffff',
        padding:8,
        flex: 1,
    },
    txt: {
        color: '#000',
        fontSize: 16,
    },
})

module.exports = Termo