import React from 'react';
import { signInWithFacebook, signInWithGithub, signInWithGoogle } from '../fire';
 const Login = (props) => {
    const {email,
        setEmail,
         password,
           setPassword,
             handleLogin,
              handleSignup,
               hasAccount,
                 setHasAccount,
                   emailError,
                     passwordError} = props;
     return (
        <section className="login">
            <div className="loginContainer">
                <label>UserName</label>
                <input type="text"
                id="email"
                 autoFocus 
                 required 
                 value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
                  <p className="errorMsg">{emailError}</p>
                  <label>Password</label>
                  <input type="password" 
                  id="password"
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="errorMsg">{passwordError}</p>
                  <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin} id="signin">Sign in</button>
                    
                        <p>Don't have an account ?
                         <span onClick={() => setHasAccount(!hasAccount)} >Sign up</span> </p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup} id="signup" >Sign up</button>
                        <p>
                            Have an Account ? 
                             <span onClick={() => setHasAccount(!hasAccount)}> Sign in</span></p>
                        </>
                    )}
                  </div>
                  <div>
                    <button  onClick = {signInWithGoogle} >
                      Continue with Goggle
                    </button>
                    </div>
                    <br>
                    </br>
                    <div>
                    <button onClick = {signInWithFacebook}>Continue with FaceBook</button>
                    </div>
                    <br>
                    </br>
                     <div>
                    <button onClick = {signInWithGithub}>Continue with Github</button>
                    </div> 
            </div>
        </section>
     );
 };
 export default Login; 