import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import { useState, useEffect } from "react";
import JNNCE from "../assets/images/JNNCE-LOGO.png";
import IEEE from "../assets/images/IEEE-ISE-LOGO.png";

export default function Navbar1({ onPreviousEventsClick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-gray-900/70 backdrop-blur-md shadow-lg py-6 px-8 navbar-blur"
                : "bg-gray-900 bg-opacity-90 py-8 px-10"
                }`}
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <NavbarBrand className="flex items-center">
                        <img src={IEEE} alt="IEEE logo" className="w-32 h-12 mr-2 " />
                        <p
                            className={`font-bold text-inherit ml-2 transition-all duration-300 text-gray-400 hover:text-white focus:outline-none ${isScrolled ? "text-sm" : "text-lg"
                                }`}
                        >
                        </p>
                    </NavbarBrand>
                </div>

                <div className="sm:hidden">
                    <img
                        src={JNNCE}
                        alt="JNNCE Logo"
                        className="w-12 h-16  mr-4"
                    />
                </div>

                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            ></path>
                        </svg>
                    </button>
                </div>

                <NavbarContent
                    className={`${isMenuOpen ? "block" : "hidden"
                        } sm:flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0`}
                    justify="center"
                >
                    <NavbarItem className='text-gray-400 hover:text-white focus:outline-none'>
                        <Link color="foreground" href="#home">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='text-gray-400 hover:text-white focus:outline-none'>
                        <Link color="foreground" href="#about">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='text-gray-400 hover:text-white focus:outline-none'>
                        <Link color="foreground" href="#events">
                            Events
                        </Link>
                    </NavbarItem>
                    <NavbarItem className='text-gray-400 hover:text-white focus:outline-none'>
                        <button
                            onClick={onPreviousEventsClick}
                            className="text-gray-400 hover:text-white focus:outline-none"
                        >
                            Previous Events
                        </button>
                    </NavbarItem>
                    <NavbarItem className='text-gray-400 hover:text-white focus:outline-none'>
                        <Link color="foreground" href="#ContactUs">
                            Contact Us
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <div className="hidden sm:flex items-center">
                    <img
                        src={JNNCE}
                        alt="JNNCE Logo"
                        className="w-12 h-12 ml-4 "
                    />
                </div>
            </div>
        </Navbar>
    );
}