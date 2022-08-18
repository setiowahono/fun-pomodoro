import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Timer from '../components/Timer';
import { CloseOutline, CheckmarkOutline } from 'react-ionicons';

export default function Home() {
    const [started, setStarted] = useState(false);
    const [time, setTime] = useState(1500);
    const [timeBadge, setTimeBadge] = useState(1500);
    const [btnIsDisabled, setBtnIsDisabled] = useState(true);
    const [j, setJ] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [displayScore, setDisplayScore] = useState(false);

    function timerOption(selectedTime) {
        setTime(selectedTime);
        setTimeBadge(selectedTime);
    }

    var i = time;
    function decrease() {
        if (i > 0) {
            i--;
            setTime(i);
        } else if (i === 0) {
            setDisplayScore(true);
            setBtnIsDisabled(true);
        }
    }

    function start() {
        setStarted(true);
        setBtnIsDisabled(false);
        setInterval(decrease, 1000);
    }

    return (
        <>
            <main className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <div style={{ maxWidth: 540 }}>
                    <Navbar />
                    <Timer started={started} start={start} counter={time} />
                    <div className='text-center my-3'>
                        <div className='d-flex justify-content-between' style={{ fontSize: 18 }}>
                            <div>Timer</div>
                            <div onClick={() => timerOption(1500)} style={{ cursor: 'pointer' }}>
                                <span className={timeBadge === 1500 ? 'badge rounded-pill bg-dark' : ''}>25m</span>
                            </div>
                            <div onClick={() => timerOption(900)} style={{ cursor: 'pointer' }}>
                                <span className={timeBadge === 900 ? 'badge rounded-pill bg-dark' : ''}>15m</span>
                            </div>
                            <div onClick={() => timerOption(300)} style={{ cursor: 'pointer' }}>
                                <span className={timeBadge === 300 ? 'badge rounded-pill bg-dark' : ''}>5m</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-3'>
                        {displayScore ?
                            <div className='d-flex justify-content-between border-top' style={{ fontSize: 18 }}>
                                <div>Done!</div>
                            </div> : ''}
                    </div>
                </div>
            </main>
        </>
    );
}