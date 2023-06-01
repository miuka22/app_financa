import { useState } from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native'
function TelaLogin() {
    const [email, setEmail]= useState('')
  return (
    <View style={styles.Conteiner}>
    <View style={styles.Logo}>
        <Text style={styles.LogoTitle}>MONEY MIND</Text>
    </View>

    
    <View style={styles.conteinerForm}>
  <Text style={styles.title}>Email</Text>
    <TextInput
    style={styles.TextInput}
    Styles={styles.text}placeholder="Digite seu usuario ou email"
    onChange={text=>
    setEmail(text)}
    
    />
    </View>
  </View>

  )
}
export default TelaLogin;
const styles = StyleSheet.create({
Conteiner:{
    flex:1,
    backgroundColor:'#7B68EE',
},
Logo:{
    
    color: '#0A0541',
    alignItems:'center',
    textAlign: 'center',
    justifyContent: 'center',
    ///backgroundColor:'#DD0000',
    top: 155,
    
},
LogoTitle:{
    color:'#ffff',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize:43,
    lineHeight:54
},
conteinerForm:{
    position: 'absolute',
    width: 250,
    height: 187,
    left: 30,
    top: 350,
///backgroundColor:'#DD0000',

},
title:{
},
TextInput:{
   ///position: 'absolute',
    width: 300,
    height: 50,
    backgroundColor: '#BAB2ED',
    borderRadius: 14,
    color:'#000000'

},
text:{
    fontfamily: 'Source Sans Pro',
    fontstyle: 'normal',
    fontweight: 400,
    fontsize: 16,
    lineheight: 20,
    display: 'flex',
    alignitems: 'center',
}
})