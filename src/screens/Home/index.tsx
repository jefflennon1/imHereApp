import { ReactElement, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../components/Participant'

export default function Home(): ReactElement {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existente.");
    }
    setParticipants(prev => [...prev, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o partiicpante ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!"),
        style: 'destructive'
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd()}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
            key={item} />
        )
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém por aqui ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )


}

