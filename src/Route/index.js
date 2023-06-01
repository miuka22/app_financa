import{createNativeStackNavigator} from '@react-navigation/native-stack';
import Telalogin from "../pages/TelaLogin"
import TelaCadastro from "../pages/TelaCadastro"
import TelaEsqueceu from "../pages/TelaEsqueceu"
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
        options={{headerShown:false}}/>
      <Stack.Screen 
        name="TelaEsqueceu" 
        component={TelaEsqueceu}
        options={{headerShown:false}}
        />
    </Stack.Navigator>
) 
}
export default rota
