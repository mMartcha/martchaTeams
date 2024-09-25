import { Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY"

type Props = PressableProps &{
    title: string
    type?: ButtonTypeStyleProps
}

export function Button({type = 'PRIMARY', title, onPress }:Props){
    return(
        <Pressable onPress={onPress} style={[styles.container, {backgroundColor: type === "PRIMARY" ? "#00875F":"#AA2834" }]}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}