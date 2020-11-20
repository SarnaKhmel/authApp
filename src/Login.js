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
            passwordError,
            firstName,
            setFirstName,
            lastName,
            setLastName
         } = props;

    return (
        <section className='login'>
           <div className='loginContainer'>
                <div className='btnContainer'>
                        {hasAccount ? ( 
                            <>
                            <label><strong>Login</strong></label>
                            <label>Email</label>
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
                            <button onClick={handleLogin}> Sign up </button>
                            <p>Don’t have an account yet? <span onClick={() => setHasAccount(!hasAccount)}>Register</span></p>
                            </>
                        
                            ) : (

                            <>
                            <label className='registerLabel'><strong>Register</strong></label>
                            <label>First name</label>
                            <input 
                                type="text" 
                                required 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label>Last name</label>
                            <input 
                                type="text" 
                                required 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />

                            <label>Email</label>
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

                            <button onClick={handleSingup}> Sign in </button>
                            <p>Already registered? <span onClick={() => setHasAccount(!hasAccount)}>Log in</span></p>
                            </>
                        )}
                </div>
           </div>
        </section>
    )
}

export default Login;