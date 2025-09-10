import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'; // Importando a nova tela
import Galeria from './screens/Galeria';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{ title: 'Meu Perfil 👤' }} // título personalizado no cabeçalho
        />
        <Stack.Screen name="Galeria" component={Galeria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
