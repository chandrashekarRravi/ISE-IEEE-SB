import React from 'react';
import '../components/anmimations/GalleryText.css';
const GalleryText = () => {
    return (

        <div className=" text-center space-y-4 mb-4">
            <h2 className="text-orange-300 animate-bounce text-2xl font-bold text-shadow-lg">
                National Education Society®
            </h2>
            <h1 className="text-3xl text-emerald-50 animate-float TEXT-4xl font-bold text-shadow-lg">
                Jawaharlal Nehru New College of Engineering, Shivamogga
            </h1>
            <p className="text-emerald-50 text-2xl animate-fade-in mt-0 text-shadow-sm">
                Department of Information Science and Engineering
            </p>
        </div>
    );
};

export default GalleryText;