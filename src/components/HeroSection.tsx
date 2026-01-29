import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { useRef } from "react";
import heroVideo from "@/assets/hero.mp4";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden pt-20 pb-16">
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs with parallax */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          style={{ y: orbY1 }}
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          style={{ y: orbY2 }}
          animate={{
            x: [0, -50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating particles with staggered parallax */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 4) * 18}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Content */}
          <motion.div 
            className="text-left"
            style={{ y: contentY, opacity }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 backdrop-blur-sm border border-border mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Business Growth</span>
            </motion.div>

            {/* Animated headline */}
            <div className="mb-8 overflow-hidden">
              <motion.h1
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="block">Automate & Grow</span>
              </motion.h1>
              <motion.h1
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="block">Your Business with</span>
              </motion.h1>
              <motion.h1
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="inline-block">
                  <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Custom CRM & AI
                  </span>
                  <motion.span
                    className="inline-block w-1 h-10 md:h-12 lg:h-14 bg-primary ml-2 rounded-full"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </span>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              We design, build and manage an integrated CRM and AI workforce that 
              captures leads, engages customers and scales your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="xl" className="group shadow-xl shadow-primary/20" asChild>
                  <a href="/book-a-call">
                    Book a Free Consultation
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="xl">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex flex-col gap-4"
            >
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Trusted by innovative businesses
              </p>
              <div className="flex items-center gap-8 flex-wrap">
                {["TechFlow", "GrowthHub", "ScaleUp", "InnovateCo"].map((company, i) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-lg font-semibold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors cursor-default"
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ y: videoY }}
            className="relative"
          >
            <motion.div 
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border bg-muted/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Video placeholder - Replace src with your video URL */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </motion.div>
              </div> */}
                  <video src={heroVideo} autoPlay loop muted/>
              
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl -z-10" />
            </motion.div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-2xl"
            >
              <p className="text-3xl font-bold text-primary mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">AI Coverage</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05, y: 5 }}
              className="absolute -top-4 -right-4 bg-foreground text-background rounded-2xl px-5 py-3 shadow-2xl"
            >
              <p className="text-2xl font-bold">4 weeks</p>
              <p className="text-xs opacity-80">to launch</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-1 h-2 bg-muted-foreground/50 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
