import { StyleSheet, StatusBar, Image, Text} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        hidden={false}
      />
      <SafeAreaView style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          resizeMode="contain"
          style={styles.image}
        />

        <Text style={styles.title}>
          <Text style={{ color: '#ffffff' }}>DG </Text>
          <Text style={{ color: '#76C7A7' }}>Hub</Text> 
        </Text>

        <Text style={styles.subtittle}>
          Tecnologia corportiva que circula com confiança
        </Text>


      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  image: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    textAlign: 'center',
    marginTop: 50,
    flexDirection: 'row',
  },
  subtittle: {
    fontSize: 16,
    color: '#A3B0A8',
    textAlign: 'center',
    marginTop: 20,
  },
});