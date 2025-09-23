import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function IconsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <Image source={require("../assets/face.png")} style={styles.icone} />
        <Image source={require("../assets/insta.png")} style={styles.icone} />
        <Image source={require("../assets/twitter.png")} style={styles.icone} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  linha: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icone: {
    width: 64,
    height: 64,
    resizeMode: "contain",
  },
});
