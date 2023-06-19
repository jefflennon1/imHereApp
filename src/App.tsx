import { ReactElement } from 'react'
import { StyleSheet, Text , Image} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'



export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.emoji}>🚀</Text>
        <Text style={styles.text}>Os mags são um bando de esquerdo-machos</Text>
        <Text>👌</Text>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023020',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 8,
    color: '#ffff'
  },
  emoji: {
    fontSize: 82,
    marginBottom: 24
  }
})
