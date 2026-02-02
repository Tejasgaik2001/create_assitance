import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export const MotionText = ({ text, className, delay = 0 }: MotionTextProps) => {
    return (
        <div className={cn("relative inline-block overflow-hidden", className)}>
            {/* Main Text with forward skew for speed */}
            <motion.span
                className="block relative z-10 text-accent transform origin-center"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: delay
                }}
            >
                {text}
            </motion.span>

            {/* Speed Trail / Highlight Pass */}
            <motion.div
                className="absolute inset-0 z-20 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-12deg]"
                initial={{ x: "-150%" }}
                animate={{ x: "150%" }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3, // Loop subtly with a pause
                }}
                style={{ mixBlendMode: 'overlay' }}
            />
        </div>
    );
};
