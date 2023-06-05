import { Text, View, Image, StyleSheet } from "react-native"


function TelaPrincipal({navigation}) {
    return(
        <View>
            <View style={styles.barraSuperior}>
                <View style={styles.perfil}>
                    <Image
                        source={require('../../../assets/iconPerfil.png')}
                        style={styles.iconPerfil}
                    ></Image>
                    <Text style={styles.txtI}>
                        Olá, Emily
                    </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    barraSuperior:{
        backgroundColor: '#7B68EE',
        height: 200,
    },
    perfil:{
        backgroundColor: '#505050',
        paddingHorizontal: 40,
        top: 50
    },
    txtI:{
        color: '#FFFFFF',
        fontSize: 24,
        
    },
    iconPerfil:{
        height: 30,
        width: 30,
    },
})

export default TelaPrincipal;