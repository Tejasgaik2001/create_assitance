import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ScrollToTopButton } from "./ScrollToTop";

interface SnapSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const SnapSection = ({ children, className, id }: SnapSectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "h-screen w-full flex items-center justify-center snap-start snap-always py-12 lg:py-0",
                className
            )}
        >
            <div className="w-full h-full flex items-center justify-center">
                {children}
            </div>
        </section>
    );
};

interface SnapContainerProps {
    children: ReactNode;
    className?: string;
}

export const SnapContainer = ({ children, className }: SnapContainerProps) => {
    return (
        <div
            className={cn(
                "h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth",
                className
            )}
            style={{ scrollBehavior: "smooth" }}
        >
            {children}
        </div>
    );
};

// Controlled snap scroll with animated transitions
interface AnimatedSnapContainerProps {
    children: ReactNode[];
    className?: string;
}

export const AnimatedSnapContainer = ({ children, className }: AnimatedSnapContainerProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for up, 1 for down
    const [isDesktop, setIsDesktop] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const goToSection = useCallback((index: number, scrollDirection: number) => {
        if (index < 0 || index >= children.length || isScrolling.current) return;

        isScrolling.current = true;
        setDirection(scrollDirection);
        setCurrentIndex(index);

        // Increased lock duration to prevent momentum scrolling from skipping sections
        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
    }, [children.length]);

    const handleWheel = useCallback((e: WheelEvent) => {
        if (!isDesktop) return;
        e.preventDefault();

        if (isScrolling.current) return;

        // Add a threshold to ignore minor scroll movements and prevent accidental skips
        if (Math.abs(e.deltaY) < 20) return;

        if (e.deltaY > 0) {
            goToSection(currentIndex + 1, 1);
        } else if (e.deltaY < 0) {
            goToSection(currentIndex - 1, -1);
        }
    }, [currentIndex, goToSection, isDesktop]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isDesktop || isScrolling.current) return;

        if (e.key === "ArrowDown" || e.key === "PageDown") {
            e.preventDefault();
            goToSection(currentIndex + 1, 1);
        } else if (e.key === "ArrowUp" || e.key === "PageUp") {
            e.preventDefault();
            goToSection(currentIndex - 1, -1);
        }
    }, [currentIndex, goToSection, isDesktop]);

    const handleDotClick = useCallback((index: number) => {
        if (isScrolling.current || index === currentIndex) return;
        const scrollDir = index > currentIndex ? 1 : -1;
        goToSection(index, scrollDir);
    }, [currentIndex, goToSection]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !isDesktop) return;

        container.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            container.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleWheel, handleKeyDown, isDesktop]);

    const slideVariants = {
        enter: (dir: number) => ({
            y: dir > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 1,
        }),
        center: {
            y: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: number) => ({
            y: dir > 0 ? "-100%" : "100%",
            opacity: 0,
            scale: 1,
        }),
    };

    // Render list for Mobile/Tablet
    if (!isDesktop) {
        return (
            <div className={cn("w-full flex flex-col", className)}>
                {children}
            </div>
        );
    }

    // Render Snap Scroll for Desktop
    return (
        <div
            ref={containerRef}
            className={cn("h-screen w-full overflow-hidden relative", className)}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        y: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
                        opacity: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
                    }}
                    className="h-screen w-full absolute inset-0 overflow-hidden"
                >
                    <div className="h-full w-full flex items-center justify-center relative overscroll-contain">
                        {children[currentIndex]}
                    </div>
                </motion.div>
            </AnimatePresence>
            <AnimatePresence>
                {currentIndex > 0 && (
                    <ScrollToTopButton onClick={() => goToSection(0, -1)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default SnapSection;
