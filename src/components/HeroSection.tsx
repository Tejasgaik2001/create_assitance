import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Volume2 } from "lucide-react";
import { useRef, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
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
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: videoY, scale: videoScale }}
      >
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </motion.div>

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

      {/* Sound toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-24 right-8 z-20 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background/80 transition-colors"
      >
        {isMuted ? <Volume2 className="w-5 h-5 text-muted-foreground" /> : <Play className="w-5 h-5 text-primary" />}
      </motion.button>

      <motion.div 
        className="container mx-auto px-6 py-24 md:py-32 relative z-10"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border mb-8"
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
              className="hero-headline"
            >
              <span className="block">Automate & Grow</span>
            </motion.h1>
            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="hero-headline"
            >
              <span className="block">Your Business with</span>
            </motion.h1>
            <motion.h1
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="hero-headline"
            >
              <span className="inline-block">
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Custom CRM & AI
                </span>
                <motion.span
                  className="inline-block w-1 h-14 md:h-16 lg:h-20 bg-primary ml-3 rounded-full"
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
            className="body-large max-w-3xl mx-auto mb-12"
          >
            We design, build and manage an integrated CRM and AI workforce that 
            captures leads, engages customers and scales your business—so you can 
            focus on what you do best.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" className="group shadow-xl shadow-primary/20">
                Book a Free Consultation
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="xl" className="backdrop-blur-sm bg-background/50">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 flex flex-col items-center gap-6"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
              Trusted by innovative businesses
            </p>
            <div className="flex items-center gap-12 flex-wrap justify-center">
              {["TechFlow", "GrowthHub", "ScaleUp", "InnovateCo"].map((company, i) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-xl font-semibold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors cursor-default"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

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
