import { View, Text, Image, StyleSheet } from 'react-native';

export default function LocalImageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Imagem Local</Text>
      <Image source={require('../assets/capivara.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 20 },
  image: { width: 200, height: 200, resizeMode: 'contain' }
});
