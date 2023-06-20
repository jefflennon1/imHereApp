import { ReactElement } from 'react'
import { Text , View, TextInput} from 'react-native'
import {styles} from './styles'

export default function Home(): ReactElement {
  return (
     <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 23 de junho de 2023
      </Text>

      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor="#6b6b6b"
      />
     </View>
  )
}

