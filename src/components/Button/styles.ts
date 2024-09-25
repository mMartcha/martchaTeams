import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container:{ 
         
         minHeight:56,
         minWidth:56,
         borderRadius:6,
         justifyContent:'center',
         alignItems:'center',
         marginHorizontal:12
    },
    title:{
        fontFamily: 'Roboto_700Bold',
        color:'#FFF',
        fontSize:16
    }
})