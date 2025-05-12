import React, { useState, FC } from 'react';
import styles from './AddFoodModal.module.css';
import { generateClient } from 'aws-amplify/api';
import { food } from '@/API'
import { createFood } from '@/graphql/mutations';
import { useAuthContext } from '@/context/AuthContext'


interface AddFoodModalProps {
    isOpen: boolean;
    onClose: () => void;
    onVerify: (code: string) => void;
  }
const AddFoodModal: FC<AddFoodModalProps> =({isOpen,onClose,onVerify})=>{
    
    const [foodname,setfoodname]=useState<string>('')
    const [calorie,setCalorie]=useState<number>(0)
    const [protein,setProtein]=useState<number>(0)
    const [carbs,setCarbs]=useState<number>(0)
    const [fats,setfats]=useState<number>(0)
    const [vitaminc,setvitaminc]=useState<number>(0)
    const [iron,setiron]=useState<number>(0)
    const [calcium,setcalcium]=useState<number>(0)
    const [potassium,setpotassium]=useState<number>(0)
    const client = generateClient<food>();
    const userCheck=useAuthContext();
    async function handleGenerate(){
        const result=await client.graphql({query:createFood,variables:{input:{email:userCheck?.user?.signInDetails?.loginId,userId:userCheck?.user?.userId,foodname:foodname,calorie:calorie,protein:protein,fats:fats,carbs:carbs,vitaminc:vitaminc,iron:iron,calcium:calcium,potassium:potassium}}})
        console.log(result)
        onClose();
    }
    return(<>
     <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
            <button onClick={onClose}>X</button>
        </div>
        <div className={styles.input_container}>
  <h2>Enter Food Nutritional Information</h2>
  
  <div className={styles.input_group}>
    <label>Food Name:</label>
    <input
      type="text"
      value={foodname}
      onChange={(e) => setfoodname(e.target.value)}
      placeholder="Enter food name"
    />
  </div>

  <div className={styles.input_group}>
    <label>Calorie:</label>
    <input
      type="number"
      onChange={(e) => setCalorie(Number(e.target.value))}
      placeholder="Enter calories"
    />
  </div>

  <div className={styles.input_group}>
    <label>Protein:</label>
    <input
      type="number"
      onChange={(e) => setProtein(Number(e.target.value))}
      placeholder="Enter protein"
    />
  </div>

  <div className={styles.input_group}>
    <label>Fats:</label>
    <input
      type="number"
      onChange={(e) => setfats(Number(e.target.value))}
      placeholder="Enter fats"
    />
  </div>

  <div className={styles.input_group}>
    <label>Carbs:</label>
    <input
      type="number"
      onChange={(e) => setCarbs(Number(e.target.value))}
      placeholder="Enter carbs"
    />
  </div>

  <div className={styles.input_group}>
    <label>Vitamin C:</label>
    <input
      type="number"
      onChange={(e) => setvitaminc(Number(e.target.value))}
      placeholder="Enter Vitamin C"
    />
  </div>

  <div className={styles.input_group}>
    <label>Iron:</label>
    <input
      type="number"
      onChange={(e) => setiron(Number(e.target.value))}
      placeholder="Enter iron"
    />
  </div>

  <div className={styles.input_group}>
    <label>Calcium:</label>
    <input
      type="number"
      onChange={(e) => setcalcium(Number(e.target.value))}
      placeholder="Enter calcium"
    />
  </div>

  <div className={styles.input_group}>
    <label>Potassium:</label>
    <input
      type="number"
      onChange={(e) => setpotassium(Number(e.target.value))}
      placeholder="Enter potassium"
    />
  </div>

  <button onClick={handleGenerate}>Generate Nutrient Content</button>
</div>
      </div>
    </div>
    </>)
}   
export default AddFoodModal;