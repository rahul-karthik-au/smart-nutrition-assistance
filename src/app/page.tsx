"use client";
import { Amplify } from 'aws-amplify';
import awsAmplifyConfig from '../aws-exports'
import { useState } from 'react';
import VerificationModal from '../components/VerificationModal';
import { confirmSignUp,signIn,signOut,signUp } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

Amplify.configure(awsAmplifyConfig);
export default function Home() {
  const router=useRouter();
  const [view,setView]=useState("initial")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [showModal, setShowModal] = useState(false);
  
  const handleSignup=async()=>{
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password: password,
    });
    console.log(isSignUpComplete,userId,nextStep)
    setShowModal(true)
  }
  const handleLogin=async()=>{
    await signOut();
    const {nextStep}=await signIn({
      username:email,
      password:password
    })
    if(nextStep.signInStep === "DONE")router.push("/dashboard")
  }

  const handleVerify = async(code: string)=>{
    setShowModal(false)
    const { isSignUpComplete, nextStep } = await confirmSignUp({
          username: email,
          confirmationCode: code
        });
        console.log(isSignUpComplete,nextStep)
  }
  const renderView=()=>{
    if(view==="initial"){
      return (<div className='entry'>
        <h1 className='view-heading'>Get Started Today</h1>
        <h2 className='view-heading2'>Join thousands of users who have transformed their nutrition habits with NutriSmart's personalized guidance.</h2>
        <button className='view-btn' onClick={()=>setView("signup")}>Create Your Account</button>
        <p className='view-btn-p'>Do you have an account? <button className='view-p-btn' onClick={()=>setView("signin")}>Log in</button></p>
      </div>)
    }
    else if(view==="signin"){
      return (<div>
        <h1 className='view-heading'>Log In</h1>
        <input type="text" id="email" name="email" className='view-input' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" id="password" name="password" className='view-input' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="view-btn" onClick={handleLogin}>Login</button>
        <p className='view-btn-p'>Don't have an account? <button className='view-p-btn' onClick={()=>setView("signup")}>Sign Up</button></p>
      </div>)
    }
    else{
      return (<div>
        <h1 className='view-heading'>Sign Up</h1>
        <input type="text" id="email" name="email" className='view-input' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" id="password" name="password" className='view-input' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input type="password" id="cpassword" name="password" className='view-input' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
        <button className="view-btn" onClick={handleSignup}>Sign Up</button>
        <p className='view-btn-p'>Do you have an account? <button className='view-p-btn' onClick={()=>setView("signin")}>Log in</button></p>
        {showModal && <VerificationModal isOpen={showModal} onClose={()=>setShowModal(false)} onVerify={handleVerify} />}      
        </div>)
    }
  }
  return (
    <>
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
        <div className="view">
          {renderView()}
        </div>
      </div>
    </>
  );
}
