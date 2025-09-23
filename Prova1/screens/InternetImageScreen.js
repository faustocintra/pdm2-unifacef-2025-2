import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function InternetImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Imagem carregada da Internet</Text>
      <Image
        source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhgLbMsmN8e5xdiuUkPylNLeMPrRy2UeVJo10RZ8PQLrggEpHUOih6ZMXPBFtUFPaUTum8jovHHd_GSqeGtZJWtxCqjTehPw-kgfgri_I' }}
        style={styles.image}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa' },
  text: { fontSize: 18, marginBottom: 20 },
  image: { width: 150, height: 150 }
});
