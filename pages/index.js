import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Timer from '../components/Timer';
import { CloseOutline, CheckmarkOutline } from 'react-ionicons';

export default function Home() {
    const [started, setStarted] = useState(false);
    const [time, setTime] = useState(1500);
    const [timeBadge, setTimeBadge] = useState(1500);
    const [done, setDone] = useState(false);
    const [focus, setFocus] = useState('');
    const onChangeHandler = e => { setFocus(e.target.value) };

    function timerOption(selectedTime) {
        setTime(selectedTime);
        setTimeBadge(selectedTime);
    }

    const i = time;
    function decrease() {
        if (i > 0) {
            i--;
            setTime(i);
        } else if (i === 0) {
            setDone(true);
            alert('Done!');
        }
    }

    function start() {
        setStarted(true);
        setInterval(decrease, 1000);
    }

    return (
        <>
            <main className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <div style={{ maxWidth: 540 }}>
                    <Navbar
                        counter={time}
                        focus={focus} />
                    <Timer
                        started={started}
                        start={start}
                        counter={time} />
                    <div className='text-center mt-5 mb-3'>
                        <div style={{ fontSize: 18 }}>
                            <span className='m-2' onClick={() => timerOption(1500)} style={{ cursor: 'pointer' }}>
                                <span className={timeBadge === 1500 ? 'badge rounded-pill bg-dark' : ''}>25m</span>
                            </span>
                            <span className='m-2' onClick={() => timerOption(900)} style={{ cursor: 'pointer' }}>
                                <span className={timeBadge === 900 ? 'badge rounded-pill bg-dark' : ''}>15m</span>
                            </span>
                            <span className='m-2' onClick={() => timerOption(300)} style={{ cursor: 'pointer' }}>
                                <span className={timeBadge === 300 ? 'badge rounded-pill bg-dark' : ''}>5m</span>
                            </span>
                        </div>
                    </div>
                    <div className='text-center mb-3'>
                        <input
                            type='text'
                            className='form-control text-center'
                            placeholder='What are you focusing on?'
                            onChange={onChangeHandler}
                            value={focus}
                            readOnly={started ? true : false} />
                    </div>
                    {done ?
                        <div
                            className='text-center'
                            style={{ fontSize: 18, fontWeight: 'bold' }}>
                            <span>Done!</span>
                        </div> : ''}
                </div>
            </main>
        </>
    );
}