import React from 'react';
import { Link } from 'react-router-dom';

// Image
import login from "../../assets/login.png"
import loginLogo from "../../assets/loginLogo.svg"

const loginBnner = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={login} alt='login banner' className='object-cover h-screen w-full'/>
            <img src={loginLogo} alt='login logo' className='absolute top-20 animate-pulse'/>
            <div className='absolute flex flex-col text-white bottom-20 px-5'>
                <h5 className='mb-2 font-bold text-xl tracking-wider'>Welcome to your store</h5>
                <p className='text-xs mb-4 tracking-wide leading-relaxed text-gray'>Discover Your Style: Shop Smarter, Live Better! Thank you for your trust and support!</p>
                <Link to='/login'>
                    <button className='rounded-full py-2 w-80 lg:w-full bg-white/15 backdrop-blur hover:border border-borderColor'>Log In</button>
                </Link>
                <Link to='/signup'>
                    <button className='rounded-full py-2 w-80 lg:w-full my-2 bg-white/15 backdrop-blur hover:border border-borderColor'>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default loginBnner;