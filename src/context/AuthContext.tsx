"use client"
import { getCurrentUser,} from "aws-amplify/auth"
import { createContext, useContext, useEffect, useState } from "react"

type User = Awaited<ReturnType<typeof getCurrentUser>>

interface AuthContextType{
    user:User | null,
    isLogedin:boolean,
    setIsLogedin:React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthContextPovider=({children}:{children: React.ReactNode})=>{
    const [user,setUser] = useState< User | null>(null)
    const [isLogedin,setIsLogedin]=useState<boolean>(false)
    useEffect(()=>{
        const fetchCurrentUser=async()=>{
            try{
                const currentUser:User=await getCurrentUser();
                setUser(currentUser);
            }
            catch(err){
                console.log(err)
            }
        }
        if(isLogedin)fetchCurrentUser()
    },[isLogedin])
    return(<AuthContext.Provider value={{user,isLogedin,setIsLogedin}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuthContext=()=>useContext(AuthContext)