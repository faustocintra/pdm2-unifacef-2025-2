import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Gallery from './screens/Gallery';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Início" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Perfil" 
          component={ProfileScreen} 
          options={{ title: 'Meu Perfil 👤' }}
        />
         <Stack.Screen 
          name="Gallery"
          component={Gallery} 
          options={{ title: 'Galeria de Imagens' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
