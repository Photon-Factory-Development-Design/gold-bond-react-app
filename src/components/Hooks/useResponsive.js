import { useState, useEffect } from 'react';

function useResponsive() {
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWidth(window.innerWidth);
        }
        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return {
        isMobile: width <= 767,
        isTablet: width >= 768 && width <= 1023,
        isDesktop: width >= 1024
    };
}

export default useResponsive;
