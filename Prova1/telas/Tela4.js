import { View, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Tela4({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={50} color="red" />
      <Ionicons name="person" size={50} color="green" />
      <Ionicons name="settings" size={50} color="blue" />
      <View style={styles.botao}>
        <Button 
          title="Voltar à Home"
          onPress={() => navigation.navigate('Home')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center' 
  },
  botao: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center'
  }
});
