import React, { useState } from 'react';
import Slider from "react-slick";

function Filter({ setCategory }) {
    const [activeButton, setActiveButton] = useState("All"); // وضعیت فعال بودن دکمه‌ها

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 3.5,
        slidesToScroll: 1,
    };

    const handleClick = (category) => {
        setCategory(category);
        setActiveButton(category);
    };

    return (
        <div className="slider-container font-bold px-5 mb-6 text-sm">
            <Slider {...settings}>
                <button onClick={() => handleClick("All")} className={activeButton === "All" ? "text-secondaryColor font-black" : "text-black/50"}>All Product</button>
                <button onClick={() => handleClick("men's clothing")} className={activeButton === "men's clothing" ? "text-secondaryColor font-black" : "text-black/50"}>Men</button>
                <button onClick={() => handleClick("women's clothing")} className={activeButton === "women's clothing" ? "text-secondaryColor font-black" : "text-black/50"}>Women</button>
                <button onClick={() => handleClick("jewelery")} className={activeButton === "jewelery" ? "text-secondaryColor font-black" : "text-black/50"}>Jewelery</button>
                <button onClick={() => handleClick("electronics")} className={activeButton === "electronics" ? "text-secondaryColor font-black" : "text-black/50"}>Electronics</button>
            </Slider>
        </div>
    );
}

export default Filter;