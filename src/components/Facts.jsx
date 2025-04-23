import React from 'react';

const Facts = () => {
    const facts = [
        "IEEE is the world's largest technical professional organization.",
        "Has 39 technical Societies and eight Technical Councils representing a wide range of IEEE technical interests",
        "Has more than 6 million documents in the IEEE Xplore® Digital Library",
        "JNNCE was established in 1980 and is one of the premier engineering colleges in Karnataka.",
        "The Department of Information Science and Engineering focuses on cutting-edge technologies.",
        "IEEE promotes innovation and collaboration among students and professionals.",
        "JNNCE has a strong alumni network contributing to various industries worldwide."
    ];

    return (
        <div className="bg-gray-800 text-white py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Interesting Facts About IEEE</h2>
            <ul className="space-y-4">
                {facts.map((fact, index) => (
                    <li
                        key={index}
                        className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
                    >
                        {fact}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Facts;