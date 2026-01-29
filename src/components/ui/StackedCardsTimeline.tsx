import { motion, useScroll, useTransform } from "framer-motion";
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
            <div className="sticky top-0 h-screen flex items-end justify-center overflow-hidden pb-20">
                <div className="w-full max-w-4xl mx-auto px-4 relative h-[600px]">
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

                        // Y position: Smoother transition curves
                        const y = useTransform(
                            scrollYProgress,
                            [
                                enterStart,
                                enterEnd,
                                exitStart,
                                exitEnd,
                            ],
                            [
                                300, // Start from bottom
                                0,   // Center
                                0,   // Stay centered
                                -400, // Exit to top
                            ]
                        );

                        // Opacity: Strict visibility - 0 when stacked, 1 when active
                        const opacity = useTransform(
                            scrollYProgress,
                            [
                                enterStart,
                                enterEnd - (cardDuration * 0.2), // Fade in strictly before settling
                                enterEnd,
                                exitStart,
                                exitEnd,
                            ],
                            [
                                0,  // Completely invisible in stack
                                1,  // Fully visible before settlement
                                1,  // Stay visible
                                1,  // Stay visible
                                0,  // Fade out
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
                                0.85, // Start smaller
                                1,    // Full size
                                1,    // Maintain size
                                0.95, // Exit scale
                            ]
                        );

                        // Z-index: Ensure strict layering
                        const zIndex = steps.length - index;

                        return (
                            <motion.div
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
                                        <motion.div
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-accent/30"
                                        >
                                            <span className="text-sm font-bold text-accent">Step {step.number}</span>
                                        </motion.div>
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center shadow-lg">
                                            <Icon className="w-7 h-7 text-accent" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-black mb-2">{step.title}</h3>
                                        <p className="text-lg text-accent font-medium mb-4">{step.subtitle}</p>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                                            {step.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-3">
                                            {step.features.map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                                    </div>
                                                    <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

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
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
