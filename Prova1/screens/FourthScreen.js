import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome name="umbrella" size={50} color="#DE2160" style={styles.icon} />
        <FontAwesome name="gamepad" size={50} color="#2173DE" style={styles.icon} />
        <FontAwesome name="tree" size={50} color="#69DE21" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});
