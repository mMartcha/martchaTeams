import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#202024',
        flex:1
    },
    headerView:{
        marginTop:30,
        marginHorizontal:20
    },
    middleView:{
        top:130,
        alignItems:'center',
        gap:20
    },
    iconView:{

    },
    input:{
        backgroundColor:'black',
        maxHeight:56,
        minHeight:56,
        borderRadius:6,
        padding:12,
        fontSize:16,
        fontFamily: 'Roboto_400Regular',
        color:'white',
        flex:1        
    },
    downView:{
        alignSelf:'center',
        width:'90%',
        top:160,
        gap:20
    },
    
})