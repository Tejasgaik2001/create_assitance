"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";

import { useTheme } from "@/hooks/useTheme";

const COLORS_TOP = ["#DD335C", "#c9687eff", "#e99badff", "#DD335C"];

export const AuroraBackground = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const { theme } = useTheme();
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color]);

    const isDark = theme === "dark";

    // Light base: white/bg-slate-50, Dark base: #020617
    const baseColor = isDark ? "#020617" : "#ffffff";
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${baseColor} 50%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className={`relative h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-500 ${isDark ? "bg-gray-950 text-gray-200" : "bg-slate-50 text-slate-800"
                } ${className || ""}`}
        >
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {children}
            </div>

            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars
                        radius={50}
                        count={isDark ? 2500 : 1000}
                        factor={4}
                        fade
                        speed={2}
                    />
                </Canvas>
            </div>
        </motion.section>
    );
};

export default AuroraBackground;
