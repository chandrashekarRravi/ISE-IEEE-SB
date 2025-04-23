import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import chandra from '../assets/team/CHANDRU-01.jpg'
import sir from '../assets/team/pavan-sir.png'
import hod from '../assets/team/hod.jpg'
const About = () => {
    const teamMembers = [
        {
            name: 'Dr.Raghavendra R J',
            role: 'Associate Professor & Head,Dept.of IS&E',
            image: hod,
            socialLink: "https://linkedin.com/in/pavankumar"
        },
        {
            name: 'Dr. Pavan Kumar MP',
            role: 'Team Coordinator & Associate Professor of ISE-Dept',
            image: sir,
            socialLink: "https://linkedin.com/in/pavankumar"
        },
        {
            name: 'Chandra Shekar R',
            role: 'Developer,Designer & Member',
            image: chandra,
            socialLink: "https://www.linkedin.com/in/chandra-shekar6366189346"
        },
    ];

    return (
        <div id="about" className="bg-gray-900 text-white py-12 px-6">
            <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Welcome to the IEEE Student Branch at JNNCE! Our mission is to foster innovation, collaboration, and technical excellence among students.
                We are part of the world's largest technical professional organization, IEEE, which is dedicated to advancing technology for the benefit of humanity.
            </p>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto mt-4">
                At JNNCE, we aim to provide students with opportunities to enhance their technical skills, participate in global events, and connect with industry leaders.
                Join us to be part of a vibrant community that is shaping the future of technology!
            </p>

            <div className="mt-12">
                <h3 className="text-3xl font-bold text-center mb-6">Meet Our Team</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative bg-gray-800 rounded-lg shadow-lg p-6 w-64 text-center overflow-hidden group"
                        >
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-1 bg-gray-800 rounded-lg"></div>

                            <div className="relative z-10   ">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className=" rounded-full mx-auto mb-4 w-40 h-40 hover:scale-103 transition-transform duration-300"
                                />

                                <h4 className="text-[20px] font-bold">{member.name}</h4>

                                <p className="text-gray-400 text-[14px]">{member.role}</p>

                                <a
                                    href={member.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-500 hover:underline flex items-center justify-center mt-2 hover:text-indigo-700"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-2xl" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;