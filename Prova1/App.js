import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Página Inicial" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Segunda Página"
          component={SecondScreen}
        />
        <Stack.Screen 
          name="Terceira Página"
          component={ThirdScreen}
        />
        <Stack.Screen 
          name="Quarta Página"
          component={FourthScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
