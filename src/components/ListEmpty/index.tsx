import { Text, View } from "react-native";
import { styles } from "./styles";

type Props ={
    message: string
}

export function ListEmpty({message}:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}