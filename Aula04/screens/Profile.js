import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Perfil</Text>
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
    color: '#4A90E2' 
  },
});
