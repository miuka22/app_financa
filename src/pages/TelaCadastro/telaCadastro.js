import { useState } from 'react';
import {View,Text,TextInput,StyleSheet, Pressable} from 'react-native';
import styles from '../../Styles/stylesTelaCadastro';
import axios from 'axios'
import { CheckBox } from '@rneui/themed';
import Termo from '../../Componente/TermoDeUso'


function TelaCadastro() {
  const [nomeUsuario,setnameUsuario]=useState('')
  const [email,setEmail]= useState ('')
  const [senha,setSenha]= useState ('')
  const [repitirSenha,setRepitirSenha]= useState ('')
  const [termo,setTermo]= useState(false)

  async function validarCadastro(){
    // const response = await axios.post('http://192.168.0.117:7878/cadastrar/', {
    //   email: email,
    //   nome: nomeUsuario,
    //   senha: senha,
    //   termo: true
    // })
    // console.log(response);
  }

  return (

    <View style={styles.Conteiner}>
    <View style={styles.Logo}>
      <Text style={styles.LogoTitle}>MONEY MIND</Text>
      <Text style={styles.textTitle}>Cadastro</Text>
    </View>
      
      <View style={styles.form}>
        <Text style={styles.formTxt}>Nome completo</Text>
       <TextInput
       placeholderTextColor={'#000000'}
       style={styles.TextInput}
       placeholder='nome completo'
       onChangeText={text=>
        setnameUsuario(text)}
       />
          <Text style={styles.formTxt}>E-mail</Text>
       <TextInput
       placeholderTextColor={'#000000'}
       style={styles.TextInput}
       placeholder='Email'
       onChangeText={text=>
        setEmail(text)}
        />
          <Text style={styles.formTxt}>Senha</Text>
       <TextInput
       placeholderTextColor={'#000000'}
       style={styles.TextInput}
       placeholder='Senha'
       onChangeText={text=>
        setSenha(text)}
        />
           <Text style={styles.formTxt}>Confirme a senha</Text>
       <TextInput
       placeholderTextColor={'#000000'}
       style={styles.TextInput}
       placeholder='Confirme a senha'
       onChangeText={text=>
        setRepitirSenha(text)}
        />
        <View style={styles.areaCheck}>
          <CheckBox
            center
            checked={termo}
            size={20}
            onPress={() => {setTermo(!termo)}}
            checkedColor='#ffffff'
            containerStyle={styles.check}
          />
          <Termo/>
        </View>
        <Pressable
          onPress={validarCadastro}
        ><Text>VALIDAR</Text></Pressable>
          
      </View>
    </View>
    
        
  );
}

export default TelaCadastro;