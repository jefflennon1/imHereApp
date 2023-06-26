import { View, Text, TouchableOpacity } from "react-native"
import { styles } from './styles'

type Props = {
    user: string;
}

export function Participant({ user }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {user}
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}
