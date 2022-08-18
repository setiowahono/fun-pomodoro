import React from 'react';
import { TimerOutline, ReloadCircleOutline, PlayCircleOutline } from 'react-ionicons';

const ComponentItem = props => {
    return (
        <>
            <div className='text-center'>
                <div>
                    <span style={{ fontSize: 96 }}>
                        {new Date(props.counter * 1000).toISOString().slice(14, 19)}
                    </span>
                </div>
                <div>
                    <ReloadCircleOutline width='28px' height='28px'
                        cssClasses={'m-2'}
                        style={{ cursor: 'pointer' }}
                        onClick={() => window.location.reload()} />
                    {props.started ? '' :
                        <PlayCircleOutline width='28px' height='28px'
                            cssClasses={'m-2'}
                            style={{ cursor: 'pointer' }}
                            onClick={props.start} />}
                </div>
            </div>
        </>
    );
};

export default ComponentItem;