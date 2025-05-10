import styles from "./Form.module.css"
type BasicInfo={
    firstname:string,
    lastname:string,
    age:number,
    gender:string,
    activityLevel:string,
    height:number,
    weight:number,
}
type basicInfoPage = {
    data:BasicInfo,
    update:(newdata:Partial<BasicInfo>)=>void} 

const basicInfoPage=({data,update}:basicInfoPage)=>{
    return(<>
    <div className={styles.container}>
        <div className={styles.heading}>Tell us about Yourself</div>
        <div className={styles.grid}>
            <div>
                <label>FirstName</label>
                <input id="firstname" type="text" value={data.firstname} onChange={(e)=>update({firstname:e.target.value})}></input>
            </div>
            <div>
                <label>LastName</label>
                <input id="lastname" type="text" value={data.lastname} onChange={(e)=>update({lastname:e.target.value})}></input>
            </div>
            <div>
                <label>Age</label>
                <input id="age" type="number" onChange={(e)=>update({age:Number(e.target.value)})}></input>
            </div>
            <div>
                <label>Gender</label>
                <select id="gender" value={data.gender} onChange={(e) =>update({gender:e.target.value})}>
                    <option>--select option--</option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label>Activity Level</label>
                <select id="activity-level" value={data.activityLevel} onChange={(e) =>update({activityLevel:e.target.value})}>
                    <option>--select option--</option>
                    <option>Sedentary (little to no exercise )</option>
                    <option>Light (1-2 times/week)</option>
                    <option>Moderate (3-4 times/week)</option>
                    <option>Intense (5-7 times/week)</option>
                </select>
            </div>
            <div>
                <label>Heigth(in cm)</label>
                <input id="height"type="number" onChange={(e)=>update({height:Number(e.target.value)})}></input>
            </div>
            <div>
                <label>Weight</label>
                <input id="weight" type="number" onChange={(e)=>update({weight:Number(e.target.value)})}></input>
            </div>
        </div>   
    </div>
    </>)
}
export default basicInfoPage