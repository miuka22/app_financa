import{createNativeStackNavigator} from '@react-navigation/native-stack';
<<<<<<< Updated upstream
import Telalogin from "../pages/TelaLogin/telaLogin"
import TelaCadastro from "../pages/TelaCadastro/telaCadastro"
import TelaEsqueceu from "../pages/TelaEsqueSenha/telaEsqueceu"
import TelaPrincipal from "../pages/TelaPrincipal/telaPrincipal"
import TelaEnviado from '../pages/TelaEsqueSenha/telaEnviado';
///import { TelaPrincipal } from '..';
=======
import Telalogin from "../pages/TelaLogin"
import TelaCadastro from "../pages/TelaCadastro"
import TelaEsqueceu from "../pages/TelaEsqueceu"
import TelaPrincipal from "../pages/TelaPrincipal/TelaPrincipal"

>>>>>>> Stashed changes
const Stack = createNativeStackNavigator();
function rota(){

return(
<<<<<<< Updated upstream
    <Stack.Navigator>
=======
    <Stack.Navigator initialRouteName='TelaPrincipal'>
        <Stack.Screen 
        name="TelaLogin" 
        component={Telalogin}
        options={{headerShown:false}} />
        <Stack.Screen 
        name="TelaCadastro" 
        component={TelaCadastro}
        options={{headerShown:false}} />
>>>>>>> Stashed changes
      <Stack.Screen 
        name="TelaEsqueceu" 
        component={TelaEsqueceu}
        options={{headerShown:false}}
        />
<<<<<<< Updated upstream
        <Stack.Screen 
        name="TelaCadastro" 
        component={TelaCadastro}
        ///options={{headerShown:false}} 
        />
        <Stack.Screen 
        name="TelaLogin" 
        component={Telalogin}
        options={{headerShown:false}} />
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          ///options={{headerShown:false}}
          />
           <Stack.Screen
          name="TelaEnviado"
          component={TelaEnviado}
          ///options={{headerShown:false}}
          />
        
        
=======
      <Stack.Screen
        name="TelaPrincipal"
        component={TelaPrincipal}
        />
>>>>>>> Stashed changes
    </Stack.Navigator>
)}
export default rota
