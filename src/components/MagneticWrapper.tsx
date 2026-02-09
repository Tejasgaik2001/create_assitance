import { m, HTMLMotionProps } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { ReactNode, useState, useEffect } from "react";
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
    const [isDesktop, setIsDesktop] = useState(false);

    // Check if screen is desktop (lg breakpoint: 1024px and above)
    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        // Initial check
        checkIsDesktop();

        // Listen for resize
        window.addEventListener('resize', checkIsDesktop);
        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    const magnetic = useMagneticEffect({ strength });

    return (
        <m.div
            className={cn("inline-block", className)}
            {...props}
            style={{
                ...style,
                // Only apply magnetic effect on desktop
                x: isDesktop ? magnetic.x : 0,
                y: isDesktop ? magnetic.y : 0
            }}
            onMouseMove={isDesktop ? magnetic.handleMouseMove : undefined}
            onMouseLeave={isDesktop ? magnetic.handleMouseLeave : undefined}
        >
            {children}
        </m.div>
    );
};
