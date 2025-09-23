import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IconScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MaterialCommunityIcons name="home" size={48} color="#e74c3c" />
        <MaterialCommunityIcons name="camera" size={48} color="#3498db" />
        <MaterialCommunityIcons name="account" size={48} color="#2ecc71" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#fff' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // espaçamento igual entre eles
    alignItems: 'center',
    width: '100%',
  },
});
