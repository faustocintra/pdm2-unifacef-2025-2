import { Image, View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image 
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Tela Inicial</Text>

      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />

      <View style={{ height: 20 }} />

      <Button
        title="Ir para Galeria"
        onPress={() => navigation.navigate('Galeria')}
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
  logo: {
    width: 150,   
    height: 150,
    marginBottom: 20,
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 30
  },
});