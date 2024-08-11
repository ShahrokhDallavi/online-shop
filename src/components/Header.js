import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Logo image
import LOGO from '../assets/LOGO.svg';

// Modal component
const Modal = ({ message, onClose }) => (
    <div className="flex items-center justify-center fixed inset-0 z-50">
        <div className="bg-black/50 absolute inset-0" onClick={onClose}></div>
        <div className="flex flex-col items-center bg-white/30 backdrop-blur rounded-xl p-4 shadow-lg z-10 mx-8 text-center relative">
            <button onClick={onClose} className="absolute right-6">✘</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" className='my-8'>
                <path fill="#11212D" d="m5.705 3.71l-1.41-1.42C1 5.563 1 7.935 1 11h1l1-.063C3 8.009 3 6.396 5.705 3.71m13.999-1.42l-1.408 1.42C21 6.396 21 8.009 21 11l2-.063c0-3.002 0-5.374-3.296-8.647M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22m7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.184 4.073 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707z" />
            </svg>
            <p className="font-bold tracking-wider pb-8">{message}</p>
        </div>
    </div>
);


const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div>
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <Link to="/products"><img src={LOGO} alt="logoWebsite" className='w-32' /></Link>
                    <button type="button" onClick={handleOpenModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='animate-wiggle'>
                            <path fill="#11212D" d="m5.705 3.71l-1.41-1.42C1 5.563 1 7.935 1 11h1l1-.063C3 8.009 3 6.396 5.705 3.71m13.999-1.42l-1.408 1.42C21 6.396 21 8.009 21 11l2-.063c0-3.002 0-5.374-3.296-8.647M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22m7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.184 4.073 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707z" />
                        </svg>
                    </button>
                </div>
            </div>
            {isModalOpen && <Modal message="Great suggestions!!! Up to 50% discount in 24 hours the future" onClose={handleCloseModal} />}
        </div>
    );
};

export default Header;