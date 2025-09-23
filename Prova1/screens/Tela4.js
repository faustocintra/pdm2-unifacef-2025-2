import { View, Text, Button, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Tela4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela 4</Text>
        <View style={styles.icons}>
            <AntDesign name="alert" size={50} color="red" />
            <AntDesign name="audio" size={50} color="yellow" />
            <AntDesign name="bell" size={50} color="green" />
        </View>
      <Button 
        title="Voltar para Home" 
        onPress={() => navigation.navigate('Início')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 20, marginBottom: 10 },
  icons: { flexDirection: 'row', justifyContent: 'space-between', width: 200,  marginBottom: 20}
});
