import { ReactElement } from 'react'
import { Text , View, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './styles'

function handleParticipantAdd(){
  console.log('Hello word!')
}

export default function Home(): ReactElement {
  return (
     <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 23 de junho de 2023
      </Text>

    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor="#6b6b6b"
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

