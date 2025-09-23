import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Henrique Duarte Cursino</Text>
      <Text style={styles.subtitle}>Prova 1º Bimestre</Text>

      <Button
        title="Ir para Imagem da Internet"
        onPress={() => navigation.navigate('Imagem da Internet')}
      />

      <Button
        title="Ir para Imagem Local"
        onPress={() => navigation.navigate('Imagem Local')}
      />

      <Button
        title="Ir para Ícones"
        onPress={() => navigation.navigate('Ícones')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 16, marginBottom: 30 }
});
