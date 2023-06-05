import { useState } from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

function TelaEsqueceu({navigation}) {
    const [email, setEmail]= useState('')

  return (
    <View style={styles.Conteiner}>
    <View style={styles.Logo}>
        <Text style={styles.LogoTitle}>MONEY MIND</Text>
    </View>
<View style={styles.TextDelemSenha}>
    <Text style={styles.textSenha}>Esqueceu senha?</Text>
    <Text style={styles.textInfor}>
        Digite seu email para que possamos recuperá-la para você
    </Text>
</View>
    <View style={styles.conteinerForm}>
        <View style={styles.TextInput}>
            <TextInput
                style={styles.textForm}
                placeholderTextColor={'#000000'}
                placeholder="Digite o email cadastrado"
                onChange={text=>
                setEmail(text)}/>
        
        <TouchableOpacity onPress={()=>navigation.navigate('TelaLogin')}>
        <Text style={styles.btVolta}>Voltar para tela de login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btEnvia} onPress={()=>navigation.navigate('TelaEnviado')}>
        <Text style={styles.EnviaEmail}>Continua</Text>
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
    fontSize:25,
},
conteinerForm:{
    width: 350,
    height: 287
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
    padding: 12,

},
btVolta:{
    width: 306,
    height: 50,
    paddingHorizontal: 12,
    marginVertical:12.5,
    color:'#ffffff',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 20,
},
btEnvia:{
    width: 150,
    height: 40,
    borderRadius:11,
    justifyContent:'center',
    alignItems:'center',
    top:50

},
EnviaEmail:{
    fontSize:22,
    fontWeight:600,
    color:'#ffffff'
},
TextDelemSenha:{
    marginVertical: 80,
    paddingHorizontal:10,
    marginTop:10

},
textSenha:{
    fontSize:30,
    color:'#ffffff',
    marginVertical:12.5
},
textInfor:{
    color:'#ffffff',
    fontSize:17
},
Input:{width: 300,
    height: 50,
    fontSize: 16,
    backgroundColor: '#BAB2ED',
    marginVertical: 12.5,
    borderRadius: 11,
    padding: 12,
}
})