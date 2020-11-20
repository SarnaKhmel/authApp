import React from 'react'

const Login = (props) => {

    const { 
            email,
            setEmail,
            password, 
            setPassword, 
            handleLogin, 
            handleSingup, 
            hasAccount, 
            setHasAccount, 
            emailError, 
            passwordError 
         } = props;

    return (
        <section className='login'>
           <div className='loginContainer'>
                <label>Username</label>
                <input 
                    type="text"
                    autoFocus 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type="text" 
                    required 
                    value={password}
                    onChange={(e) => setPassword (e.target.value)}
                />
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? ( 
                        <>
                        <button onClick={handleLogin}> Sign up </button>
                        <p>Don`t have ac  <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                        ) : (
                        <>
                        <button onClick={handleSingup}> Sign in </button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                     )}
                </div>
           </div>
        </section>
    )
}

export default Login;