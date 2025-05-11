"use client"
import { useAuthContext } from "@/context/AuthContext";
import { useRouter,usePathname } from "next/navigation";
import { useEffect } from "react";
import styles from "@/app/dashboard/dashboard.module.css"
import  photo  from "../../../public/approved.png"
import icon from "../../../public/ChatGPT Image May 10, 2025 at 08_53_01 PM.png"
import Image from "next/image";
import Link from 'next/link';
import { Gauge,gaugeClasses } from '@mui/x-charts/Gauge';
import { Calendar,Plus,CirclePlus,Sun,Beef,Milk,Banana,LayoutDashboard,Utensils,ChartPie,Salad,Bot,Settings,LogOut } from 'lucide-react'

const navItems = [
    { label: 'Dashboard', href: '/dashboard',icon: <LayoutDashboard className={styles.icon} size={30} /> },
    { label: 'Meal Recommendations', href: '/mealrecommendation',icon:<Utensils className={styles.icon} size={30} /> },
    { label: 'Nutrition Tracker', href: '/nutritiontracker',icon:<ChartPie className={styles.icon} size={30} /> },
    { label: 'Meal Tracker',href: '/mealtracker',icon:<Salad className={styles.icon} size={30} />},
    { label: 'Ai Assistance',href: '/aiassistance',icon:<Bot className={styles.icon} size={30} />}
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
            
            <Link href={item.href}>{item.icon}{item.label}</Link>
            </li>)})} 
            </ul>
        </div>
        <div className={styles.sidebar_footer}>
            <div><Settings className={styles.icon} size={30} />Settings</div>
            <div>
            <LogOut className={styles.icon} size={30} /><button onClick={()=>handleClick()}>Sign Out</button>
            </div>
        </div>
    </div>
    <div className={styles.main}>
        <div className={`${styles.main_header} ${styles.border_bottom}`}>
            <div className={styles.heading}>DashBoard</div>
            <div className={styles.main_subheader}>
                <div className={styles.date}>
                    <Calendar className={styles.icon}/>
                    <div className={styles.icon_content}>{new Date().toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric'})}</div></div>
                <div><button className={styles.main_btn}>
                    <Plus className={styles.icon} size={25} color="#f4faf3"/>
                    <p className={styles.icon_content}>Add Food</p>
                </button></div>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.card1}>
                <div className={styles.card1_header}>
                    <h1>Daily Calories</h1>
                    <p>0% of Goal</p>
                </div>
                <div className={styles.card1_chart}>
                    <Gauge width={200} height={150} value={60}
                    sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                          fontSize: 20,
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                          fill: '#4cae4c',
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                          fill: theme.palette.text.disabled,
                        },
                      })} />
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
                    <div className={styles.progress_bar}>
                        <div className={styles.fill} style={{ width: "50%" }}></div>
                    </div>
                </div>
                <div className={styles.card2_content}>
                    <div className={styles.card2_content_header}>
                        <h2>Carbs</h2>
                        <p>0g/120g</p>
                    </div>
                    <div className={styles.progress_bar}>
                        <div className={styles.fill} style={{ width: "20%" }}></div>
                    </div>
                </div>
                <div className={styles.card2_content}>
                    <div className={styles.card2_content_header}>
                        <h2>Fat</h2>
                        <p>0g/120g</p>
                    </div>
                    <div className={styles.progress_bar}>
                        <div className={styles.fill} style={{ width: "80%" }}></div>
                    </div>
                </div>
            </div>
            <div className={styles.card3}>
                <div className={styles.card3_header}>
                    <h1>Micronutrient</h1>
                    <div className={styles.micro}>
                        <div className={styles.micro_header}>
                            <Sun className={styles.micro_icon} size={40}  />
                            <div className={styles.micro_subheader}>
                                <h1>Vitamin C</h1>
                                <p>85%</p>
                            </div>
                        </div>
                        <div className={styles.micro_header}>
                            <Beef className={styles.micro_icon} size={40} />
                            <div className={styles.micro_subheader}>
                                <h1>Icon</h1>
                                <p>85%</p>
                            </div>
                        </div>
                        <div className={styles.micro_header}>
                            <Milk className={styles.micro_icon} size={40} />
                            <div className={styles.micro_subheader}>
                                <h1>Calcium</h1>
                                <p>85%</p>
                            </div>
                        </div>
                        <div className={styles.micro_header}>
                            <Banana className={styles.micro_icon} size={40} />
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
                    <button className={styles.card3_subheader_btn}>
                        <CirclePlus size={25} className={styles.icon} />
                        <p className={styles.icon_content}>add water</p></button>
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