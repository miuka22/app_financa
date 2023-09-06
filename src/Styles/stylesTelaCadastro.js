import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    Conteiner:{
        flex:2,
        alignContent:'center',
        backgroundColor:'#423880',
      
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
export default style;