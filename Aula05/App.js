import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import ProfileScreen from './screens/ProfileScreen';

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
          name="Galeria"
          component={GalleryScreen}
        />
        <Stack.Screen 
          name="Perfil" 
          component={ProfileScreen} 
          options={{ title: 'Meu Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
