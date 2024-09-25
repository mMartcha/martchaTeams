import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#202024',
        flex:1
    },
    headerView:{
        marginTop:30,
        marginHorizontal: 20
    },
    middleScreen:{
        alignItems:'center',
        top:30,
        gap:20,
        // backgroundColor:'yellow'
    },
    form:{
        flexDirection:'row',
        backgroundColor:'black',
        marginHorizontal:20,
        borderRadius:6,
        top:60,
        

        
    },
    filterView:{
        top:80,
        marginLeft:20,
        flexDirection:'row',
        alignItems:'center'

    },
    filterViewText:{
        color:'#C4C4CC',
        marginRight:20,
        fontFamily: 'Roboto_700Bold',
        fontSize:16
    },
    playerCardView:{
        flex:1,
        top:100,
        // backgroundColor:'orange'
        
    }
})