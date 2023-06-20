import { ReactElement } from 'react'
import { Text , Image} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './styles'

export default function Home(): ReactElement {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.emoji}>🚀⚽</Text>
        <Text style={styles.text}>Hello Word! </Text>
        <Text>🗺️🤚🏽</Text>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

