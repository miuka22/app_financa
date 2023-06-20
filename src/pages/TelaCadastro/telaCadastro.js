import { useState } from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native'
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
const styles = StyleSheet.create({
Conteiner:{
  flex:2,
  alignContent:'center',
  backgroundColor:'#423880'

},
barraSuperior:{
  backgroundColor:'#BBB2F0',
  height: 100,
  padding:10,
  alignItems:'flex-start',
},
textTitle:{

},
form:{
  alignItems:'center',
  justifyContent:'center',
  flex:1,
  marginBottom:250,
  paddingHorizontal:12, 
},
formTxt:{
  width: 350,
  padding:5,
  paddingHorizontal:12
},
TextInput:{
  width: 350,
  height: 50,
  fontSize: 16,
  backgroundColor: '#BAB2ED',
  marginVertical: 5,
  borderRadius: 11,
  padding: 12,
  alignContent:'center',

}
})
export default TelaCadastro;