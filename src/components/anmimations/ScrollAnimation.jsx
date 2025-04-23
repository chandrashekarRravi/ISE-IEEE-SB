import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, delay = 0 }) => {
    const ref = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

            if (isVisible) {
                element.classList.add('fade-in');
                element.classList.remove('fade-in-hidden');
                setTimeout(() => {
                    element.classList.remove('fade-in');
                }, 3000 + delay); // Keep the text visible for 3 seconds
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [delay]);

    return <div ref={ref} className="fade-in-hidden">{children}</div>;
};

export default ScrollAnimation;