import React from 'react';
import { Link } from 'react-router-dom';

// Component
import ScrollToTop from '../helper/ScrollToTop';

const Connect = () => {
    return (
        <div className="text-primaryColor-700 relative">
            <ScrollToTop />
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                {/* <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{"filter: grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe> */}
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="font-semibold text-primaryColor-500 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1 text-secondaryColor">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="font-semibold text-primaryColor-500 tracking-widest text-xs">EMAIL</h2>
                            <Link className="text-secondaryColor leading-relaxed">shahrokhdallavi@gmail.com</Link>
                            <h2 className="font-semibold text-primaryColor-500 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="text-secondaryColor leading-relaxed">+98-933 320 3673</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-primaryColor-700 text-lg mb-1 font-medium ">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-primaryColor-700">Submit your request. we will contact you soon!</p>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-primaryColor-700">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-borderColor focus:border-secondaryColor focus:ring-2 focus:ring-primaryColor-400 outline-none text-primaryColor-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-primaryColor-700">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-borderColor focus:border-secondaryColor focus:ring-2 focus:ring-primaryColor-400 outline-none text-primaryColor-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="message" className="leading-7 text-sm text-primaryColor-700">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-borderColor focus:border-borderColor focus:ring-2 focus:ring-primaryColor-400 h-32 outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-primaryColor-500 py-2 px-6 hover:opacity-75 rounded text-lg">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Connect;