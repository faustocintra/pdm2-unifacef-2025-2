import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Tela2({ navigation }) {
  return (  
    <View style={styles.container}>
      <Text style={styles.texto}>Tela 2</Text>
        <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2572/2572708.png' }}
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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7FA46' },
  texto: { fontSize: 20, marginBottom: 10 },
  imagem: { width: 100, height: 100,  marginBottom: 15 }
});
