import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

/**
 * Custom hook to detect if the current viewport is mobile-sized.
 * Updates dynamically when the window is resized.
 * @returns {boolean} true if viewport width is <= 768px
 */
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= MOBILE_BREAKPOINT;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

        const handleChange = (e) => {
            setIsMobile(e.matches);
        };

        // Set initial value
        setIsMobile(mediaQuery.matches);

        // Listen for changes
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;
