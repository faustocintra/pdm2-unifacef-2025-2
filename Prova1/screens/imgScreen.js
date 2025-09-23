import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function imgScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  image: { width: '80%', height: 320 },
});
