import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function IconsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Três Ícones em Linha</Text>
      <View style={styles.iconsRow}>
        <FontAwesome name="home" size={40} color="blue" />
        <Ionicons name="star" size={40} color="green" />
        <MaterialIcons name="favorite" size={40} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 20 },
  iconsRow: { flexDirection: 'row', justifyContent: 'space-around', width: '60%' }
});
