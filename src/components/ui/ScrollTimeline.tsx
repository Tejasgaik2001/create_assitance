import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollTimelineStep {
    number: number;
    title: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    features: string[];
}

interface ScrollTimelineProps {
    steps: ScrollTimelineStep[];
}

export const ScrollTimeline = ({ steps }: ScrollTimelineProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={containerRef} className="relative" style={{ height: `${steps.length * 100}vh` }}>
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-4xl mx-auto px-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        // Calculate scroll range for this card
                        const start = index / steps.length;
                        const end = (index + 1) / steps.length;

                        // Opacity: fade in, stay visible, fade out
                        const opacity = useTransform(
                            scrollYProgress,
                            [
                                Math.max(0, start - 0.1),
                                start,
                                start + 0.05,
                                end - 0.05,
                                end,
                            ],
                            [0, 0, 1, 1, 0]
                        );

                        // Y position: slide up from below, stay, slide up more
                        const y = useTransform(
                            scrollYProgress,
                            [
                                Math.max(0, start - 0.1),
                                start,
                                start + 0.05,
                                end - 0.05,
                                end,
                            ],
                            [100, 100, 0, 0, -100]
                        );

                        // Scale: subtle scale effect
                        const scale = useTransform(
                            scrollYProgress,
                            [
                                Math.max(0, start - 0.1),
                                start,
                                start + 0.05,
                                end - 0.05,
                                end,
                            ],
                            [0.9, 0.9, 1, 1, 0.95]
                        );

                        return (
                            <motion.div
                                key={step.number}
                                style={{
                                    opacity,
                                    y,
                                    scale,
                                    position: "absolute",
                                    inset: 0,
                                }}
                                className="flex items-center justify-center"
                            >
                                <div className="glass-card rounded-2xl p-6 md:p-8 shadow-2xl border border-accent/40 bg-background/80 backdrop-blur-xl w-full">
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
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                                    </div>
                                                    <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                                                </motion.li>
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
