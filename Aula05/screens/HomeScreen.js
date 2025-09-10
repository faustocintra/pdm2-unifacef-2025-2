import { View, Text, Image, StyleSheet, Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Ícone */}
      <FontAwesome name="home" size={40} color="blue" />
      <Text style={styles.texto}>Página Inicial</Text>
      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />

      <Button
        title="Ir para Galeria"
        onPress={() => navigation.navigate('Gallery')}
      />

      {/* Imagem local */}
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.imagem} 
      />

      {/* Imagem da web */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  imagem: { 
    width: 200, 
    height: 200, 
    resizeMode: 'contain' 
  },
  texto: {
    fontSize: 20,
    marginVertical: 10,
    color: 'black'
  }
});
