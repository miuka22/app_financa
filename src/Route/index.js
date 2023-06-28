import{createNativeStackNavigator} from '@react-navigation/native-stack';
import Telalogin from "../pages/TelaLogin/telaLogin"
import TelaCadastro from "../pages/TelaCadastro/telaCadastro"
import TelaEsqueceu from "../pages/TelaEsqueSenha/telaEsqueceu"
import TelaPrincipal from "../pages/TelaPrincipal/telaPrincipal"
import TelaReceita from "../pages/TelaReceita/telaReceita"
import TelaDespesa from "../pages/TelaDespesa/telaDespesa"
import TelaPerfil from "../pages/TelaPerfil/telaPerfil"
import TelaTeste from "../pages/TelaTeste/telaTeste"
import TelaEnviado from '../pages/TelaEsqueSenha/telaEnviado';


const Stack = createNativeStackNavigator();
function rota(){

return(
    <Stack.Navigator initialRouteName='TelaLogin'
        screenOptions={{
            animation: 'none'
        }}
    >
        <Stack.Screen
            name="testes"
            component={TelaTeste}
        ></Stack.Screen>
        <Stack.Screen 
            name="TelaLogin" 
            component={Telalogin}
            options={{headerShown:false}}
        />
        <Stack.Screen 
            name="TelaCadastro" 
            component={TelaCadastro}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="TelaEsqueceu"
            component={TelaEsqueceu}
            options={{headerShown:false}}
        />
        <Stack.Screen         
            name="TelaPrincipal"
            component={TelaPrincipal}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="TelaReceita"
            component={TelaReceita}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="TelaDespesa"
            component={TelaDespesa}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name="TelaPerfil"
            component={TelaPerfil}
            options={{headerShown:false}}
        />
        <Stack.Screen
        name="TelaEnviado"
        component={TelaEnviado}
        options={{headerShown:false}}
        />
    </Stack.Navigator>
) 
}
export default rota