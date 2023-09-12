import { useState } from 'react';
import {View,Text,TextInput,StyleSheet, Pressable} from 'react-native';
import styles from '../../Styles/stylesTelaCadastro';
import axios from 'axios'

function TelaCadastro() {
  const [nomeUsuario,setnameUsuario]=useState('')
  const [email,setEmail]= useState ('')
  const [senha,setSenha]= useState ('')
  const [repitirSenha,setRepitirSenha]= useState ('')

  async function validarCadastro(){
    const response = await axios.post('http://10.220.30.22:7878/cadastrar/', {
      email: email,
      nome: nomeUsuario,
      senha: senha,
      termo: true
    })
    console.log(response);
  }

  return (

      <View style={styles.Conteiner}>
      <View style={styles.barraSuperior}>
        <Text style={styles.textTitle}>Cadastra-se!</Text>
        <Text style={styles.textSecu}>Crie sua conta para acessar o aplicativo </Text>

      </View>
      <View style={styles.form}>
        <Text style={styles.formTxt}>Nome do usuario</Text>
       <TextInput
       style={styles.TextInput}
       placeholder='nome do usuario'
       onChangeText={text=>
        setnameUsuario(text)}
       />
          <Text style={styles.formTxt}>E-mail</Text>
       <TextInput
       style={styles.TextInput}
       placeholder='Email'
       onChangeText={text=>
        setEmail(text)}
        />
          <Text style={styles.formTxt}>Senha</Text>
       <TextInput
       style={styles.TextInput}
       placeholder='Senha'
       onChangeText={text=>
        setSenha(text)}
        />
           <Text style={styles.formTxt}>Confirme a senha</Text>
       <TextInput
       style={styles.TextInput}
       placeholder='Confirme a senha'
       onChangeText={text=>
        setRepitirSenha(text)}
        />
        <Pressable
          onPress={validarCadastro}
        ><Text>VALIDAR</Text></Pressable>
          
      </View>
      </View>
    
        
  );
}

export default TelaCadastro;