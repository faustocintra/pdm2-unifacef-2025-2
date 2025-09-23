import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Tela3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela 3</Text>
      <Image
        source={require('../imgs/code.png')}
        style={styles.imagem}
      />
      <Button 
        title="Voltar para Home" 
        onPress={() => navigation.navigate('Início')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 20, marginBottom: 10 },
  imagem: {width: 200, height: 200, marginBottom: 15 }
});
