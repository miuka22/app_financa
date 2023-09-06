import { useState } from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';
import styles from '../../Styles/stylesTelaCadastro';
function TelaCadastro() {
  const [nameUsuario,setnameUsuario]=useState('')
  const [email,setEmail]= useState ('')
  const [senha,setSenha]= useState ('')
  const [repitirSenha,setRepitirSenha]= useState ('')

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
       onChange={text=>
        setnameUsuario(nameUsuario)}
       />
          <Text style={styles.formTxt}>E-mail</Text>
       <TextInput
       style={styles.TextInput}
       placeholder='Email'
       onChange={text=>
        setEmail(email)}
        />
          <Text style={styles.formTxt}>Senha</Text>
       <TextInput
       style={styles.TextInput}
       placeholder='Senha'
       onChange={text=>
        setSenha(senha)}
        />
           <Text style={styles.formTxt}>Confirme a senha</Text>
       <TextInput
       style={styles.TextInput}
       placeholder='Confirme a senha'
       onChange={text=>
        setRepitirSenha(repitirSenha)}
        />
          
      </View>
      </View>
    
        
  );
}

export default TelaCadastro;