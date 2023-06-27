import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"

function BarraInferiorPrincipal() {
    const navigation = useNavigation()

    return(
        <View style={styles.barraInferior}>
            <Pressable style={styles.botaoNav}>
                <Image
                    source={require('../../assets/homeOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12b}>Principal</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('TelaReceita')} style={styles.botaoNav}>
                <Image
                    source={require('../../assets/receitaOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12r}>Receita</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('TelaDespesa')} style={styles.botaoNav}>
                <Image
                    source={require('../../assets/despesaOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12r}>Despesa</Text>
            </Pressable>
        </View>
    )
}

function BarraInferiorReceita() {
    const navigation = useNavigation()

    return(
        <View style={styles.barraInferior}>
            <Pressable onPress={() => navigation.navigate('TelaPrincipal')} style={styles.botaoNav}>
                <Image
                    source={require('../../assets/homeOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12r}>Principal</Text>
            </Pressable>
            <Pressable style={styles.botaoNav}>
                <Image
                    source={require('../../assets/receitaOn.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12b}>Receita</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('TelaDespesa')} style={styles.botaoNav}>
                <Image
                    source={require('../../assets/despesaOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12r}>Despesa</Text>
            </Pressable>
        </View>
    )
}

function BarraInferiorDespesa() {
    const navigation = useNavigation()

    return(
        <View style={styles.barraInferior}>
            <Pressable onPress={() => navigation.navigate('TelaPrincipal')} style={styles.botaoNav}>
                <Image
                    source={require('../../assets/homeOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12r}>Principal</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('TelaReceita')} style={styles.botaoNav}>
                <Image
                    source={require('../../assets/receitaOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12r}>Receita</Text>
            </Pressable>
            <Pressable style={styles.botaoNav}>
                <Image
                    source={require('../../assets/despesaOn.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12b}>Despesa</Text>
            </Pressable>
        </View>
    )
}

function BarraInferior() {
    const navigation = useNavigation()
    
    return(
        <View style={styles.barraInferior}>
            <Pressable onPress={() => navigation.navigate('TelaPrincipal')} style={styles.botaoNav}>
                <Image
                    source={require('../../assets/homeOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12r}>Principal</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('TelaReceita')} style={styles.botaoNav}>
                <Image
                    source={require('../../assets/receitaOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12r}>Receita</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('TelaDespesa')} style={styles.botaoNav}>
                <Image
                    source={require('../../assets/despesaOff.png')}
                    style={styles.iconInferior}
                />
                <Text style={styles.txt12r}>Despesa</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    barraInferior: {
        alignItems: 'center',
        backgroundColor: '#423880',
        height: 80,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
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
    txt12b: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'SourceSansProBold',
        paddingTop: 6,
    },
    txt12r: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'SourceSansProRegular',
        paddingTop: 6,
    },
})

export { BarraInferiorPrincipal, BarraInferiorReceita, BarraInferiorDespesa, BarraInferior}