"use client"
import { createContext, useContext, useState } from "react"

interface User {
    name:string,
    age:number
}

interface AuthContextType{
    user:User | null,
    isLogedin:boolean,
    setIsLogedin:React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthContextPovider=({children}:{children: React.ReactNode})=>{
    const [user,setUser] = useState< User | null>(null)
    const [isLogedin,setIsLogedin]=useState<boolean>(false)
    return(<AuthContext.Provider value={{user,isLogedin,setIsLogedin}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuthContext=()=>useContext(AuthContext)