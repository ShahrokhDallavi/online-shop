import React, { useState, useEffect } from 'react';

const Timer = () => {

    const initialTime = 86400;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            setTimeLeft(initialTime);
        }
    }, [timeLeft, initialTime]);

    const hours = Math.floor((timeLeft % 86400) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;  


    return (
        <div className='flex justify-between px-5 py-2 font-bold bg-secondaryColor text-white'>
            <p>Great offers up to</p>
            <div className='flex items-center justify-center'>
                <p className='bg-error rounded px-1'>{hours}</p>
                <p className='mx-1'> : </p>
                <p className='bg-error rounded px-1'>{minutes}'</p>
                <p className='mx-1'> : </p>
                <p className='bg-error rounded px-1'>{seconds}"</p>
            </div>
        </div>
    );
};

export default Timer;