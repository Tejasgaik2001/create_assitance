import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Cloud, Info, BarChart3, Smartphone, Building, Clock, TrendingUp, Users } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Businesses Served", duration: 2, icon: Building, tabLabel: "Growth", rightButton: { icon: TrendingUp, text: "View Growth" } },
  { value: 24, suffix: "/7", label: "AI Coverage", duration: 1.5, icon: Users, tabLabel: "Support", rightButton: { icon: Info, text: "AI Details" } },
  { value: 4, suffix: " weeks", label: "Average Launch Time", duration: 1, icon: Clock, tabLabel: "Speed", rightButton: { icon: Smartphone, text: "Timeline" } },
  { value: 50, suffix: "%", label: "More Appointments", duration: 1.8, icon: BarChart3, tabLabel: "Results", rightButton: { icon: TrendingUp, text: "Success Rate" } },
];

const CountUp = ({ value, duration, suffix, isVisible }: { value: number; duration: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, duration]);

  return <span className="tabular-nums">{count}{suffix}</span>;
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <section ref={ref} id="pricing" className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-accent/80 border border-primary text-sm font-bold uppercase tracking-widest mb-6"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 uppercase italic text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-accent"
          >
            Numbers That Speak
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.15
              }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              className="group relative bg-gradient-to-br from-background via-background to-background/80 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 w-full border border-border/40 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 transition-all duration-500"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Top section with icon and tab */}
                <div className="flex flex-wrap justify-between items-start mb-6 sm:mb-8 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20, rotate: -10 }}
                    animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -20, rotate: -10 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2 + index * 0.15
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 transition-all"
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent drop-shadow-lg" />
                  </motion.div>
                  <div className="flex gap-2">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                      transition={{
                        type: "spring",
                        delay: 0.3 + index * 0.15,
                        stiffness: 200,
                        damping: 15
                      }}
                      className="bg-gradient-to-r from-primary to-accent text-white px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                    >
                      {stat.tabLabel}
                    </motion.div>
                    <motion.button
                      initial={{ opacity: 0, y: -10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                      transition={{
                        type: "spring",
                        delay: 0.4 + index * 0.15,
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-muted/80 backdrop-blur-sm text-foreground/80 px-2 sm:px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 hover:bg-muted hover:text-foreground border border-border/40 shadow-md transition-all duration-300"
                    >
                      <Info size={14} className="text-primary" />
                      <span className="hidden xs:inline">Info</span>
                    </motion.button>
                  </div>
                </div>

                {/* Main number display with gradient */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                    delay: 0.5 + index * 0.15
                  }}
                  className="text-center mb-6 sm:mb-8"
                >
                  <div className="text-5xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent drop-shadow-2xl">
                    <CountUp value={stat.value} duration={stat.duration} suffix={stat.suffix} isVisible={isInView} />
                  </div>
                </motion.div>

                {/* Bottom section with buttons */}
                <div className="flex flex-wrap xs:flex-nowrap justify-between items-end gap-3">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      type: "spring",
                      delay: 0.6 + index * 0.15,
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full xs:w-auto justify-center bg-gradient-to-r from-background to-muted/50 backdrop-blur-sm text-foreground px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 border border-border/40 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                  >
                    <BarChart3 size={16} className="text-primary" />
                    <span className="text-foreground/90">{stat.label}</span>
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{
                      type: "spring",
                      delay: 0.7 + index * 0.15,
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full xs:w-auto justify-center bg-gradient-to-r from-background to-muted/50 backdrop-blur-sm text-foreground px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 border border-border/40 shadow-md hover:shadow-lg hover:border-accent/40 transition-all duration-300"
                  >
                    <stat.rightButton.icon size={16} className="text-accent" />
                    <span className="text-foreground/90">{stat.rightButton.text}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Orbs */}
      <motion.div
        animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15)_0%,transparent_70%)] -z-10"
      />
    </section>
  );
};

export default StatsSection;
