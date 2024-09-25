import { createContext, ReactNode, useState } from "react";

export type TeamProps ={
    title: string
}


type TeamContextProps ={
    group:string
    setGroup: React.Dispatch<React.SetStateAction<string>>
}

type TeamContextProviderProps ={
    children: ReactNode
}

export const TeamContext = createContext({} as TeamContextProps)

export function TeamContextProvider({children}:TeamContextProviderProps){

    const [group, setGroup] =useState('')

    return(
        <TeamContext.Provider value={{
            group,setGroup
        }}>
            {children}
        </TeamContext.Provider>
    )
}