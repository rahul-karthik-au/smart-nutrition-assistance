"use client";
// import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsAmplifyConfig from '../aws-exports'
import { useState } from 'react';
import { signUp } from 'aws-amplify/auth';
import { confirmSignUp } from 'aws-amplify/auth';

Amplify.configure(awsAmplifyConfig);
export default function Home() {
  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")
  // const [code,setCode]=useState("")
  // async function handleSubmit(){
  //   const { isSignUpComplete, userId, nextStep } = await signUp({
  //     username: email,
  //     password: password,
  //   });
  //   console.log(isSignUpComplete,userId,nextStep)
  // }
  // async function final(){
  //   const { isSignUpComplete, nextStep } = await confirmSignUp({
  //     username: email,
  //     confirmationCode: code
  //   });
  //   console.log(isSignUpComplete,nextStep)
  // }
  function handleClick(){
    console.log("Clicked Creat Account")
  }

  return (
    <>
      {/* <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>handleSubmit()}>Submit</button>
        <input type="text" id="confirmationCode" value={code} onChange={(e)=>setCode(e.target.value)} />Code:
        <button onClick={()=>final()} >Confirm</button>
      </div> */}
      <div className='container'>
        <div className='intro'>
          <h1>NutriSmart</h1>
          <h2>Your Personal Nutrition Assistance</h2>
          <p>Track nutrition, get personalized meal recommendations, and achieve your health goals with AI-powered guidance.</p>
          <ul>
            <li><p>Personalized nutrition tracking</p></li>
            <li><p>AI-powered meal recommendations</p></li>
            <li><p>Smart meal planning assistant</p></li>
          </ul>
        </div>
        <div className='entry'>
          <h1>Get Started Today</h1>
          <h2>Join thousands of users who have transformed their nutrition habits with NutriSmart's personalized guidance.</h2>
          <button onClick={handleClick}>Create Your Account</button>
          <p>Do you have an account? <a href="">Sign in</a></p>
        </div>
      </div>
    </>
  );
}
