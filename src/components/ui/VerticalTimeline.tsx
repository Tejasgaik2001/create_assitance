import { m, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface TimelineStep {
    number: number;
    title: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    features: string[];
}

interface VerticalTimelineProps {
    steps: TimelineStep[];
}

// 3D Card Component with hover effect
const TimelineCard = ({
    step,
    index,
    isLeft
}: {
    step: TimelineStep;
    index: number;
    isLeft: boolean;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: false, margin: "-100px" });
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const Icon = step.icon;

    const isMobile = useIsMobile();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || isMobile) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate rotation (max 15 degrees)
        const rotateXValue = (mouseY / (rect.height / 2)) * -8;
        const rotateYValue = (mouseX / (rect.width / 2)) * 8;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <m.div
            ref={cardRef}
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -80 : 80 }}
            animate={isMobile ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -80 : 80 })}
            transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative perspective-1000"
            style={{ perspective: "1000px" }}
        >
            <m.div
                className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl border border-accent/30 bg-background/95 backdrop-blur-xl w-full cursor-pointer"
                animate={isMobile ? {} : {
                    rotateX,
                    rotateY,
                    scale: rotateX !== 0 || rotateY !== 0 ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: isMobile ? "flat" : "preserve-3d" }}
            >
                {/* Glow effect on hover */}
                <m.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-transparent opacity-0 pointer-events-none"
                    animate={{ opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                    <m.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-accent/30"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        <span className="text-sm font-bold text-accent">Step {step.number}</span>
                    </m.div>
                    <div
                        className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center shadow-lg"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        <Icon className="w-7 h-7 text-accent" />
                    </div>
                </div>

                {/* Content with staggered animations */}
                <m.div
                    initial="hidden"
                    animate={isMobile ? "visible" : (isInView ? "visible" : "hidden")}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.3,
                            }
                        }
                    }}
                    style={{ transform: isMobile ? "none" : "translateZ(10px)" }}
                >
                    <m.h3
                        className="text-2xl md:text-3xl font-bold mb-2"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15
                                }
                            }
                        }}
                    >
                        {step.title}
                    </m.h3>

                    {step.subtitle && (
                        <m.p
                            className="text-base text-accent font-medium mb-3"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15
                                    }
                                }
                            }}
                        >
                            {step.subtitle}
                        </m.p>
                    )}

                    <m.p
                        className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15
                                }
                            }
                        }}
                    >
                        {step.description}
                    </m.p>

                    {/* Features List with stagger */}
                    {step.features.length > 0 && (
                        <m.button
                            className="space-y-2"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.08
                                    }
                                }
                            }}
                        >
                            {step.features.map((feature, idx) => (
                                <m.li
                                    key={idx}
                                    className="flex items-start gap-2"
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 15
                                            }
                                        }
                                    }}
                                >
                                    <div className="mt-1 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                </m.li>
                            ))}
                        </m.button>
                    )}
                </m.div>
            </m.div>
        </m.div>
    );
};

export const VerticalTimeline = ({ steps }: VerticalTimelineProps) => {
    return (
        <div className="relative py-10">
            {/* Center vertical line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent transform -translate-x-1/2" />

            {/* Animated glowing dot - hidden on mobile */}
            <m.div
                className="hidden md:block absolute left-1/2 top-0 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 shadow-lg shadow-accent/50"
                animate={{
                    boxShadow: [
                        "0 0 10px rgba(var(--accent-rgb), 0.5)",
                        "0 0 20px rgba(var(--accent-rgb), 0.8)",
                        "0 0 10px rgba(var(--accent-rgb), 0.5)"
                    ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-24">
                {steps.map((step, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={step.number}
                            className="relative"
                        >
                            {/* Desktop view - alternating layout with timeline */}
                            <div className="hidden md:grid md:grid-cols-[1fr_60px_1fr] gap-4 items-center">
                                {/* Left side content */}
                                <div className={`${!isLeft ? 'invisible' : ''}`}>
                                    {isLeft && <TimelineCard step={step} index={index} isLeft={true} />}
                                </div>

                                {/* Center dot */}
                                <div className="flex justify-center relative">
                                    <m.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, margin: "0px" }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                            delay: 0.2
                                        }}
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-accent/30 z-10"
                                    >
                                        <span className="text-lg font-bold text-white">{step.number}</span>
                                    </m.div>
                                </div>

                                {/* Right side content */}
                                <div className={`${isLeft ? 'invisible' : ''}`}>
                                    {!isLeft && <TimelineCard step={step} index={index} isLeft={false} />}
                                </div>
                            </div>

                            {/* Mobile view - just cards, no timeline */}
                            <div className="block md:hidden">
                                <TimelineCard step={step} index={index} isLeft={false} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
