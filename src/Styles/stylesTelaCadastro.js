import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    Conteiner:{
        height: '100%',
        alignItems:'center',
        backgroundColor:'#423880',
      },
      aviso:{
        fontSize:16,
        color:'#ee0000'
      },
      cadastrar:{
        color: '#423880',
        fontWeight: 'bold',
        fontSize: 22,
      },
      btnCadastrar:{
        width: 150,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      areaCheck:{
        flexDirection: 'row',
        width: 350,
        marginTop: 15,
        alignItems: 'center'
      },
      check:{
        width: 20,
        height: 20,
        backgroundColor: '#423880',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center'
      },
      Logo:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:40
      },
      LogoTitle:{
        color:'#ffff',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize:43,
      },
      textTitle:{
        color:'#ffff',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize:32,
      },
      form:{
        // backgroundColor:'#000',
        marginVertical: 50,
        alignItems:'center',
        justifyContent:'center',
      },
      formTxt:{
        color: '#ffffff',
        fontSize: 20,
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
      }
})
export default style;