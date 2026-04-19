import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chào Đức Lương nhé! =)))</Text>
      <Text style={styles.subText}>App này được build từ iSH đó!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    color: '#fff',
    marginTop: 10,
  }
});
