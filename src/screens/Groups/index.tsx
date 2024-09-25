import { Header } from "../../components/Header"; 
import { Highlight } from "../../components/Highlight"; 
import { GroupCard } from "../../components/GroupCard"; 
import { FlatList, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState, useCallback } from "react";
import { ListEmpty } from "../../components/ListEmpty"; 
import { Button } from "../../components/Button"; 
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsGetAll } from "../../storage/group/groupsGetAll";

// type Props = {
//     navigation: any
// }



export function Groups( ){

    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation();

    function handleNewGroup(){
        navigation.navigate('new')
    }

    async function fetchGroups(){
        try{
            const data = await groupsGetAll()
            setGroups(data)
        }catch(error){ 
            console.log(error)
        }
    }

    function handleOpenGroup(group: string){
        navigation.navigate('players',{group})
    }

    useFocusEffect(useCallback(()=>{
        fetchGroups()
    },[]))


    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.headerView}>
                <Header/>
                
                <Highlight 
                title="Turmas"
                subtitle="jogue com sua turma"
                />
            </View>
            
            <View style={styles.showView}>
                <FlatList
                    data={groups}
                    keyExtractor={item => item}
                    renderItem={({item}) =>(
                        <GroupCard title={item}
                        onPress={() => handleOpenGroup(item)}
                        />
                    )}

                    contentContainerStyle={groups.length === 0 && {flex:1, paddingBottom:400} }
                    ListEmptyComponent={() => 
                        <ListEmpty message="Que tal cadastrar a primeira turma"/>
                    }
                />
                
            </View>
            <View style={{marginBottom:20}}>
                <Button 
                    title="Criar nova turma"
                    onPress={handleNewGroup}
                />
            </View>

        </SafeAreaView>
    )
}