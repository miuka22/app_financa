import { useState } from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';
import api from '../../api'
import styles from '../../Styles/stylesTelaLogin'
import axios from 'axios'


function TelaLogin({navigation}) {

  const {height, width} = useWindowDimensions();
  const [email, setEmail]= useState('')
  const [senha ,setSenha]= useState('')
  
  async function buscarLogin(){
    const response = await axios.post('http://10.220.30.22:7878/entrar/', {
      email: email,
      senha: senha
    })
    console.log(response.data)
    if (response.data.retorno == 'correto') {
      navigation.navigate('TelaPrincipal')
    }
  }

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
                placeholder="Email"
                inputMode='email'
                onChangeText={text=>
                setEmail(text)}/>
            <TextInput
                placeholderTextColor={'#000000'}
                style={styles.textForm}
                placeholder="Senha"
                inputMode='text' 
                onChangeText={text=>
                setSenha(text)}/>

        <TouchableOpacity onPress={()=>navigation.navigate('TelaEsqueceu')}>
        <Text style={styles.btRecuSenha}>recuperar senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btEntrar} onPress={
        // ()=>navigation.navigate('TelaPrincipal')
        buscarLogin
      }>
        <Text style={styles.Entrar}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('TelaCadastro')}>
                <Text style={styles.criarConta}>cria uma conta</Text>
      </TouchableOpacity>
        </View>
        
  </View>

  )
}
export default TelaLogin;
