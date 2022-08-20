import React from 'react';

const ComponentItem = props => {
    return (
        <>
            <div className='text-center my-5'>
                <div>
                    <span style={{ fontSize: 96 }}>
                        {new Date(props.counter * 1000).toISOString().slice(14, 19)}
                    </span>
                </div>
            </div>
        </>
    );
};

export default ComponentItem;