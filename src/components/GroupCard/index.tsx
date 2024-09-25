import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {TouchableOpacityProps} from 'react-native'

type Props = TouchableOpacityProps & {
    title: string
}

export function GroupCard({title, ...rest}:Props){
    return(
        <Pressable style={styles.container} {...rest} >
            <FontAwesome6 name="people-group" size={32} color="#00875F" style={styles.iconView}/>
            <Text style={styles.title}> {title}</Text>
        </Pressable>
    )
}