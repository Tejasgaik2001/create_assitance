import { motion, HTMLMotionProps } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticWrapperProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    strength?: number;
}

export const MagneticWrapper = ({
    children,
    strength = 0.25,
    className = "",
    style,
    ...props
}: MagneticWrapperProps) => {
    const magnetic = useMagneticEffect({ strength });

    return (
        <motion.div
            className={cn("inline-block", className)}
            {...props}
            style={{
                ...style,
                x: magnetic.x,
                y: magnetic.y
            }}
            onMouseMove={magnetic.handleMouseMove}
            onMouseLeave={magnetic.handleMouseLeave}
        >
            {children}
        </motion.div>
    );
};
