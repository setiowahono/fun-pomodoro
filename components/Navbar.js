import Head from 'next/head';
import React from 'react';
import { TimerOutline, ReloadCircleOutline, PlayCircleOutline } from 'react-ionicons';

const ComponentItem = props => {
    return (
        <>
            <Head>
                <title>PomoWare</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet'></link>
            </Head>
            <div className='d-flex justify-content-between border-bottom'>
                <div className='flex-grow-1 align-items-center text-center'>
                    <h2 className='m-0' style={{ fontWeight: 900 }}>Pomo<span style={{ fontWeight: 400 }}>Ware</span></h2>
                </div>
            </div>
        </>
    );
};

export default ComponentItem;