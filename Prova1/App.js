import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import IconScreen from './screens/IconScreen'
import imgScreen from './screens/imgScreen'
import InternetScreen from './screens/InternetScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Internet" component={InternetScreen} />
        <Stack.Screen name="Imagem" component={imgScreen} />
        <Stack.Screen name="Icone" component={IconScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}