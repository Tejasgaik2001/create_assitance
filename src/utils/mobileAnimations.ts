/**
 * Mobile detection utility for disabling animations
 * Returns true if the device is mobile (width < 1024px)
 */
export const isMobileDevice = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 1024;
};

/**
 * Get animation props based on device type
 * On mobile: returns props that disable Framer Motion animations
 * On desktop: returns the original animation props
 */
export const getResponsiveAnimationProps = <T extends Record<string, any>>(
    desktopProps: T
): T | { initial: false } => {
    if (isMobileDevice()) {
        // Disable all Framer Motion animations on mobile
        return { initial: false } as any;
    }
    return desktopProps;
};

/**
 * Conditional animation variants
 * Returns variants on desktop, empty object on mobile
 */
export const getResponsiveVariants = <T extends Record<string, any>>(
    variants: T
): T | {} => {
    if (isMobileDevice()) {
        return {};
    }
    return variants;
};
