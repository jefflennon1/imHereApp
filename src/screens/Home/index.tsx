import { ReactElement } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Participant } from '../components/Participant'

export default function Home(): ReactElement {

  function handleParticipantAdd() {
    console.log('On add participant!')
  }

  function handleParticipantRemove(name: string) {
    console.log(`On remove participant! ${name}`)
  }


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
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Jefferson" onRemove={() => handleParticipantRemove('joão')} />
    </View>
  )


}

