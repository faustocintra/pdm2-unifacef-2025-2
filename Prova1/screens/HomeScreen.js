import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  function irPara(screen) {
    navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>
        Maria Clara Piola Colmanetti Campos Borges
      </Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => irPara("InternetImage")}
        >
          <Text style={styles.textoBotao}>Imagem internet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => irPara("LocalImage")}
        >
          <Text style={styles.textoBotao}>Imagem local</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => irPara("Icons")}>
          <Text style={styles.textoBotao}>ícones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 64,
    backgroundColor: "#efd7d7ff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  nome: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    fontFamily: "serif", 
    fontWeight: "600",
    color: "#222222",
  },
  botoesContainer: {
    gap: 16,
  },
  botao: {
    backgroundColor: "#90259aff",
    paddingVertical: 14,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "500",
  },
});
