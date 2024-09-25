import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    
    filter:{
        
        
        marginRight:12,
        height:38,
        width:70,
        alignItems:'center',
        justifyContent:'center'
    },
    activeStyle:{
        borderWidth:1,
        borderColor: '#00875F',
        borderRadius:4,
        marginRight:12,
        height:38,
        width:70,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontFamily: 'Roboto_700Bold',
        fontSize:14,
        color:'#FFF',
        textTransform:"capitalize"
    }
})