import { View, Image, StyleSheet, Button } from 'react-native';

export default function Tela3({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/avatar.png')}
                style={styles.imagem}
            />
            <Button
                title="Voltar à Home"
                onPress={() => navigation.navigate('Home')}
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
    imagem: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20
    }
});
