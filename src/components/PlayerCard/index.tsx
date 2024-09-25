import { PressableProps, Text, View } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ButtonIcon } from "../ButtonIcon";

type Props = {
    name: string
    onRemove: () => void  
}

export function PlayerCard({name, onRemove}: Props){
    return(
        <View style={styles.container}>
            <Ionicons name="person" size={24} color="#C4C4CC" style={{marginLeft:16}} />
            <Text style={styles.playerCardText}>{name}</Text>
            <ButtonIcon
            icon="close"
            type="SECONDARY"    
            onPress={onRemove}
                />
        </View>
    )
}