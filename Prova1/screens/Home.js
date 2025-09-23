import { View, Image, StyleSheet, Text, Button } from 'react-native';

export default function Home({ navigation }) {
 return (
  <View style={styles.container}>
      <Text style={styles.texto}>Tulio Fernandes Faria</Text>
      <View style={styles.buttons}>
        <Button 
        title="Tela2"
        onPress={() => navigation.navigate('Tela2')}
        />
        <Button 
          title="Tela3"
          onPress={() => navigation.navigate('Tela3')}
        />
        <Button 
          title="Tela4"
          onPress={() => navigation.navigate('Tela4')}
        />
      </View>
  </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
 imagem:  { width: 200, height: 200, resizeMode: 'contain' },
 texto: { fontSize: 20, marginTop: 10 },
 buttons: { flexDirection: 'row', justifyContent: 'space-between', width: 200, marginTop: 10 }
});