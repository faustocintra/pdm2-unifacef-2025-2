import {Button, View, Image, StyleSheet } from 'react-native';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mark_Webber_2012_Malaysia_FP2_1.jpg' }} 
            style={styles.image} 
        />

        <View style={{ height: 20 }} />
        
        <Button 
            title="Voltar" 
            onPress={() => navigation.goBack()} 
            color="#ee1111ff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5ecae6ff',
  },
  image: {
    width: '75%', 
    height: 400
  }
});
