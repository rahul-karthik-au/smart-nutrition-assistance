"use client"
import { useAuthContext } from "@/context/AuthContext";
import { useRouter,usePathname } from "next/navigation";
import { useEffect } from "react";
import styles from "@/app/dashboard/dashboard.module.css"
import  photo  from "../../../public/approved.png"
import icon from "../../../public/ChatGPT Image May 10, 2025 at 08_53_01 PM.png"
import Image from "next/image";
import Link from 'next/link';

const navItems = [
    { label: 'Dashboard', href: '/dashboard'},
    { label: 'Meal Recommendations', href: '/mealrecommendation' },
    { label: 'Nutrition Tracker', href: '/nutritiontracker' },
    { label: 'Meal Tracker',href: '/mealtracker'},
    { label: 'Recipes Finder',href: '/recipesfinder'},
    { label: 'Ai Assistance',href: '/aiassistance'}
  ];

const dashboardPage = () => {
    const router=useRouter();
    const pathname = usePathname();
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
    <div className={styles.dashboard_container}>
    <div className={styles.sidebar}>
        <div className={`${styles.sidebar_heading} ${styles.border_bottom}`}>
            <Image src={icon} alt="icon" width={50} />
            <h1>NutriSmart</h1>
        </div>
        <div className={`${styles.sidebar_profile} ${styles.border_bottom}`}>
            <Image src={photo} alt="profile pic" width={50} height={40} />
            <h1>ABC</h1>
        </div>
        <div className={`${styles.sidebar_navigation} ${styles.border_bottom}`}>
            <ul>
            {navItems.map((item)=>{return(<li key={item.label} className={`${pathname === item.href ? styles.active : ''}`} >
            <Link href={item.href}>{item.label}</Link>
            </li>)})} 
            </ul>
        </div>
        <div className={styles.sidebar_footer}>
            <div>Settings</div>
            <div>
                <button onClick={()=>handleClick()}>Sign Out</button>
            </div>
        </div>
    </div>
    <div className={styles.main}>
        <div className={`${styles.main_header} ${styles.border_bottom}`}>
            <div className={styles.heading}>DashBoard</div>
            <div className={styles.main_subheader}>
                <div className={styles.date}>{new Date().toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric'})}</div>
                <div><button className={styles.main_btn}>Add Food</button></div>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.card1}>Card 1</div>
            <div className={styles.card2}>Card 2</div>
            <div className={styles.card3}>Card 3</div>
        </div>
        <div className={styles.log_selector}>
            <ul className={styles.log_ul}>
                {["All","BreakFast","Lunch","Snack","Dinner"].map((log)=>{return(<li key={log}>{log}</li>)})}
            </ul>
            </div>
        <div className={styles.log}> Log</div>
     </div>
     </div>
    </>)
}

export default dashboardPage