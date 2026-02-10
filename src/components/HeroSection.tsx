import { m, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import heroVideo from "@/assets/hero.mp4";
// Use public/ URL to match the <link rel="preload"> in index.html
const heroPoster = "/hero-visual-small.webp";
import { handleBookingRedirect, handleDemoRedirect } from "@/utils/navigation";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { isSafari, shouldEnableAnimations } from "@/utils/safariDetection";
import { useLazyVideo } from "@/hooks/useLazyVideo";
import { useIsMobile } from "@/hooks/useIsMobile";

// Safari detection helper
const isSafariBrowser = () => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Lazy load video to prevent blocking initial page load
  const { videoRef, isLoaded, isPlaying, play, pause } = useLazyVideo({
    autoplay: true,
    rootMargin: '100px' // Load when 100px from viewport
  });

  const isInView = useInView(ref, { once: isMobile });

  // Disable animations on mobile for performance
  const shouldAnimate = !isMobile && shouldEnableAnimations();

  const textVariants = {
    hidden: shouldAnimate ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 },
    visible: (i: number) => shouldAnimate ? ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as any,
      },
    }) : { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background py-20">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs - Desktop Only (heavy blur + infinite animation) */}
        {!isMobile && (
          <>
            <m.div
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[140px]"
            />
            <m.div
              animate={{
                x: [0, -40, 0],
                y: [0, -25, 0],
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-[120px]"
            />
          </>
        )}

        {/* Premium grid pattern - Desktop only (mask-image) */}
        {!isMobile && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" style={{ WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 110%)', maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 110%)' }} />
        )}
      </div>

      {/* Floating Demo Invitation - Desktop Only (infinite animation) */}
      {!isMobile && (
        <m.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-16 right-4 sm:top-24 sm:right-8 z-30 flex"
        >
          <m.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            onClick={handleDemoRedirect}
            className="group relative cursor-pointer"
          >
            {/* Animated Glow Surround */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl group-hover:opacity-100 opacity-50 transition-opacity" />

            <div className="relative flex items-center gap-4 bg-background/40 backdrop-blur-xl border border-accent/30 rounded-2xl p-4 shadow-2xl hover:border-accent/60 transition-all duration-300">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Play className="w-6 h-6 text-white fill-current" />
                </div>
                <m.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] leading-none mb-1">
                  Live Demo
                </span>
                <span className="text-sm font-bold text-foreground">
                  Demo Our AI
                </span>
              </div>

              <div className="ml-2 w-8 h-8 rounded-full border border-border/60 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </div>
            </div>
          </m.div>
        </m.div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-center max-w-7xl mx-auto w-full">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 max-w-3xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
            {/* Enhanced Badge */}
            <m.div
              initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? (isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, scale: 1 }) : (isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 20, scale: 0.9 })}
              transition={isMobile ? { duration: 0.3 } : { type: "spring", stiffness: 200, damping: 20 }}
              className={isMobile
                ? "inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-accent/30 shadow-lg shadow-primary/10"
                : "inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-accent/30 backdrop-blur-sm shadow-lg shadow-primary/10"
              }
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent animate-pulse" />
              <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
                AI-Powered Growth Platform
              </span>
            </m.div>

            {/* Enhanced Headline */}
            <div className="space-y-2 sm:space-y-4 flex flex-col items-center lg:items-start w-full">
              <m.h1
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight uppercase flex flex-wrap items-center justify-center lg:justify-start gap-x-2 sm:gap-x-4"
              >
                <span className="text-gradient uppercase drop-shadow-2xl">
                  Automate
                </span>
                <span className="text-gradient italic font-light opacity-60 px-2">
                  &{" "}
                </span>
                <span className="text-gradient uppercase drop-shadow-2xl">
                  Scale
                </span>
              </m.h1>

              <m.h2
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-none relative inline-block"
              >
                <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Your Business
                </span>
                <m.span
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </m.h2>
            </div>

            {/* Enhanced Description */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium mx-auto lg:mx-0"
            >
              We build your unified <span className="text-gradient font-bold">AI workforce</span> that captures leads,
              engages customers, and transforms your business into an <span className="text-gradient font-semibold ">automated powerhouse</span>.
            </m.p>

            {/* Enhanced CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              {/* Primary CTA with enhanced effects */}
              <div className="relative group w-full sm:w-auto">
                {/* Animated glow effect */}
                <m.div
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

                <MagneticWrapper strength={0.3} className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto relative z-10 rounded-full px-8 sm:px-10 h-12 sm:h-14 bg-gradient-to-r from-accent via-primary to-accent text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all text-sm sm:text-base font-bold uppercase tracking-tight overflow-hidden border-none group"
                    onClick={handleBookingRedirect}
                  >
                    {/* Shimmer effect - disabled on Safari mobile */}
                    <m.div
                      animate={shouldAnimate ? { x: ["-200%", "200%"] } : {}}
                      transition={shouldAnimate ? { duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 } : { duration: 0 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </MagneticWrapper>
              </div>

              {/* Secondary CTA with enhanced design - Mobile & Tablet Only */}
              <MagneticWrapper strength={0.2} className="w-full lg:hidden">
                <m.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDemoRedirect}
                  className="group relative px-8 sm:px-10 h-12 sm:h-14 rounded-full border-2 border-border/60 bg-background/40 backdrop-blur-sm hover:border-accent/50 hover:bg-background/60 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden w-full sm:w-auto flex items-center justify-center font-bold uppercase tracking-wider text-foreground/80 group-hover:text-accent text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                    Demo Our AI
                  </span>
                  <m.div
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent"
                  />
                </m.button>
              </MagneticWrapper>
            </m.div>

            {/* Trust indicators */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-muted overflow-hidden bg-gradient-to-tr from-accent/20 to-primary/20 flex items-center justify-center"
                    >
                      <img
                        src={`/avatars/avatar-${i + 10}.jpg`}
                        alt="User"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  ))}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                    +500
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Sparkles key={s} className="w-2.5 h-2.5 text-accent fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-tight">
                    Trusted by 500+ businesses
                  </span>
                </div>
              </div>
            </m.div>
          </div>

          {/* Right Column - Enhanced Visual */}
          <m.div
            initial={{ opacity: 0, scale: 0.85, x: 60, rotate: 3 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0, rotate: 0 } : { opacity: 0, scale: 0.85, x: 60, rotate: 3 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.3
            }}
            className="relative w-full max-w-full lg:scale-105 lg:translate-x-2"
          >
            <div className="relative aspect-video md:aspect-[16/10] lg:aspect-video rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-[0_50px_120px_-20px_rgba(0,0,0,0.3)] shadow-primary/30 border border-border/40 group">
              <video
                ref={videoRef}
                data-src={heroVideo}
                poster={heroPoster}
                muted
                loop
                playsInline
                webkit-playsinline="true"
                preload="none"
                controls
                autoPlay
                className={`w-full h-full object-cover relative ${isMobile ? 'z-50' : 'z-0'}`}
              />

              {/* Floating Stats Card - Enhanced - Hidden on mobile for better video control access */}
              {!isMobile && (
                <m.div
                  animate={shouldAnimate ? {
                    y: [0, -12, 0],
                    rotate: [-1, 1, -1]
                  } : {}}
                  transition={shouldAnimate ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="absolute top-16 left-4 bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-xl border border-border/40 rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 shadow-2xl shadow-black/20 hover:shadow-accent/30 transition-all flex z-20"
                >
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
                  <div className="relative">
                    <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-accent tracking-tighter mb-1 drop-shadow-lg">
                      24/7
                    </p>
                    <p className="text-xs font-bold text-foreground/70 uppercase tracking-widest leading-none">
                      COVERAGE
                    </p>
                  </div>
                </m.div>
              )}

              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/30 to-transparent rounded-[3rem] blur-xl" />
            </div>

            {/* Floating particles effect */}
            <m.div
              animate={shouldAnimate ? {
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              } : {}}
              transition={shouldAnimate ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"
            />
          </m.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Desktop only */}
      {!isMobile && (
        <m.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: isSafari() ? "auto" : "smooth" })}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 hover:opacity-100 hover:scale-110 active:scale-95 transition-all cursor-pointer select-none z-20 group"
        >
          <div className="w-px h-16 sm:h-20 bg-gradient-to-b from-primary via-accent to-transparent group-hover:from-accent group-hover:via-primary transition-colors" />
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] text-muted-foreground group-hover:text-accent font-montserrat">
            Scroll
          </span>
        </m.div>
      )}


    </section>
  );
};

export default HeroSection;
