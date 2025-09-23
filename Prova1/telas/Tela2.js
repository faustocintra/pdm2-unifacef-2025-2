import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Tela2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela 2</Text>
      <Image 
        source={{ uri: 'https://engenharia360.com/wp-content/uploads/2022/08/1-PlanetCarsZ-1024x576.jpg' }} 
        style={styles.imagem} 
      />
      <Button 
        title="Voltar"
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#222237ff' // cor diferente de branco
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  imagem: {
    width: 200,
    height: 200,
    margin: 20
  }
});
