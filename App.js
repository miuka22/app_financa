import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import Route from './src/Route'
export default function App() {
  
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor='#423880' hidden={false}/>

      <Route/>
      </PaperProvider>
    </NavigationContainer>
  );
}


