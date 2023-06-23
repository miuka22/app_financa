import { useState } from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';


function TelaLogin({navigation}) {
    const {height, width} = useWindowDimensions();
    const [email, setEmail]= useState('')
    const [senha ,setSenha]= useState('')
    
    return (
    <View style={{
        height: height,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#423880',
    }}>
    <View style={styles.Logo}>
        <Text style={styles.LogoTitle}>MONEY MIND</Text>
    </View>

    <View style={styles.conteinerForm}>
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
        <Text style={styles.btSenha}>recuperar Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btEntrar} onPress={()=>navigation.navigate('TelaPrincipal')}>
        <Text style={styles.Entrar}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btCadastra}onPress={()=>navigation.navigate('TelaCadastro')}>
                <Text style={styles.criarConta}>Cria uma Conta</Text>
      </TouchableOpacity>
        </View>
        
  </View>
  </View>

  )
}
export default TelaLogin;
const styles = StyleSheet.create({
// Conteiner:{
//     height: height,
//     justifyContent:'center',
//     alignItems:'center',
//     alignContent:'center',
//     backgroundColor:'#7B68EE',
    
// },
Logo:{
    
    alignItems:'center',
    justifyContent: 'center',
},
LogoTitle:{
    color:'#ffff',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize:43,
    marginVertical:20
},
conteinerForm:{
    width: 350,
    height: 287,
},
TextInput:{
    alignItems: 'center',
    justifyContent: 'center',
},
textForm:{
    ///estilo da fonte
    width: 300,
    height: 50,
    fontSize: 16,
    backgroundColor: '#BAB2ED',
    marginVertical: 12.5,
    borderRadius: 11,
    padding: 12
},
btSenha:{
    width: 306,
    height: 50,
    paddingHorizontal: 12,
    color:'#000000',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
},
btEntrar:{
    width: 150,
    height: 50,
    backgroundColor:'#ffffff',
    borderRadius:11,
    justifyContent:'center',
    alignItems:'center'

},
Entrar:{
    fontSize:22,
    fontWeight:700,
    color:'#423880'
},
criarConta:{
    width: 150,
    height: 50,
    textAlign: 'center',
    marginVertical:12,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
}
})