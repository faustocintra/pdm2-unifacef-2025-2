import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Caio Taveira de Castro</Text>

      <Button
        title="Ir para Segunda Página"
        onPress={() => navigation.navigate('Segunda Página')}
      />

      <View style={{ height: 20 }} />

      <Button
        title="Ir para Terceira Página"
        onPress={() => navigation.navigate('Terceira Página')}
      />

      <View style={{ height: 20 }} />

      <Button
        title="Ir para Quarta Página"
        onPress={() => navigation.navigate('Quarta Página')}
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
    fontWeight: 'bold',
    marginBottom: 30
  },
});