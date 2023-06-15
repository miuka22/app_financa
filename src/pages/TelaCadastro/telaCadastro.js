import { useState } from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native'
function TelaCadastro() {
  const [nameUsuario,setnameUsuario]=useState('')
  const [email,setEmail]= useState ('')
  const [senha,setSenha]= useState ('')
  const [repitirSenha,setRepitirSenha]= useState ('')

  return (
    <View style={styles.Conteiner}>
    <View style={styles.ConteinerText}>
        <Text style={styles.textTitle}>Cadastra-se!</Text>
        <Text style={styles.textSecu}>Crie sua conta para acessar o aplicativo</Text>
</View>
    <View style={styles.textForm}>
          <TextInput
          style={styles.TextInput}
          placeholder=''
          onChange={text=>
          setEmail(text)}
          Value={email}/>
          
  </View>

    
    
        
  </View>
  );
}
const styles = StyleSheet.create({
Conteiner:{
  flex:1,
  backgroundColor:'#423880',
},
ConteinerText:{
  height:100,
  width:600,
  backgroundColor:'#BBB2F0',
  paddign: 10,
  marginVertical:11,
  paddingHorizontal:10,
  

},
textTitle:{
  color:'#1A1633',
  ///fontStyle: 'normal',
  //fontWeight: 700,
  fontSize:30,
  //marginVertical:20,
  paddingVertical:2,
},
textSecu:{
  color:'#1A1633',
  paddingVertical:5,
  fontSize:18
},
TextInput:{
  backgroundColor:'#fff',
  height:50
}

})
export default TelaCadastro;