import React from 'react';
import { ReloadCircleOutline, PlayCircleOutline } from 'react-ionicons';

const ComponentItem = props => {
    return (
        <>
            <div className='text-center'>
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