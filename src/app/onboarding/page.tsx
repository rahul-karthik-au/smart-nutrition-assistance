"use client"
import { useState } from "react"
import  BasicInfo  from "@/components/BasicInfo"
import GoalsInfo from "@/components/GoalsInfo"
import MedicalInfo from "@/components/MedicalInfo"
import { useRouter } from "next/navigation"
import styles from './onboarding.module.css'

interface userData{
    firstname:string,
    lastname:string,
    age:number,
    gender:string,
    activityLevel:string,
    height:number,
    weight:number,
    fitnessGoals:string,
    targetCalorie:number,
    customeGoals:string,
    dietaryPreference:string[],
    foodAllergies:string[],
    additionalNotes:string
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
        lastname:"",
        age:0,
        gender:"",
        activityLevel:"",
        height:0,
        weight:0,
        fitnessGoals:"",
        targetCalorie:0,
        customeGoals:"",
        dietaryPreference:[],
        foodAllergies:[],
        additionalNotes:""
    })
    console.log(user)
    const updateData=(newdata: Partial<userData>)=>setUser(prev=>({...prev,...newdata}))
    return(
        <>
        <div className={styles.card}>
            <div>
            {step===0 && <BasicInfo data={user} update={updateData} />}
            {step===1 && <GoalsInfo data={user} update={updateData}  />}
            {step===2 && <MedicalInfo data={user} update={updateData} />}
            </div>
            <div className={styles.formfooter}>
                <div>{step!==0 && <button onClick={handleBack} className={styles.prevbtn}>Previous</button>}</div>
                <button onClick={handleNext} className={styles.nextbtn}>{step!==2?"Next":"Submit"}</button>
            </div>
        </div>
        </>
    )
}
export default onboardingPage