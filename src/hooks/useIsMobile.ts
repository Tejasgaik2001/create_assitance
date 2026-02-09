import { useState, useEffect } from 'react';

/**
 * Hook to detect mobile devices based on viewport width
 * Uses 1023px breakpoint to match Tailwind's lg breakpoint
 * Handles SSR/hydration safely by defaulting to false
 */
export const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check on mount
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        // Initial check
        checkMobile();

        // Listen for resize events
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};
