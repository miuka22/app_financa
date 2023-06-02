import { useState } from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
////import TelaEsqueceu from '../TelaEsqueceu';

function TelaEsqueceu({navigation}) {
    const [email, setEmail]= useState('')
    const [senha ,setSenha]= useState('')

  return (
    <View style={styles.Conteiner}>
    <View style={styles.Logo}>
        <Text style={styles.LogoTitle}>MONEY MIND</Text>
    </View>

    <View style={styles.conteinerForm}>
        <View style={styles.TextInput} > 
            <TextInput
                style={styles.textForm}
                placeholderTextColor={'#000000'}
                placeholder="Email cadastrado"
                onChange={text=>
                setEmail(text)}/>
            <TextInput
                style={styles.textForm}
                placeholderTextColor={'#000000'}
                placeholder="Nome Usuario"
                onChange={text=>
                setSenha(text)}/>
        <TouchableOpacity onPress={()=>navigation.navigate('TelaLogin')}>
        <Text style={styles.btVolta}>Voltar para tela de login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btEnvia} onPress={()=>navigation.navigate('')}>
        <Text style={styles.EnviaEmail}>Enviar Email</Text>
      </TouchableOpacity>
      
        </View>
        
  </View>
  </View>

  )
}
export default TelaEsqueceu;
const styles = StyleSheet.create({
Conteiner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    backgroundColor:'#7B68EE',
    
},
Logo:{
    
    color: '#0A0541',
    alignItems:'center',
    textAlign: 'center',
    justifyContent: 'center',
},
LogoTitle:{
    color:'#ffff',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize:43,
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
btVolta:{
    width: 306,
    height: 50,
    paddingHorizontal: 12,
    color:'#000000',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
},
btEnvia:{
    width: 150,
    height: 50,
    backgroundColor:'#ffffff',
    borderRadius:11,
    justifyContent:'center',
    alignItems:'center'

},
EnviaEmail:{
    fontSize:22,
    fontWeight:700,
    color:'#7B68EE'
},
})