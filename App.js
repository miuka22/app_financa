import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/Route'
export default function App() {

  return (
    <NavigationContainer>
<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

      <Route/>
    </NavigationContainer>
  );
}


