import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import InternetImageScreen from './screens/InternetImageScreen';
import LocalImageScreen from './screens/LocalImageScreen';
import IconsScreen from './screens/IconsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Imagem da Internet" component={InternetImageScreen} />
        <Stack.Screen name="Imagem Local" component={LocalImageScreen} />
        <Stack.Screen name="Ícones" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

