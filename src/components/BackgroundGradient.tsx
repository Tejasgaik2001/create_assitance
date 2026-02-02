import { motion } from "framer-motion";

const BackgroundGradient = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 dark:opacity-30"
                animate={{
                    x: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 dark:opacity-30"
                animate={{
                    x: [0, -50, 0],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 dark:opacity-20"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid pattern from CommandCenter */}
            <div
                className="absolute inset-0 bg-[linear-gradient(rgba(219,154,70,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(219,154,70,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(219,154,70,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(219,154,70,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100"
            />

            {/* Subtle vignettes to soften the edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-40" />
        </div>
    );
};

export default BackgroundGradient;
