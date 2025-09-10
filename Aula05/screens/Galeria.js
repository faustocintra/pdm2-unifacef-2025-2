import { View, Image, StyleSheet, Text, Button } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function Galeria({ navigation }) {
  return (
    <View style={styles.container}>
      <Entypo name="camera" size={35} color="red" />

      {/* Container das imagens */}
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/330px-Red_Apple.jpg' }}
          style={styles.imagem}
        />
        <Image
          source={{ uri: 'https://image.tuasaude.com/media/article/cp/bf/beneficios-da-melancia_21634.jpg' }}
          style={styles.imagem}
        />
        <Image
          source={{ uri: 'https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2020/08/04db0ac8-banana.jpg' }}
          style={styles.imagem}
        />
      </View>

      <Text style={styles.texto}>Galeria de Imgens</Text>
      <Button   
        title="Home"
        onPress={() => navigation.navigate('Início')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  row: {
    flexDirection: 'row',   // coloca os itens lado a lado
    gap: 10,                // espaçamento entre as imagens (React Native >= 0.71)
    marginVertical: 15
  },
  imagem:  { 
    width: 100, 
    height: 100, 
    resizeMode: 'cover' 
  },
  texto: { 
    fontSize: 20, 
    marginTop: 10 
  }
});
