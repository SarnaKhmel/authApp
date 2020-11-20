import React from 'react'
import timerImg from './Timer.svg'

//const timer = require('./Timer.svg);

const Timer = (props) => {
    const {handleLogout, descTime, setDescTime, mobileTime, setMobileTime} = props;
    return (
        <section className='timer'>
            <nav>
                <h1>Timer</h1>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className="timerContainer">
                <img src={timerImg} />
                <div className='timeIn'>
                    Time In
                </div>
            </div>
        </section>
    )
}

 export default Timer