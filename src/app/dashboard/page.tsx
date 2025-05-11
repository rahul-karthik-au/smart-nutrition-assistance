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
            <div className={styles.card1}>
                <div className={styles.card1_header}>
                    <h1>Daily Calories</h1>
                    <p>0% of Goal</p>
                </div>
                <div className={styles.card1_chart}>
                    <Image src={icon} alt="chart" width={150} />
                </div>
                <div className={styles.card1_subheader}>
                    <div className={styles.card1_subheader_content}>
                        <h3>Consumed</h3>
                        <p>0</p>
                    </div>
                    <div className={styles.card1_subheader_content}>
                        <h3>Goal</h3>
                        <p>2500</p>
                    </div>
                </div>
                <div className={styles.card1_footer}>
                    <p>Remaining:<span> 2500 </span>kcal</p>
                </div>
            </div>
            <div className={styles.card2}>
                <div className={styles.card2_header}>
                    <h1>MacroNutrients</h1>
                    <p>Details</p>
                </div>
                <div className={styles.card2_content}>
                    <div className={styles.card2_content_header}>
                        <h2>Protein</h2>
                        <p>0g/120g</p>
                    </div>
                    <div>
                        bar
                    </div>
                </div>
                <div className={styles.card2_content}>
                    <div className={styles.card2_content_header}>
                        <h2>Carbs</h2>
                        <p>0g/120g</p>
                    </div>
                    <div>
                        bar
                    </div>
                </div>
                <div className={styles.card2_content}>
                    <div className={styles.card2_content_header}>
                        <h2>Fat</h2>
                        <p>0g/120g</p>
                    </div>
                    <div>
                        bar
                    </div>
                </div>
            </div>
            <div className={styles.card3}>
                <div className={styles.card3_header}>
                    <h1>Micronutrient</h1>
                    <div className={styles.micro}>
                        <div className={styles.micro_header}>
                            <Image src={icon} alt="chart" width={50} />
                            <div className={styles.micro_subheader}>
                                <h1>Vitamin C</h1>
                                <p>85%</p>
                            </div>
                        </div>
                        <div className={styles.micro_header}>
                            <Image src={icon} alt="chart" width={50} />
                            <div className={styles.micro_subheader}>
                                <h1>Vitamin C</h1>
                                <p>85%</p>
                            </div>
                        </div>
                        <div className={styles.micro_header}>
                            <Image src={icon} alt="chart" width={50} />
                            <div className={styles.micro_subheader}>
                                <h1>Vitamin C</h1>
                                <p>85%</p>
                            </div>
                        </div>
                        <div className={styles.micro_header}>
                            <Image src={icon} alt="chart" width={50} />
                            <div className={styles.micro_subheader}>
                                <h1>Vitamin C</h1>
                                <p>85%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card3_subheader}>
                    <h1> Water Intake</h1>
                    <div className={styles.card3_subheader_content}>
                        <p>bar</p>
                        <p>0L/2.5L</p>
                    </div>
                    <button className={styles.card3_subheader_btn}>add water</button>
                </div>
            </div>
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