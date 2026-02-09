import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface StackedCardsStep {
    number: number;
    title: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    features: string[];
}

interface StackedCardsTimelineProps {
    steps: StackedCardsStep[];
}

export const StackedCardsTimeline = ({ steps }: StackedCardsTimelineProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div
            ref={containerRef}
            className="relative"
            style={{ height: `${(steps.length + 1) * 100}vh` }}
        >
            {/* Sticky container that holds all cards */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pb-10 pt-0">
                <div className="w-full max-w-4xl mx-auto px-4 relative h-[500px]">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        // Calculate scroll ranges for each card
                        // Add buffer to prevent flicker at transition points
                        const cardStart = index / steps.length;
                        const cardEnd = (index + 1) / steps.length;
                        const cardDuration = cardEnd - cardStart;

                        // Define phases
                        const enterStart = cardStart - 0.1; // Start entering earlier
                        const enterEnd = cardStart; // Fully centered
                        const exitStart = cardEnd; // Start exiting
                        const exitEnd = cardEnd + 0.1; // Fully exited

                        // Y position: Smoother transition curves with reduced travel distance
                        const y = useTransform(
                            scrollYProgress,
                            [
                                enterStart,
                                enterEnd,
                                exitStart,
                                exitEnd,
                            ],
                            [
                                150, // Start from bottom
                                0,   // Center
                                0,   // Stay centered
                                -200, // Exit to top
                            ]
                        );

                        // Opacity: Aggressive hiding of non-active cards
                        const opacity = useTransform(
                            scrollYProgress,
                            [
                                enterStart,
                                enterEnd - (cardDuration * 0.1), // Fade in fast
                                enterEnd,
                                exitStart,
                                exitStart + (cardDuration * 0.1), // Fade out immediately when next card starts
                            ],
                            [
                                0,   // Invisible in stack
                                1,   // Fully visible before settlement
                                1,   // Stay visible
                                1,   // Stay visible
                                0,   // Fade out immediately to clear way for next card
                            ]
                        );

                        // Scale: Smoother scale up
                        const scale = useTransform(
                            scrollYProgress,
                            [
                                enterStart,
                                enterEnd,
                                exitStart,
                                exitEnd,
                            ],
                            [
                                0.9,  // Start smaller
                                1,    // Full size
                                1,    // Maintain size
                                0.95, // Exit scale
                            ]
                        );

                        // Z-index: Ensure strict layering where active is always top
                        const zIndex = steps.length - index;

                        return (
                            <m.div
                                key={step.number}
                                style={{
                                    y,
                                    opacity,
                                    scale,
                                    zIndex,
                                    position: "absolute",
                                    inset: 0,
                                }}
                                className="flex items-center justify-center"
                            >
                                <div className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl border border-accent/40 bg-background/95 backdrop-blur-xl w-full">
                                    {/* Step Number Badge */}
                                    <div className="flex items-center justify-between mb-6">
                                        <m.div
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-accent/30"
                                        >
                                            <span className="text-sm font-bold text-accent">Step {step.number}</span>
                                        </m.div>
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center shadow-lg">
                                            <Icon className="w-7 h-7 text-accent" />
                                        </div>
                                    </div>

                                    {/* Content with staggered animations */}
                                    <m.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.1,
                                                    delayChildren: 0.2,
                                                }
                                            }
                                        }}
                                    >
                                        <m.h3
                                            className="text-3xl md:text-4xl font-bold mb-2"
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
                                                className="text-lg text-accent font-medium mb-4"
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
                                            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6"
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
                                            <m.ul
                                                className="space-y-3"
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
                                                        className="flex items-start gap-3"
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
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                                        </div>
                                                        <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                                                    </m.li>
                                                ))}
                                            </m.ul>
                                        )}
                                    </m.div>

                                    {/* Progress Indicator */}
                                    <div className="mt-8 flex items-center gap-2">
                                        {steps.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`h-1 rounded-full transition-all duration-300 ${idx === index
                                                    ? "w-8 bg-accent"
                                                    : "w-1 bg-muted-foreground/30"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </m.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
