import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} IEEE-ISE Student Branch. All Rights Reserved.</p>
                <p>
                    <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                        Visit IEEE Official Website
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;