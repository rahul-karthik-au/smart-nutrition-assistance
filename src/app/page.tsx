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
  console.log(process.env.NEXT_PUBLIC_aws_project_region)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [code,setCode]=useState("")
  async function handleSubmit(){
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password: password,
    });
    console.log(isSignUpComplete,userId,nextStep)
  }
  async function final(){
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username: email,
      confirmationCode: code
    });
    console.log(isSignUpComplete,nextStep)
  }


  return (
    <>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>handleSubmit()}>Submit</button>
        <input type="text" id="confirmationCode" value={code} onChange={(e)=>setCode(e.target.value)} />Code:
        <button onClick={()=>final()} >Confirm</button>
      </div>
    </>
  );
}
