import { Text, View } from "react-native";
import { styles } from "./styles";

type Props ={
    title: string
    subtitle: string
}

export function Highlight({subtitle,title}:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subtitle}</Text>
        </View>
    )
}