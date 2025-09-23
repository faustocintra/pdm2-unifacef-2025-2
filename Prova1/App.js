import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';
import Tela4 from './screens/Tela4';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={Home} />
        <Stack.Screen name="Tela2" component={Tela2}/>
        <Stack.Screen name="Tela3" component={Tela3} />
        <Stack.Screen name="Tela4" component={Tela4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
