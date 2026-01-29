import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

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
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -80 : 80 }}
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
            <motion.div
                className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl border border-accent/30 bg-background/95 backdrop-blur-xl w-full cursor-pointer"
                animate={{
                    rotateX,
                    rotateY,
                    scale: rotateX !== 0 || rotateY !== 0 ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Glow effect on hover */}
                <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-transparent opacity-0 pointer-events-none"
                    animate={{ opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-accent/30"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        <span className="text-sm font-bold text-accent">Step {step.number}</span>
                    </motion.div>
                    <div
                        className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center shadow-lg"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        <Icon className="w-7 h-7 text-accent" />
                    </div>
                </div>

                {/* Content with staggered animations */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
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
                    style={{ transform: "translateZ(10px)" }}
                >
                    <motion.h3
                        className="text-2xl md:text-3xl font-black mb-2"
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
                    </motion.h3>

                    {step.subtitle && (
                        <motion.p
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
                        </motion.p>
                    )}

                    <motion.p
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
                    </motion.p>

                    {/* Features List with stagger */}
                    {step.features.length > 0 && (
                        <motion.ul
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
                                <motion.li
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
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export const VerticalTimeline = ({ steps }: VerticalTimelineProps) => {
    return (
        <div className="relative py-10">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent transform -translate-x-1/2" />

            {/* Animated glowing dot that follows scroll (decorative) */}
            <motion.div
                className="absolute left-1/2 top-0 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 shadow-lg shadow-accent/50"
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
            <div className="space-y-16 md:space-y-24">
                {steps.map((step, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={step.number}
                            className="relative grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] gap-4 items-center"
                        >
                            {/* Left side content */}
                            <div className={`${isLeft ? 'block' : 'hidden md:block'} ${!isLeft ? 'md:invisible' : ''}`}>
                                {isLeft && <TimelineCard step={step} index={index} isLeft={true} />}
                            </div>

                            {/* Center dot */}
                            <div className="hidden md:flex justify-center relative">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false, margin: "-100px" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15,
                                        delay: 0.2
                                    }}
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-accent/30 z-10"
                                >
                                    <span className="text-lg font-bold text-white">{step.number}</span>
                                </motion.div>
                            </div>

                            {/* Right side content */}
                            <div className={`${!isLeft ? 'block' : 'hidden md:block'} ${isLeft ? 'md:invisible' : ''}`}>
                                {!isLeft && <TimelineCard step={step} index={index} isLeft={false} />}
                            </div>

                            {/* Mobile view - show all cards in single column */}
                            <div className="block md:hidden col-span-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-accent/30">
                                        <span className="text-sm font-bold text-white">{step.number}</span>
                                    </div>
                                    <div className="flex-1 h-px bg-accent/30" />
                                </div>
                                <TimelineCard step={step} index={index} isLeft={false} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
