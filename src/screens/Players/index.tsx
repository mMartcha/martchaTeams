import { useContext, useEffect, useRef, useState } from "react";
import { Alert, FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header"; 
import { Highlight } from "../../components/Highlight"; 
import { Input } from "../../components/Input"; 
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter"; 
import { PlayerCard } from "../../components/PlayerCard"; 
import { ListEmpty } from "../../components/ListEmpty"; 
import { Button } from "../../components/Button"; 
import { useRoute, useNavigation } from "@react-navigation/native";
import { TeamContext } from "../../context/TeamContext";
import { AppError } from "../../utils/AppError";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup"; 
import { playersGetByGroup } from "../../storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "../../storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "../../storage/player/PlayerStorageDTO";
import { playersRemoveByGroup } from "../../storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "../../storage/group/groupRemoveByName";



type RouteParams={
    group: string
}

export function Players(){

    const [newPlayerName, setNewPlayerName] =  useState('')
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    
    // const {group} = useContext(TeamContext)
    
    const navigation = useNavigation()

    const route = useRoute()
    const {group} = route.params as RouteParams

    const newPlayerNameInputRef = useRef<TextInput>(null)
    
    async function handleAddPlayer(){
        if(newPlayerName.trim().length === 0){
            return Alert.alert('Nova pessoa','Informe o nome da pessoa para adicionar')
        }
        
        const newPlayer ={
            name: newPlayerName,
            team,
        }
        try{
            await playerAddByGroup(newPlayer,group)

            newPlayerNameInputRef.current?.blur()

            setNewPlayerName('')
            fetchPlayersByTeam()

        }catch(error){
            if(error instanceof AppError){
                Alert.alert('Nova pessoa', error.message)
            }else{
                console.log(error)
                Alert.alert('Nova pessoa', 'Não foi possivel adicionar')
            }
        }
    }

    async function fetchPlayersByTeam(){
        try{
            const playersByTeam = await playersGetByGroupAndTeam(group,team)
            setPlayers(playersByTeam)
        }catch(error){
            console.log(error)
            Alert.alert('Pessoas','Não foi possivel carregar as pessoas do time selecionado')
        }
    }


    async function handlePlayerRemove(playerName: string){
        try {
            await playersRemoveByGroup(playerName, group)
            fetchPlayersByTeam()
        } catch (error) {
            console.log(error)
            Alert.alert('Remover pessoa', 'Não foi possivel remover essa pessoa.')
        }
    }

    async function groupRemove(){
        try {
            await groupRemoveByName(group)
            navigation.navigate('groups')
        } catch (error) {
            console.log(error)
            Alert.alert('Remover Grupo', 'Não foi possivel remover o grupo.')
        }
    }


    async function handleGroupRemove(){
        Alert.alert(
            'Remover',
            'Deseja remover o grupo?',
            [
                {text:'Não', style:'cancel'},
                {text:'Sim', onPress: () =>groupRemove()}

            ]
        )
    }


    useEffect(()=>{
        fetchPlayersByTeam()
    },[team])

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <Header
                showBackBtn
                
                />
            </View>
            <View style={styles.middleScreen}>
                <Highlight 
                title={group}
                subtitle="adicione a galera e sapare os times"
                />
            </View>

                <View style={styles.form}>
                    <Input
                        placeholder="Nome do participante" 
                        onChangeText={setNewPlayerName}      
                        value={newPlayerName} 
                        inputRef={newPlayerNameInputRef}
                        onSubmitEditing={handleAddPlayer}
                        returnKeyType='done'
                    />
                    <ButtonIcon
                        icon='plus'
                        onPress={handleAddPlayer}
                        />
                </View>
                
                <View style={styles.filterView}>
                    <FlatList
                        data={['Time A', 'Time B']}
                        keyExtractor={item => item}
                        renderItem={({item})=>(
                            <Filter 
                            title={item}
                            isActive={item === team}
                            onPress={ () => setTeam(item)}
                        />
                        )}
                        horizontal
                    />     
                    <Text style={styles.filterViewText}>{players.length}</Text>             
               </View>

               <View style={styles.playerCardView}>
                <FlatList
                    data={players}
                    keyExtractor={item => item.name}
                    renderItem={({item})=>(
                        <PlayerCard
                        name={item.name}
                        onRemove={() => handlePlayerRemove(item.name)}
                        />
                    )}
                    ListEmptyComponent={() =>(
                        <ListEmpty
                        message="Não há pessoas nesse time"
                        />
                    )}
                    // showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:100}}
                />
               </View>

                <View style={{marginBottom:16}}>
                    <Button
                        title="Remover Turma"
                        type="SECONDARY"
                        onPress={handleGroupRemove}
                    />
                </View>

        </SafeAreaView>
    )
}