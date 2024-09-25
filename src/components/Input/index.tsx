import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}
export function Input({placeholder, onChangeText,value,inputRef}: Props){
    return(
        <TextInput
        onChangeText={onChangeText}
        placeholderTextColor={'grey'}
        style={styles.input}
        placeholder={placeholder}
        cursorColor={'white'}
        value={value}
        ref={inputRef}
        
        
        />
        
    )
}