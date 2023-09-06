import {StyleSheet} from "react-native";
const style =StyleSheet.create({
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
   
    TextInput:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    textForm:{
        ///estilo do campos de texto
        width: 300,
        height: 50,
        fontSize: 16,
        backgroundColor: '#BAB2ED',
        marginVertical: 12.5,
        borderRadius: 11,
        padding: 12
    },
    btRecuSenha:{
        width:300,
        height: 50,
        paddingHorizontal: 12,
        marginLeft:10,
        color:'#ffff',
        ///fontStyle: 'normal',
        ///fontWeight: 400,
        fontSize: 20
        ///lineHeight: 20,
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
        color: '#ffffff',
        marginTop: 8
        // width: 306,
        ///height: 50,
        //paddingLeft:210,
        ///textAlign: 'center',
       //marginVertical:12
        ///fontStyle: 'normal',
        ///fontWeight: 400,
        ///fontSize: 16,
        //lineHeight: 20,
    }

})
export default style;