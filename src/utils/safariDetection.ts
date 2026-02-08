/**
 * Safari Detection Utilities
 * Used to conditionally disable performance-heavy features on Safari iOS
 */

export const isSafari = (): boolean => {
    if (typeof window === 'undefined') return false;
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export const isMobile = (): boolean => {
    if (typeof window === 'undefined') return false;
    return /iphone|ipad|ipod|android/i.test(navigator.userAgent);
};

export const isSafariMobile = (): boolean => {
    return isSafari() && isMobile();
};

/**
 * Check if browser supports backdrop-filter
 */
export const supportsBackdropFilter = (): boolean => {
    if (typeof window === 'undefined' || !window.CSS) return false;
    return CSS.supports('backdrop-filter', 'blur(10px)') ||
        CSS.supports('-webkit-backdrop-filter', 'blur(10px)');
};

/**
 * Determine if animations should be enabled
 * Disables on Safari mobile to prevent render blocking
 */
export const shouldEnableAnimations = (): boolean => {
    return !isSafariMobile();
};
