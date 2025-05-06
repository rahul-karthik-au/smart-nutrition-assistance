"use client"
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const dashboardPage = () => {
    const router=useRouter();
    const userCheck=useAuthContext();
    console.log(userCheck?.isLogedin);
    console.log(userCheck?.user);
    useEffect(()=>{
        if(userCheck?.isLogedin === false)router.push("/")
    },[])
    function handleClick(){
        console.log("Clicked Sign out")
        userCheck?.setIsLogedin(false)
        router.push("/")
    }
    return (<>
    <h1>DashBoard</h1>
    <button onClick={()=>handleClick()}>Sign Out</button>
    </>)
}

export default dashboardPage