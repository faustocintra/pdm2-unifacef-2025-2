import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Gallery() {
  return (
    <View style={styles.container}>
      {/* Ícone de câmera */}
      <Ionicons name="camera" size={50} color="purple" style={styles.icone} />

      {/* Três imagens da internet */}
      <Image
        source={{ uri: 'https://i0.wp.com/revistaamazonia.com.br/wp-content/uploads/2025/05/5-motivos-para-a-capivara-ser-o-animal-mais-zen-do-Brasil-1.webp' }}
        style={styles.imagem}
      />
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Male_cheetah_facing_left_in_South_Africa.jpg' }}
        style={styles.imagem}
      />
      <Image
        source={{ uri: 'https://placebear.com/200/200' }}
        style={styles.imagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  icone: {
    marginBottom: 20
  },
  imagem: {
    width: 150, 
    height: 150, 
    marginVertical: 10, 
    borderRadius: 10
  }
});
