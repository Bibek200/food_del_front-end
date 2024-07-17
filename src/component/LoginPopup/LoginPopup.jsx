import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrentState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className='login-contener'>
            <div className="login-titel">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState=="Login"?<></>:<input type="text" placeholder="Username" required/>}
                
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required />
            </div> 
            <button type="submit">{currState === "Sing Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
               <input type="checkbox" required />
               <p>By continuing , i agree to the trems of use & privecy policy.</p>
            </div>
            {currState === "Login"
               ?<p>Create a now account? <span  onClick={()=>setCurrentState("Sing Up")}>Click here</span></p>
              :<p>Already have na account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }

        </form>
    </div>
  )
}

export default LoginPopup
