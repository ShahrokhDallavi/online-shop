import React from 'react';
import { Link } from 'react-router-dom';

// Image
import notfound from '../assets/Notfound.jpg'

const NotFound = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={notfound} alt='notfound' className='object-cover min-h-screen w-full'/>
            <div className="container absolute text-center bottom-44">
                <p className="text-primaryColor font-bold text-6xl my-4">404</p>
                <h1 className="mb-2 font-bold">Sorry! Page not found</h1>
                <p className="font-light text-sm">we couldnt find the page youre looking for.</p>
                <button className="rounded-2xl bg-secondaryColor py-2 px-4 mt-8">
                    <Link to="./products"><p className="text-white font-medium">Go back home</p></Link>
                </button >
            </div>
        </div>
    );
};

export default NotFound;