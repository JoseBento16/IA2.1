import { GestureResponderEvent, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";

type Props = {
    label: string,
    onPress?: (event: GestureResponderEvent) => void
}

export function Button({ label, onPress }: Props){
    return (
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
    )
}

