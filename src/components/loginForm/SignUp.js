import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Image
import login from '../../assets/login.png'

// React toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from './validate';
import { notify } from './toast';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    })

    
    const [visiblePass, setVisiblePass] = useState(false);
    const [visibleConf, setVisibleConf] = useState(false);

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }

    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }
    
    const submitHandler = event => {
        event.preventDefault();
        notify()
        if (!Object.keys(errors).length) {
            notify("You signed in successfuly", "success")
        } else {
            notify("Invalide data!", "error")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })
        }
    }

    return (
        <div>
            <img src={login} alt='login banner' className='h-screen object-cover w-[600px] fixed top-0'/>
            <div className='bg-white/15 backdrop-blur mx-5 mt-8 mb-24 p-8 rounded-2xl text-black lg:mx-36'>
                <form onSubmit={submitHandler}>
                    <h2 className='text-2xl font-bold mb-8'>Sign Up</h2>
                    <div className='flex flex-col mb-8'>
                        <label className='text-sm mb-2'>Name</label>
                        <input type='text' name='name' placeholder='Full Name' value={data.name} onChange={changeHandler} onFocus={focusHandler} className='w-full bg-white rounded-2xl border border-borderColor focus:ring-2 focus:ring-error outline-none py-1 px-3 leading-8' />
                        {errors.name && touched.name && <span className='text-sm text-error px-1 mt-1'>{errors.name}</span>}
                    </div>
                    <div className='flex flex-col mb-8'>
                        <label className='text-sm mb-2'>Email</label>
                        <input type='text' name='email' placeholder='Email address' value={data.email} onChange={changeHandler} onFocus={focusHandler} className='w-full bg-white rounded-2xl border border-borderColor focus:ring-2 focus:ring-error outline-none py-1 px-3 leading-8' />
                        {errors.email && touched.email && <span className='text-sm text-error px-1 mt-1'>{errors.email}</span>}
                    </div>
                    <div className='flex flex-col mb-8'>
                        <label className='text-sm mb-2'>Password</label>
                        <input type={visiblePass ? "text" : "password"} name='password' placeholder='8 characters or more' value={data.password} onChange={changeHandler} onFocus={focusHandler} className='w-full bg-white rounded-2xl border border-borderColor focus:ring-2 focus:ring-error outline-none py-1 px-3 leading-8' />
                        <div className='absolute mt-10 right-12' onClick={() => setVisiblePass(!visiblePass)}>
                            {
                                visiblePass ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M2.54 4.71L3.25 4L20 20.75l-.71.71l-3.34-3.35c-1.37.57-2.87.89-4.45.89c-4.56 0-8.5-2.65-10.36-6.5c.97-2 2.49-3.67 4.36-4.82zM11.5 18c1.29 0 2.53-.23 3.67-.66l-1.12-1.13c-.73.5-1.6.79-2.55.79C9 17 7 15 7 12.5c0-.95.29-1.82.79-2.55L6.24 8.41a10.64 10.64 0 0 0-3.98 4.09C4.04 15.78 7.5 18 11.5 18m9.24-5.5C18.96 9.22 15.5 7 11.5 7c-1.15 0-2.27.19-3.31.53l-.78-.78C8.68 6.26 10.06 6 11.5 6c4.56 0 8.5 2.65 10.36 6.5a11.47 11.47 0 0 1-4.07 4.63l-.72-.73c1.53-.96 2.8-2.3 3.67-3.9M11.5 8C14 8 16 10 16 12.5c0 .82-.22 1.58-.6 2.24l-.74-.74c.22-.46.34-.96.34-1.5A3.5 3.5 0 0 0 11.5 9c-.54 0-1.04.12-1.5.34l-.74-.74c.66-.38 1.42-.6 2.24-.6M8 12.5a3.5 3.5 0 0 0 3.5 3.5c.67 0 1.29-.19 1.82-.5L8.5 10.68c-.31.53-.5 1.15-.5 1.82" />
                                </svg>
                            }
                        </div>
                        {errors.password && touched.password && <span className='text-sm text-error px-1 mt-1'>{errors.password}</span>}
                    </div>
                    <div className='flex flex-col mb-8'>
                        <label className='text-sm mb-2'>Confirm Password</label>
                        <input type={visibleConf ? "text" : "password"} name='confirmPassword' placeholder='Confirm Password' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} className='w-full bg-white rounded-2xl border border-borderColor focus:ring-2 focus:ring-error outline-none py-1 px-3 leading-8' />
                        <div className='absolute mt-10 right-12' onClick={() => setVisibleConf(!visibleConf)}>
                            {
                                visibleConf ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M2.54 4.71L3.25 4L20 20.75l-.71.71l-3.34-3.35c-1.37.57-2.87.89-4.45.89c-4.56 0-8.5-2.65-10.36-6.5c.97-2 2.49-3.67 4.36-4.82zM11.5 18c1.29 0 2.53-.23 3.67-.66l-1.12-1.13c-.73.5-1.6.79-2.55.79C9 17 7 15 7 12.5c0-.95.29-1.82.79-2.55L6.24 8.41a10.64 10.64 0 0 0-3.98 4.09C4.04 15.78 7.5 18 11.5 18m9.24-5.5C18.96 9.22 15.5 7 11.5 7c-1.15 0-2.27.19-3.31.53l-.78-.78C8.68 6.26 10.06 6 11.5 6c4.56 0 8.5 2.65 10.36 6.5a11.47 11.47 0 0 1-4.07 4.63l-.72-.73c1.53-.96 2.8-2.3 3.67-3.9M11.5 8C14 8 16 10 16 12.5c0 .82-.22 1.58-.6 2.24l-.74-.74c.22-.46.34-.96.34-1.5A3.5 3.5 0 0 0 11.5 9c-.54 0-1.04.12-1.5.34l-.74-.74c.66-.38 1.42-.6 2.24-.6M8 12.5a3.5 3.5 0 0 0 3.5 3.5c.67 0 1.29-.19 1.82-.5L8.5 10.68c-.31.53-.5 1.15-.5 1.82" />
                                </svg>
                            }
                        </div>
                        {errors.confirmPassword && touched.confirmPassword && <span className='text-sm text-error px-1 mt-1'>{errors.confirmPassword}</span>}
                    </div>
                    <div className='flex flex-col mb-10'>
                        <div>
                            <label>I accept terms of privacy policy</label>
                            <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} className='ml-2 accent-primaryColor'/>
                        </div>
                        {errors.isAccepted && touched.isAccepted && <span className='text-sm text-error px-1 mt-1'>{errors.isAccepted}</span>}
                    </div>
                    <div className='flex justify-between items-center'>
                        <Link to="/login" className='text-blue font-bold'>Log In</Link>
                        <button type='submit' className='bg-primaryColor text-white font-bold px-4 py-2 rounded-2xl'>Sign Up</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;