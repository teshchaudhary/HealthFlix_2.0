'use client'
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 border-2 border-red-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 bg-transparent"
                    style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
