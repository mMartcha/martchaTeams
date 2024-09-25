import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";
import logoImg from "../../assets/Logo.png"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { NavigationProp, NavigationState, useNavigation } from "@react-navigation/native";

type Props ={
    showBackBtn?: boolean
    navigation?: Omit<NavigationProp<ReactNavigation.RootParamList>, "getState"> & {
        getState(): NavigationState 
}
}

export function Header({showBackBtn = false  }:Props){ 

    const navigation = useNavigation()

    function handleGoBack(){
        navigation.navigate('groups')
    }

    return(

        <View style={styles.container}>

            {
                showBackBtn &&
            <Pressable style={styles.backBtn} onPress={handleGoBack}> 
                <FontAwesome name="angle-left" size={36} color="#FFF" /> 
            </Pressable>
            }
            <Image style={styles.image}
                source={logoImg}
            />
        </View>
    )
}