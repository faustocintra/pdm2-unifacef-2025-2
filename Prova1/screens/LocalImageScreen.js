import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function LocalImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/minha_imagem.png")}
        style={styles.imagem}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#928dd2ff",
    padding: 16,
  },
  imagem: {
    width: 240,
    height: 240,
  },
});
