import React from 'react';
import { TimerOutline, ReloadCircleOutline, PlayCircleOutline } from 'react-ionicons';

const ComponentItem = props => {
    return (
        <>
            <div onClick={props.started ? () => window.location.reload() : props.start}>
                <div>
                    <span style={{ fontSize: 96 }}>
                        {props.started ? props.counter : '0'}
                    </span>
                </div>
                {props.started ?
                    <div style={{ cursor: 'pointer' }}><ReloadCircleOutline width='28px' height='28px' /></div> :
                    <div style={{ cursor: 'pointer' }}><PlayCircleOutline width='28px' height='28px' /></div>}
            </div>
        </>
    );
};

export default ComponentItem;