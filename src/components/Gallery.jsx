import React from 'react';
import nes from '../assets/images/nes.jpg';
import ieee1 from '../assets/images/ieee-1.jpg';
import ieee2 from '../assets/images/ieee-2.jpg';
import JNNCE from '../assets/images/JNNCE-LOGO.png'

const Gallery = () => {
    return (
        <div className="flex justify-center items-center h-12 mt-26 mb-10">
            <img
                src={nes}
                alt="Gallery Image 1"
                className="h-22 w-22 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
            />
        </div>
    );
};

export default Gallery;