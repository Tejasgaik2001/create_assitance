import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { useRef } from "react";
import heroVideo from "@/assets/hero.mp4";
import { handleBookingRedirect } from "@/utils/navigation";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  const textVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section ref={ref} className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background py-20">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-[120px]"
        />

        {/* Premium grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto w-full">
          {/* Left Column - Content */}
          <div className="text-left space-y-6 sm:space-y-8 max-w-3xl mx-auto lg:mx-0">
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-accent/30 backdrop-blur-sm shadow-lg shadow-primary/10"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent animate-pulse" />
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
                AI-Powered Growth Platform
              </span>
            </motion.div>

            {/* Enhanced Headline */}
            <div className="space-y-2 sm:space-y-4">
              <motion.h1
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] uppercase"
              >
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-2xl">
                  Automate
                </span>
                <div className="flex items-center gap-2 sm:gap-4 mt-1 sm:mt-2">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-foreground/10 italic font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl origin-left"
                  >
                    &
                  </motion.span>
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-2xl">
                    Scale
                  </span>
                </div>
              </motion.h1>

              <motion.h2
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-none relative inline-block"
              >
                <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Your Business
                </span>
                <motion.span
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.h2>
            </div>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium"
            >
              We build your unified <span className="text-foreground font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">AI workforce</span> that captures leads,
              engages customers, and transforms your business into an <span className="text-accent font-semibold italic">automated powerhouse</span>.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              {/* Primary CTA with enhanced effects */}
              <div className="relative group">
                {/* Animated glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-60"
                />

                <Button
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto relative z-10 rounded-full px-8 sm:px-12 h-14 sm:h-16 bg-gradient-to-r from-accent via-primary to-accent text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 active:scale-95 transition-all text-base sm:text-lg font-bold uppercase tracking-tight overflow-hidden border-none group"
                  onClick={handleBookingRedirect}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              {/* Secondary CTA with enhanced design */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-full border-2 border-border/60 bg-background/40 backdrop-blur-sm hover:border-accent/50 hover:bg-background/60 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/80 group-hover:text-accent">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </span>
                <motion.div
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent"
                />
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-muted-foreground">500+ businesses trust us</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Enhanced Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 60, rotate: 3 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0, rotate: 0 } : { opacity: 0, scale: 0.85, x: 60, rotate: 3 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.3
            }}
            className="relative w-full"
          >
            <div className="relative aspect-video rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-[0_50px_120px_-20px_rgba(0,0,0,0.3)] shadow-primary/30 border border-border/40 group">
              {/* Video with enhanced effects */}
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Enhanced overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

              {/* Floating Stats Card - Enhanced */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [-1, 1, -1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="absolute bottom-8 left-8 bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-xl border border-border/40 rounded-[2.5rem] p-6 shadow-2xl shadow-black/20 hover:shadow-accent/30 transition-all hidden sm:block"
              >
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
                <div className="relative">
                  <p className="text-5xl lg:text-6xl font-bold text-accent tracking-tighter mb-1 drop-shadow-lg">
                    24/7
                  </p>
                  <p className="text-xs font-bold text-foreground/70 uppercase tracking-widest leading-none">
                    COVERAGE
                  </p>
                </div>
              </motion.div>

              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/30 to-transparent rounded-[3rem] blur-xl" />
            </div>

            {/* Floating particles effect */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Hide on short screens */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 hover:opacity-70 transition-opacity cursor-pointer select-none hidden sm:flex"
      >
        <div className="w-px h-16 sm:h-20 bg-gradient-to-b from-primary via-accent to-transparent" />
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] text-muted-foreground">
          Scroll
        </span>
      </motion.div>

      {/* Additional CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
