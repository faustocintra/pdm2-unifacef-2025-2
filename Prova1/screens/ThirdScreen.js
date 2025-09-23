import { View, Image, StyleSheet } from 'react-native';

export default function ThirdScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/praia.jpg')}
        style={styles.image}
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
   image: {
    width: '50%', 
    height: 500
  }
});