import React from 'react';
import { Link } from 'react-router-dom';

// Images
import login from "../assets/login.png";
import loginLogo from "../assets/loginLogo.svg"

const Loading = () => {
    return (
        <div className='flex justify-center items-center text-center'>
            <img src={login} alt='login banner' className='object-cover h-screen w-full'/>
            <img src={loginLogo} alt='login logo' className='absolute top-20 animate-pulse w-24'/>
            <div className='fixed flex flex-col text-white bottom-0 px-4 py-6 bg-black/80 backdrop-blur rounded-t-3xl'>
                <h5 className='font-bold text-2xl tracking-wider'>Start Finding Your Version The Best Fashion Style</h5>
                <p className='text-sm my-4 leading-relaxed tracking-wider text-gray/50 mx-4'>Your appearance shows your quality so give your best for your best fashion</p>
                <Link to='/products'>
                    <button className='rounded-full py-3 w-full lg:w-full bg-primaryColor text-lg font-bold shadow-[0px_2px_20px_2px_rgba(255,91,0,0.3)]'>Get started</button>
                </Link>
            </div>
        </div>
    );
};

export default Loading;