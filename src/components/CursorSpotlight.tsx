import { m, useMotionValue, useSpring } from "framer-motion";
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
        let rafId: number | null = null;
        let lastX = -100;
        let lastY = -100;

        const moveCursor = (e: MouseEvent) => {
            lastX = e.clientX;
            lastY = e.clientY;

            if (rafId != null) return;
            rafId = window.requestAnimationFrame(() => {
                cursorX.set(lastX);
                cursorY.set(lastY);
                rafId = null;
            });
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            if (rafId != null) window.cancelAnimationFrame(rafId);
        };
    }, [cursorX, cursorY]);

    return (
        <m.div
            className={`pointer-events-none fixed inset-0 z-0 ${className}`}
            style={{
                background: `radial-gradient(${size}px circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / ${opacity}), transparent 40%)`,
                // @ts-expect-error - CSS custom properties
                "--mouse-x": cursorXSpring,
                "--mouse-y": cursorYSpring,
            }}
        />
    );
};
