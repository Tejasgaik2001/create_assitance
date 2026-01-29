import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

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
                "h-screen w-full flex items-center justify-center snap-start snap-always",
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
    const containerRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);
    const touchStartY = useRef(0);

    const goToSection = useCallback((index: number, scrollDirection: number) => {
        if (index < 0 || index >= children.length || isScrolling.current) return;

        isScrolling.current = true;
        setDirection(scrollDirection);
        setCurrentIndex(index);

        // Reset scrolling lock after animation (longer for slower animation)
        setTimeout(() => {
            isScrolling.current = false;
        }, 1000);
    }, [children.length]);

    const handleWheel = useCallback((e: WheelEvent) => {
        e.preventDefault();

        if (isScrolling.current) return;

        if (e.deltaY > 0) {
            // Scroll down - go to next section
            goToSection(currentIndex + 1, 1);
        } else if (e.deltaY < 0) {
            // Scroll up - go to previous section
            goToSection(currentIndex - 1, -1);
        }
    }, [currentIndex, goToSection]);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    }, []);

    const handleTouchEnd = useCallback((e: TouchEvent) => {
        if (isScrolling.current) return;

        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY.current - touchEndY;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swipe up - go to next
                goToSection(currentIndex + 1, 1);
            } else {
                // Swipe down - go to previous
                goToSection(currentIndex - 1, -1);
            }
        }
    }, [currentIndex, goToSection]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (isScrolling.current) return;

        if (e.key === "ArrowDown" || e.key === "PageDown") {
            e.preventDefault();
            goToSection(currentIndex + 1, 1);
        } else if (e.key === "ArrowUp" || e.key === "PageUp") {
            e.preventDefault();
            goToSection(currentIndex - 1, -1);
        }
    }, [currentIndex, goToSection]);

    const handleDotClick = useCallback((index: number) => {
        if (isScrolling.current || index === currentIndex) return;
        const scrollDir = index > currentIndex ? 1 : -1;
        goToSection(index, scrollDir);
    }, [currentIndex, goToSection]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: true });
        container.addEventListener("touchend", handleTouchEnd, { passive: true });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

    const slideVariants = {
        enter: (dir: number) => ({
            y: dir > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            y: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: number) => ({
            y: dir > 0 ? "-100%" : "100%",
            opacity: 0,
            scale: 0.95,
        }),
    };

    return (
        <div
            ref={containerRef}
            className={cn("h-screen w-full overflow-hidden relative", className)}
        >
            {/* Navigation dots */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
                {children.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={cn(
                            "w-3 h-3 rounded-full transition-all duration-400",
                            currentIndex === index
                                ? "bg-primary scale-125"
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        )}
                        aria-label={`Go to section ${index + 1}`}
                    />
                ))}
            </div>

            <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        y: { type: "spring", stiffness: 80, damping: 20, duration: 0.1 },
                        opacity: { duration: 0.1, ease: "easeInOut" },
                        scale: { duration: 0.1, ease: "easeInOut" },
                    }}
                    className="h-screen w-full absolute inset-0"
                >
                    {children[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default SnapSection;
