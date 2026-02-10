import { useEffect, useRef, useState, RefObject } from 'react';

interface UseLazyVideoOptions {
    /**
     * Root margin for IntersectionObserver (default: '200px')
     * Loads video when it's 200px away from viewport
     */
    rootMargin?: string;
    /**
     * Threshold for IntersectionObserver (default: 0.1)
     */
    threshold?: number;
    /**
     * Whether to autoplay when loaded (default: false)
     */
    autoplay?: boolean;
}

interface UseLazyVideoReturn {
    /** Ref to attach to video element */
    videoRef: RefObject<HTMLVideoElement>;
    /** Whether video source has been loaded */
    isLoaded: boolean;
    /** Whether video is currently playing */
    isPlaying: boolean;
    /** Manually trigger video load */
    loadVideo: () => void;
    /** Play video */
    play: () => Promise<void>;
    /** Pause video */
    pause: () => void;
}

/**
 * Hook for lazy loading videos using IntersectionObserver
 * Optimized for iOS Safari performance
 * 
 * @example
 * ```tsx
 * const { videoRef, isLoaded, play } = useLazyVideo({ autoplay: true });
 * 
 * <video
 *   ref={videoRef}
 *   data-src="/video.mp4"
 *   poster="/poster.webp"
 *   preload="none"
 *   playsInline
 *   muted
 * />
 * ```
 */
export const useLazyVideo = (options: UseLazyVideoOptions = {}): UseLazyVideoReturn => {
    const {
        rootMargin = '200px',
        threshold = 0.1,
        autoplay = false
    } = options;

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const loadVideo = () => {
        const video = videoRef.current;
        if (!video || isLoaded) return;

        const src = video.getAttribute('data-src');
        if (src) {
            video.src = src;
            video.load();
            setIsLoaded(true);
        }
    };

    const play = async () => {
        const video = videoRef.current;
        if (!video) return;

        try {
            // Ensure video is loaded
            if (!isLoaded) {
                loadVideo();
                // Wait for video to be ready
                await new Promise((resolve) => {
                    video.addEventListener('loadeddata', resolve, { once: true });
                });
            }

            // Set required attributes for mobile playback
            video.setAttribute('playsinline', 'true');
            video.setAttribute('webkit-playsinline', 'true');

            // Check if Safari
            const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            
            if (isSafariBrowser) {
                // Safari: Always muted for autoplay
                video.muted = true;
                
                try {
                    await video.play();
                    setIsPlaying(true);
                    console.log('Safari: Video playing muted successfully');
                } catch (safariError) {
                    console.warn('Safari autoplay failed, trying fallback:', safariError);
                    
                    // Fallback 1: Try with different attributes
                    video.setAttribute('muted', 'true');
                    video.setAttribute('autoplay', 'true');
                    
                    try {
                        await video.play();
                        setIsPlaying(true);
                        console.log('Safari: Fallback autoplay successful');
                    } catch (fallbackError) {
                        console.warn('Safari fallback failed, adding user interaction listener:', fallbackError);
                        
                        // Fallback 2: Add user interaction listener
                        const playOnInteraction = () => {
                            video.muted = true;
                            video.play().then(() => {
                                setIsPlaying(true);
                                console.log('Safari: Video started after user interaction');
                            }).catch(e => console.log('Safari: Even interaction failed:', e));
                            
                            // Remove listeners after first successful play
                            document.removeEventListener('touchstart', playOnInteraction);
                            document.removeEventListener('click', playOnInteraction);
                        };
                        
                        // Listen for user interaction
                        document.addEventListener('touchstart', playOnInteraction, { once: true });
                        document.addEventListener('click', playOnInteraction, { once: true });
                        
                        // Try one more time with muted
                        video.muted = true;
                        await video.play().catch(() => {
                            console.log('Safari: All autoplay attempts failed, waiting for user interaction');
                        });
                    }
                }
            } else {
                // Non-Safari browsers: try with sound first
                video.muted = false;
                
                try {
                    await video.play();
                    setIsPlaying(true);
                } catch (soundError) {
                    // If autoplay with sound is blocked, try muted autoplay
                    console.log('Autoplay with sound blocked, trying muted autoplay');
                    video.muted = true;
                    await video.play();
                    setIsPlaying(true);
                    
                    // Let user know they can unmute using native controls
                    setTimeout(() => {
                        console.log('Video is playing muted. Use volume controls to enable audio.');
                    }, 1000);
                }
            }
        } catch (error) {
            console.warn('Video play failed:', error);
            setIsPlaying(false);
        }
    };

    const pause = () => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        setIsPlaying(false);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Create IntersectionObserver
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        loadVideo();

                        if (autoplay) {
                            play();
                        }

                        // Stop observing after loading
                        observerRef.current?.unobserve(video);
                    }
                });
            },
            {
                rootMargin,
                threshold
            }
        );

        observerRef.current.observe(video);

        return () => {
            observerRef.current?.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rootMargin, threshold, autoplay]);

    // Track playing state
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleEnded = () => setIsPlaying(false);

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        video.addEventListener('ended', handleEnded);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('ended', handleEnded);
        };
    }, []);

    return {
        videoRef,
        isLoaded,
        isPlaying,
        loadVideo,
        play,
        pause
    };
};
