import styles from "./Form.module.css"
type medicalInfo = {
    dietaryPreference:string[],
    foodAllergies:string[],
    additionalNotes:string
}
type medicalInfoPage = {
 data:medicalInfo,
 update:(newdata:Partial<medicalInfo>)=>void
}

const medicalInfoPage=({data,update}:medicalInfoPage)=>{
    return(<>
            <div className={styles.heading}>Any Other Information We want to know</div>
            <div className={styles.marginBottom}>
                <label className={styles.medicalInfoLabel}>Diet Preference</label>
                <div className={styles.gridCheckBox}>
                {["Vegetarian", "Vegan", "Pescatarian", "Keto", "Paleo","No Restriction"].map((diet) => (
                        <label  key={diet} className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            value={diet}
                            checked={data.dietaryPreference.includes(diet)}
                            onChange={(e) => {
                            const isChecked = e.target.checked;
                            const updatedGoals = isChecked ? [...data.dietaryPreference, diet]: data.dietaryPreference.filter((d) => d !== diet);
                            update({ dietaryPreference: updatedGoals });
                            }} />{diet}
                        </label>
                    ))}
                    </div>
                </div>
            <div className={styles.marginBottom}>
            <label className={styles.medicalInfoLabel}>Food Allergies</label>
            <div className={styles.gridCheckBox}>
                {["Nuts","Milk","Eggs","Wheat","Soy","Fish","Sea Food","Other"].map((food) => (
                        <label key={food} className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            value={food}
                            checked={data.dietaryPreference.includes(food)}
                            onChange={(e) => {
                            const isChecked = e.target.checked;
                            const updatedGoals = isChecked ? [...data.dietaryPreference, food]: data.dietaryPreference.filter((f) => f !== food);
                            update({ dietaryPreference: updatedGoals });
                            }} />{food}
                        </label>
                    ))}
                    </div>
            </div>
            <div > 
                <label className={styles.medicalInfoLabel}>Additional Notes</label>
                <input id="firstname" className={styles.medicalInfoInput} type="text" value={data.additionalNotes} onChange={(e)=>update({additionalNotes:e.target.value})}></input>
            </div>
        </>)
}
export default medicalInfoPage;