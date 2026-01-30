import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export const StaggeredText = ({ text, className, delay = 0 }: StaggeredTextProps) => {
    const letters = text.split("");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            }
        }
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.span
            className={cn("contents", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} className="inline-block relative">
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    );
};
