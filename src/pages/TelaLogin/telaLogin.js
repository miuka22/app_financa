import { useState } from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';
import styles from '../../Styles/stylesTelaLogin'


function TelaLogin({navigation}) {
    const {height, width} = useWindowDimensions();
    const [email, setEmail]= useState('')
    const [senha ,setSenha]= useState('')
    
    return (
   
    <View style={{
        flex:1,
        ///height: height,
        justifyContent:'center',
        alignItems:'center',
       ///alignContent:'center',
        backgroundColor:'#423880',
    }}>
    <View style={styles.Logo}>
        <Text style={styles.LogoTitle}>MONEY MIND</Text>
    </View>

        <View style={styles.TextInput} > 
            <TextInput
                placeholderTextColor={'#000000'}
                style={styles.textForm}
                placeholder="Email ou nome de usuario"
                onChange={text=>
                setEmail(text)}/>
            <TextInput
                placeholderTextColor={'#000000'}
                style={styles.textForm}
                placeholder="Senha"
                onChange={text=>
                setSenha(text)}/>

        <TouchableOpacity onPress={()=>navigation.navigate('TelaEsqueceu')}>
        <Text style={styles.btRecuSenha}>recuperar senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btEntrar} onPress={()=>navigation.navigate('TelaPrincipal')}>
        <Text style={styles.Entrar}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('TelaCadastro')}>
                <Text style={styles.criarConta}>Cria uma Conta</Text>
      </TouchableOpacity>
        </View>
        
  </View>

  )
}
export default TelaLogin;
