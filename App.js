import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/Route'
export default function App() {

  return (
    <NavigationContainer>
     < StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
     

      <Route/>
    </NavigationContainer>
  );
}


