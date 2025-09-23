import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome name="camera" size={40} color="purple" style={styles.icon} />
      <View style={styles.row}>
        <Image 
          source={{ uri: 'https://www.google.com/imgres?q=imagens%20de%20carros&imgurl=https%3A%2F%2Fclassic.exame.com%2Fwp-content%2Fuploads%2F2024%2F10%2F2025-mclaren-w1.jpg&imgrefurl=https%3A%2F%2Fexame.com%2Fnoticias-sobre%2Fcarros-esportivos%2F1%2F&docid=NOk5tI3ypWokxM&tbnid=O6bgaJgIQ18BmM&vet=12ahUKEwjzqvKFgM2PAxXsq5UCHYUsFroQM3oECB0QAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjzqvKFgM2PAxXsq5UCHYUsFroQM3oECB0QAA' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.autocompara.com.br%2Fcarros-esportivos%2F&psig=AOvVaw1yYQs88QyblKf0lTkfdsJB&ust=1757552671339000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiD1ZuAzY8DFQAAAAAdAAAAABAU' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fforbes.com.br%2Fnegocios%2F2020%2F08%2Fos-13-carros-de-luxo-mais-vendidos-no-primeiro-semestre-de-2020-no-brasil%2F&psig=AOvVaw1yYQs88QyblKf0lTkfdsJB&ust=1757552671339000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiD1ZuAzY8DFQAAAAAdAAAAABAo' }} 
          style={styles.image} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  image: {
    width: '30%', 
    height: 100,
    borderRadius: 10,
  },
});