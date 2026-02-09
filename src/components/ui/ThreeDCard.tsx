import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

// --- Card Component (3D Effect) ---
interface ThreeDCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
}

export const ThreeDCard = ({ title, description, icon: Icon, className }: ThreeDCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const isMobile = useIsMobile();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || isMobile) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <m.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={isMobile ? {} : {
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative h-96 w-full rounded-xl bg-gradient-to-br from-accent/10 to-white dark:from-slate-900 dark:to-slate-950 border border-accent/10 dark:border-white/5 p-8 shadow-[0_20px_50px_-20px_rgba(219,154,70,0.15)] transition-colors duration-500",
                className
            )}
        >
            <div
                style={isMobile ? {} : {
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white dark:bg-slate-900 shadow-lg border border-accent/5 dark:border-white/5"
            >
                <div className="flex flex-col items-center text-center p-6 gap-4">
                    <div className="p-4 rounded-full bg-accent/10 dark:bg-accent/20 text-accent mb-2 shadow-[0_0_15px_rgba(219,154,70,0.2)]">
                        <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white translate-z-10">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[250px]">
                        {description}
                    </p>
                </div>
            </div>
        </m.div>
    );
};
