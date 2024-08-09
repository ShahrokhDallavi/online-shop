import React, { useRef,useState } from 'react';
import Slider from 'react-slick';

// Images
import Clothingbanner from "../assets/Clothingbanner.jpg"
import Electronicsbanner from "../assets/Electronicsbanner.png"
import jewelbanner from "../assets/jewelbanner.jpg"
import timer from "../assets/timer.png"
import post from "../assets/post.png"

const Banner = () => {

    const [isHovered, setIsHovered] = useState(false);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000, // 5 seconds
        appendDots: dots => (
            <ul style={{ margin: "10px", padding:"25px"}}> {dots} </ul>
        ),
        responsive: [
            {
                breakpoint: 768, // تغییرات برای صفحه‌های با عرض کمتر از 768 پیکسل
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480, // تغییرات برای صفحه‌های با عرض کمتر از 480 پیکسل
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div className='mt-4 pb-8 px-4 grid grid-cols-2 lg:grid-cols-3 grid-rows-2 lg:grid-rows-2 gap-2'>
            <div className='col-span-2 row-span-2 relative'  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Slider {...settings} ref={sliderRef}>
                <img src={Clothingbanner} alt="Clothingbanner" title='Best New Collection Clothing For Mans and Womans' className='rounded-lg'/>
                <img src={Electronicsbanner} alt="Electronicsbanner" title='Electronics Day' className='rounded-lg' />
                <img src={jewelbanner} alt="jewelbanner" title='Endless beauty' className='rounded-lg' />
            </Slider>
            <button onClick={prevSlide} className='absolute bottom-4 lg:bottom-8 right-4 bg-white border border-borderColor rounded-full w-6 h-6 flex justify-center items-center' style={{visibility: isHovered ? 'visible' : 'hidden'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button onClick={nextSlide} className='absolute bottom-4 lg:bottom-8 right-12 bg-white border border-borderColor rounded-full w-6 h-6 flex justify-center items-center' style={{visibility: isHovered ? 'visible' : 'hidden'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            </div>
            <div className='lg:col-start-3'>
                <img src={timer} alt='timer' title='Up to 50% OFF' className='rounded-lg'/>
            </div>
            <div className='lg:col-start-3 lg:row-start-2 row-start-3 relative'>
                <img src={post} alt='post' title='Free Delivery' className='rounded-lg'/>
            </div>
        </div>
    );
};

export default Banner;