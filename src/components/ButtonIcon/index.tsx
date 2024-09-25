import { Pressable, PressableProps } from "react-native"
import { styles } from "./styles"
import AntDesign from '@expo/vector-icons/AntDesign';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'
 
type Props = PressableProps &{
    type?: ButtonIconTypeStyleProps
    icon: keyof typeof AntDesign.glyphMap
}
export function ButtonIcon({type = 'PRIMARY', icon, onPress}:Props){
    return(
        <Pressable onPress={onPress} style={styles.button} >
              <AntDesign name={icon} size={32} color={type === 'PRIMARY' ? "#00875F" : "#AA2834" }  />
        </Pressable>
    )
}