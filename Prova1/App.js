import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './telas/Home';
import Tela2 from './telas/Tela2';
import Tela3 from './telas/Tela3';
import Tela4 from './telas/Tela4';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Tela Inicial' }}
        />
        <Stack.Screen
          name="Tela2"
          component={Tela2}
          options={{ title: 'Tela 2' }}
        />
        <Stack.Screen
          name="Tela3"
          component={Tela3}
          options={{ title: 'Tela 3' }}
        />
        <Stack.Screen
          name="Tela4"
          component={Tela4}
          options={{ title: 'Tela 4' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
