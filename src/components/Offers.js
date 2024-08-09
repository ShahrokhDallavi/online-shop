import React, { useState, useEffect } from 'react';

// Images
import box from '../assets/box.png';
import Amazings from '../assets/Amazings.svg'

const Offers = () => {

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
        <div className='px-20 mt-48'>
            <div className='flex bg-primaryColor w-full rounded-2xl'>
                <div className='flex flex-col justify-center items-center py-8 pr-8'>
                    <img src={Amazings} alt='Amazings text' className='w-20'/>
                    <img src={box} alt='box Amazings' className='w-36'/>
                    <div className='flex pt-8'>
                        <p className="text-xl font-bold text-black bg-gray rounded px-2 py-1">{seconds}</p>
                        <p className="text-xl font-bold mx-2 py-1"> : </p>
                        <p className="text-xl font-bold text-black bg-gray rounded px-2 py-1">{minutes}</p>
                        <p className="text-xl font-bold mx-2 py-1"> : </p>
                        <p className="text-xl font-bold text-black bg-gray rounded px-2 py-1 ">{hours}</p>
                    </div>
                    <p className='text-white mt-2 tracking-widest'>فقط تـا پایان امروز</p>
                </div>
            </div>
        </div>
    );
};

export default Offers;