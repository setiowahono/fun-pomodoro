import React, { useState } from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Timer from '../components/Timer';

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

    const TimeBadge = props => {
        return (
            <>
                <span className='m-2' onClick={() => timerOption(props.timeBadge)} style={{ cursor: 'pointer' }}>
                    <span className={timeBadge === props.timeBadge ? 'badge rounded-pill bg-dark' : ''}>
                        {props.timeBadge / 60}m
                    </span>
                </span>
            </>
        )
    }

    return (
        <>
            <main className='d-flex align-items-center' style={{ width: '100%', height: '100vh' }}>
                <div className='mx-auto' style={{ maxWidth: 540 }}>
                    <Navbar
                        counter={time}
                        focus={focus} />
                    <Timer
                        counter={time} />
                    <div className='text-center mb-3'>
                        <div style={{ fontSize: 18 }}>
                            <TimeBadge timeBadge={1500} />
                            <TimeBadge timeBadge={900} />
                            <TimeBadge timeBadge={300} />
                        </div>
                    </div>
                    <div className='text-center mb-3'>
                        <input
                            type='text'
                            className='form-control text-center mx-auto'
                            placeholder='What are you focusing on?'
                            onChange={onChangeHandler}
                            value={focus}
                            readOnly={started ? true : false}
                            style={{ width: 250 }} />
                    </div>
                    <Button
                        started={started}
                        start={start} />
                    {done ?
                        <div
                            className='text-center mt-3'
                            style={{ fontSize: 18, fontWeight: 'bold' }}>
                            <span>Done!</span>
                        </div> : ''}
                </div>
            </main>
        </>
    );
}