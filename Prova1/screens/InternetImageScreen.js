import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function InternetImageScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/300/200" }}
        style={styles.imagem}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.textoBotao}>Voltar para inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDEBF7",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  imagem: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginBottom: 32,
  },
  botao: {
    backgroundColor: "#b033ccff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#a59c9cff",
    fontWeight: "500",
  },
});
