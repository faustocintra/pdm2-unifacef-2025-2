import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import InternetImageScreen from "./screens/InternetImageScreen";
import LocalImageScreen from "./screens/LocalImageScreen";
import IconsScreen from "./screens/IconsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Início" }}
        />
        <Stack.Screen
          name="InternetImage"
          component={InternetImageScreen}
          options={{ title: "Imagem Internet" }}
        />
        <Stack.Screen
          name="LocalImage"
          component={LocalImageScreen}
          options={{ title: "Imagem Local" }}
        />
        <Stack.Screen
          name="Icons"
          component={IconsScreen}
          options={{ title: "Ícones" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
