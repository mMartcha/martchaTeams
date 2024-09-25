import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title:{
        color:'#FFF',
        fontFamily: 'Roboto_700Bold',
        fontSize: 24,
    },
    subTitle:{
        color:'#7C7C8A',
        fontFamily: 'Roboto_400Regular',
        fontSize: 16
    },
    container:{
        width:'100%',
        marginHorizontal:32,
        alignItems:'center',
        justifyContent:'center'

        
    }
})