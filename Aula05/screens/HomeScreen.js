import { View, Image, StyleSheet, Text, Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function HomeScreen({ navigation }) {
 return (
  <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.imagem} />
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100 }}
      />
      <FontAwesome name="home" size={40} color="blue" />
      <Text style={styles.texto}>Página Inicial</Text>
      <AntDesign name="shoppingcart" size={50} color="black" />
      <Button 
        title="Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
       <Button 
        title="Galeria"
        onPress={() => navigation.navigate('Galeria')}
      />
  </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
 imagem:  { width: 200, height: 200, resizeMode: 'contain' },
 texto: { fontSize: 20, marginTop: 10 }
});