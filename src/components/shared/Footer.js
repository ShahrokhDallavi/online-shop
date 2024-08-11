import React from 'react';
import { Link } from 'react-router-dom';

// Logo
import logoWebsite from '../../assets/LOGO.svg'

const Footer = () => {
    return (
        <div className="container border-t border-borderColor mt-8 text-black">
            <div className="flex flex-col items-center text-center my-6">
                <Link to="/products"><img src={logoWebsite} alt="logoWebsite" /></Link>
                <p className="text-sm pt-4">Discover Your Style: Shop Smarter, Live Better!</p>
            </div>
            <div className="border-t border-borderColor/50 font-light text-xs text-center pb-24">
                <p className="pt-4">© 1403 . 2024 . Design and Develope by <a href='tel:09333203673' title='phone number' className="font-bold text-primaryColor">Shahrokh Dallavi</a></p>
            </div>
        </div>
    );
};

export default Footer;