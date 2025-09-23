import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alyson Monteiro e Silva</Text>
      <Text style={styles.subtitle}>Navegue para as telas:</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Internet')}>
        <Text style={styles.buttonText}>Abrir Tela Internet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Imagem')}>
        <Text style={styles.buttonText}>Abrir Tela Imagem Local</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Icone')}>
        <Text style={styles.buttonText}>Abrir Tela Ícones</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#f6f8fa' },
  title: { fontSize: 22, fontWeight: '700', color: '#0d6efd', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#444', marginVertical: 12, textAlign: 'center' },
  button: { width: '100%', maxWidth: 320, backgroundColor: '#0d6efd', paddingVertical: 14, borderRadius: 10, marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center', fontWeight: '600' },
});
