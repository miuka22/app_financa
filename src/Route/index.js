import{createNativeStackNavigator} from '@react-navigation/native-stack';
import Telalogin from "../pages/TelaLogin/telaLogin"
import TelaCadastro from "../pages/TelaCadastro/telaCadastro"
import TelaEsqueceu from "../pages/TelaEsqueceu/telaEsqueceu"
import TelaPrincipal from "../pages/TelaPrincipal/telaPrincipal"
///import { TelaPrincipal } from '..';
const Stack = createNativeStackNavigator();
function rota(){

return(
    <Stack.Navigator>
        <Stack.Screen 
        name="TelaLogin" 
        component={Telalogin}
        options={{headerShown:false}} />
        <Stack.Screen 
        name="TelaCadastro" 
        component={TelaCadastro}
        ///options={{headerShown:false}} 
        />
      <Stack.Screen 
        name="TelaEsqueceu" 
        component={TelaEsqueceu}
        options={{headerShown:false}}
        />
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          ///options={{headerShown:false}}
          />
        
    </Stack.Navigator>
) 
}
export default rota
