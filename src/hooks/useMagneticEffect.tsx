import { useMotionValue, useSpring } from "framer-motion";
import { useCallback } from "react";

interface MagneticEffectOptions {
    strength?: number;
    stiffness?: number;
    damping?: number;
}

export const useMagneticEffect = (options: MagneticEffectOptions = {}) => {
    const { strength = 0.3, stiffness = 150, damping = 15 } = options;

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness, damping };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) * strength);
        y.set((e.clientY - centerY) * strength);
    }, [x, y, strength]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return {
        x: springX,
        y: springY,
        handleMouseMove,
        handleMouseLeave
    };
};
