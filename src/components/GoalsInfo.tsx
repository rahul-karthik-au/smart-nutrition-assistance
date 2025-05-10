import styles from "./Form.module.css"
type goalsInfo={
    fitnessGoals:string,
    targetCalorie:number,
    customeGoals:string,
}
type goalsInfoPage={
    data:goalsInfo,
    update:(newData: Partial<goalsInfo>)=> void
}
const goalsPage=({data,update}:goalsInfoPage)=>{
    return(<>
    <div className={styles.heading}>What are your Goals</div>
    <div className={styles.goalsContainer}>
        <div className={styles.marginBottom}>
            <label>Fitness Goal</label>
            <select id="fitnessgoal" value={data.fitnessGoals} onChange={(e) =>update({fitnessGoals:e.target.value})}>
                <option>--select option--</option>
                <option>Weight Loss</option>
                <option>Weight Gain</option>
                <option>Maintain Current Weight</option>
                <option>Build Muscle/Strength</option>
                <option>Manage Health Condition</option>
            </select>
        </div>
        <div className={styles.marginBottom}>
            <label >Daily Targeted Calorie</label>
            <input id="targetcalorie" type="number" onChange={(e)=>update({targetCalorie:Number(e.target.value)})}></input>
        </div>
        <div className={styles.marginBottom}>
            <label>Custom Goals</label>
            <input id="firstname" type="text" value={data.customeGoals} onChange={(e)=>update({customeGoals:e.target.value})}></input>
        </div>
    </div>
    </>)
}
export default goalsPage