import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MagnifiedDocTextProps {
    text: string;
    className?: string;
    containerClassName?: string;
}

export const MagnifiedDocText = ({ text, className, containerClassName }: MagnifiedDocTextProps) => {
    const mouseX = useMotionValue(Infinity);
    const words = text.split(" ");

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn("flex flex-wrap gap-[0.25em] cursor-default w-full", containerClassName)}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="flex whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <MagnifiedLetter mouseX={mouseX} key={charIndex} className={className}>
                            {char}
                        </MagnifiedLetter>
                    ))}
                    {/* Add space after word unless it's the last one, ensuring it doesn't break layout */}
                    <span className="inline-block">&nbsp;</span>
                </span>
            ))}
        </motion.div>
    );
};

const MagnifiedLetter = ({ mouseX, children, className }: { mouseX: any; children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect();
        return val - (bounds?.x || 0) - (bounds?.width || 0) / 2;
    });

    const scaleSync = useTransform(distance, [-150, 0, 150], [1, 2, 1]);
    const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.span
            ref={ref}
            style={{ scale }}
            className={cn("inline-block origin-bottom", className)}
        >
            {children}
        </motion.span>
    );
};
