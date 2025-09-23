import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pedro Henrique de Souza</Text>
      <Button
        title="Ir para Tela 2"
        onPress={() => navigation.navigate('Tela2')}
      />
      <Button
        title="Ir para Tela 3"
        onPress={() => navigation.navigate('Tela3')}
      />
      <Button
        title="Ir para Tela 4"
        onPress={() => navigation.navigate('Tela4')}
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
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
});
