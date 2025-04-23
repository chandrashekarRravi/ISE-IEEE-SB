import React, { useState } from 'react';
import ieee from '../assets/images/ieee.jpg';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src="../assets/images/ieee.jpg" alt="ieee" className="h-8 w-8 mr-2" />
                        <div className="text-white font-bold text-xl">IEEE-ISE</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                Home
                            </a>
                            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                About
                            </a>
                            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                Services
                            </a>
                            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                        >
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                        Home
                    </a>
                    <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                        About
                    </a>
                    <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                        Services
                    </a>
                    <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;