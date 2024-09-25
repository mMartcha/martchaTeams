import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { PressableProps } from "react-native";

export type FilterStyleProps = PressableProps &{
    isActive?: boolean
    title: string
    

}
export function Filter({isActive = false, title, ...rest}:FilterStyleProps){
    return(

        <Pressable  style={[styles.filter, isActive && styles.activeStyle]}
        {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}