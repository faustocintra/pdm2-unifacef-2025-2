import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome name="camera" size={40} color="purple" style={styles.icon} />
      <View style={styles.row}>
        <Image 
          source={{ uri: 'https://cdn-8.motorsport.com/images/amp/254B8MM0/s1000/red-bull-racing-2022-f1-car-1.jpg' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://projetomotor.com.br/wp-content/uploads/2022/02/Alpine-A522-DESTAQUE.jpg' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://s2-autoesporte.glbimg.com/6N6UKj1cx5Nv6hZf3BmiHwx7Y1A=/0x0:1080x645/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/Z/F/C923T1TlORxpzmAb8lAg/ferraro.jpg' }} 
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
