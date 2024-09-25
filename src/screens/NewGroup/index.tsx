
import { Alert, Pressable, SafeAreaView, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header"; 
import { FontAwesome6 } from "@expo/vector-icons";
import { Highlight } from "../../components/Highlight"; 
import { Button } from "../../components/Button"; 
import { Input } from "../../components/Input"; 
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { TeamContext } from "../../context/TeamContext";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";


export function NewGroup(){

    const {setGroup,group} = useContext(TeamContext)

    const navigation = useNavigation()

    async function handleNew(){

        try{
            if(group.trim().length === 0){
                Alert.alert('Novo Grupo', 'Informe o nome da turma.')
            }
            await groupCreate(group)
            navigation.navigate('players', {group})
        }catch(error){
            if(error instanceof AppError ){
                Alert.alert('Novo Grupo', error.message)
            }else{
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.')
                console.log(error)
            }
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Header showBackBtn/>
            </View>
            <View style={styles.middleView}>
                <Pressable onPress={() =>console.log(group)}>
                    <FontAwesome6 name="people-group" size={40} color="#00875F" style={styles.iconView}/>
                </Pressable>
                <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas"/>
            </View>
            
            <View style={styles.downView}>

                <TextInput
                style={styles.input}
                placeholder="Nome da Turma"
                onChangeText={setGroup}
                cursorColor={'white'}
                placeholderTextColor={'grey'}
                
                />

                <Button
                    title="Criar"
                    onPress={handleNew}
                    
                    />
                    
            </View>
        </SafeAreaView>
    )
}