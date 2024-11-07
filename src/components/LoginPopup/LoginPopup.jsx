import { Fragment,useState } from 'react';
import {assets} from '../../assets/assets.js';
import './LoginPopup.css';


const LoginPopup = ( {setShowLogin} ) => {
  const [currentState, setCurrentState] = useState("Log in");
  return (
    

     <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="cross-icon" />
            </div>
            <div className="login-popup-inputs">
               {/** <!-- if not work use normal way (condition) ?  T : F  --> */} 
                {currentState === "Sign Up" ?  <input type="text" placeholder="Your name" required />  : <Fragment> </Fragment>  }
                <input type="email" placeholder="Your email" required />
                <input type="password" placeholder="Your password" required />
            </div>
            <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p> By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currentState === "Log in" ? 
             <p>Create a new account? <span onClick={()=>  setCurrentState("Sign Up")  }> Click here</span> </p>
              :<p>Already have an account? <span onClick={()=> setCurrentState("Log in")   } > Log in here</span> </p> }
           
            
        </form>
     </div>
  )
}

export default LoginPopup;
