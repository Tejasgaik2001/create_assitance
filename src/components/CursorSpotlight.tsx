import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface CursorSpotlightProps {
    className?: string;
    size?: number;
    opacity?: number;
}

export const CursorSpotlight = ({
    className = "",
    size = 600,
    opacity = 0.15
}: CursorSpotlightProps) => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className={`pointer-events-none fixed inset-0 z-0 ${className}`}
            style={{
                background: `radial-gradient(${size}px circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / ${opacity}), transparent 40%)`,
                // @ts-ignore - CSS custom properties
                "--mouse-x": cursorXSpring,
                "--mouse-y": cursorYSpring,
            }}
        />
    );
};
