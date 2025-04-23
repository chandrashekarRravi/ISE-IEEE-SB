import React, { useState, useEffect } from 'react';
//import slider1 from '../assets/images/slider1.jpg';
import slider1 from '../assets/images/slider1.jpg';

import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';

const Carousel = () => {
    const images = [slider1, slider2, slider3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const changeBackgroundImage = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
        const interval = setInterval(changeBackgroundImage, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <div className="relative w-full h-[80vh] sm:h-[60vh] lg:h-[100vh] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            ></div>

            <div className="absolute inset-0  bg-opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 absolute bottom-4 right-4   text-white p-2 rounded">ISE</h1>
                {/*<p className="text-sm sm:text-lg lg:text-xl max-w-2xl absolute bottom-4 right-4   text-white bg-gray-800 p-2 rounded">
                    Empowering innovation and excellence in engineering and technology.
                </p>*/}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-gray-400'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;