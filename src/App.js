import React, { useState, useEffect} from 'react';
import './App.css';
import fire from './fire';
import Login from "./Login"
import Timer from './Timer'

function App() {
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');
  const [descTime, setDescTime] = useState('');
  const [mobileTime, setMobileTime] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch(err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        });
  };

  const handleSingup = () => {
    clearErrors();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch(err.code) {
            case "auth/email-already-in-use ":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
      });
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged( user => {
      if(user) {
        clearInputs();
         setUser(user);
      }
      else {
        setUser("");
      }
    })
  }

  useEffect (() => {
    authListener();
  }, [])


  return (
    <div className="App">
      {user ? (
            <Timer 
            handleLogout={handleLogout} 
            descTime={descTime}
            setDescTime={setDescTime}
            mobileTime={mobileTime}
            setMobileTime={setMobileTime}
        />
      ) : (
            <Login 
            email={email}
            setEmail={setEmail}
            password={password} 
            setPassword={setPassword} 
            handleLogin={handleLogin} 
            handleSingup={handleSingup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}

            />
      )}
    
    
    </div>
  );
}

export default App;
