"use client"
import { useState } from "react"
import  BasicInfo  from "@/components/BasicInfo"
import GoalsInfo from "@/components/GoalsInfo"
import MedicalInfo from "@/components/MedicalInfo"
import { useRouter } from "next/navigation"

interface userData{
    firstname:string,
    goals:string,
    allergies:string
}

const onboardingPage=()=>{
    const router=useRouter();
    const [step,setStep]=useState(0)
    const handleBack=()=>setStep((s)=>s-1)
    const handleNext=()=>{
        if(step===2){
            router.push("/dashboard")
        }
        else{
            setStep((s)=>s+1)
        }
    }
    const [user,setUser]=useState<userData>({
        firstname:"",
        goals:"",
        allergies:""
    })
    console.log(user)
    const updateData=(newdata: Partial<userData>)=>setUser(prev=>({...prev,...newdata}))
    return(
        <>
        <div>
        {step===0 && <BasicInfo data={user} update={updateData} />}
        {step===1 && <GoalsInfo data={user} update={updateData}  />}
        {step===2 && <MedicalInfo data={user} update={updateData} />}
        </div>
        <div>
            {step!==0 && <button onClick={handleBack}>Previous</button>}
            <button onClick={handleNext}>{step!==2?"Next":"Submit"}</button>
        </div>
        </>
    )
}
export default onboardingPage