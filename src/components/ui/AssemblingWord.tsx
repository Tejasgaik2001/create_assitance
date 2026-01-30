import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AssemblingWordProps {
    word: string;
    className?: string;
}

export const AssemblingWord = ({ word, className = "" }: AssemblingWordProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center 50%"],
    });

    return (
        <span ref={ref} className={`inline-flex items-center mx-1.5 whitespace-nowrap ${className}`}>
            {word.split("").map((letter, i) => {
                // Pseudo-random but deterministic offsets based on index
                const yOffset = i % 2 === 0 ? -15 : 15;
                const xOffset = i % 3 === 0 ? -10 : (i % 3 === 1 ? 10 : 0);
                const rotateStart = i % 2 === 0 ? -15 : 15;

                // Transform scroll progress to animation values
                // Scroll 0 -> 1 : Offsets -> 0, Opacity 0 -> 1
                const y = useTransform(scrollYProgress, [0, 1], [yOffset * 2, 0]);
                const x = useTransform(scrollYProgress, [0, 1], [xOffset * 2, 0]);
                const rotate = useTransform(scrollYProgress, [0, 1], [rotateStart, 0]);
                const opacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);
                const filter = useTransform(scrollYProgress, [0, 0.8], ["blur(8px)", "blur(0px)"]);

                return (
                    <motion.span
                        key={i}
                        style={{
                            y,
                            x,
                            rotate,
                            opacity,
                            filter
                        }}
                        className="inline-block"
                    >
                        {letter}
                    </motion.span>
                );
            })}
        </span>
    );
};
