import { m, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { handleBookingRedirect } from "@/utils/navigation";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const TestimonialSection = () => {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: isMobile, margin: "-20%" });

  return (
    <section ref={ref} className="min-h-screen w-full flex items-center justify-center bg-foreground text-background relative overflow-hidden py-20 sm:py-24">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Rating stars */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10">
            {[...Array(5)].map((_, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -20 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, type: "spring" }}
              >
                <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-primary text-primary" />
              </m.div>
            ))}
          </div>

          {/* Testimonial Quote */}
          <m.blockquote
            initial={{ opacity: 0, filter: isMobile ? "blur(0px)" : "blur(10px)", y: 30 }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: isMobile ? "blur(0px)" : "blur(10px)", y: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.3] sm:leading-[1.2] tracking-tight mb-8 sm:mb-12 uppercase italic"
          >
            "After implementing the system, we cut our response time from
            hours to seconds and booked{" "}
            <span className="text-gradient relative inline-block py-1 px-1">
              50+ more appointments
              <m.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 1, ease: "circOut" }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-accent origin-left"
              />
            </span>
            {" "}within the month."
          </m.blockquote>

          {/* Attribution */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10 sm:mb-14"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.25rem] sm:rounded-[1.5rem] bg-primary/10 mx-auto mb-4 sm:mb-6 flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary border border-primary/20">
              SM
            </div>
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-tight italic">Sarah Mitchell</p>
            <p className="text-background/50 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mt-1">CEO, Midwest Realty Group</p>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <MagneticWrapper strength={0.25}>
              <Button
                variant="hero"
                size="xl"
                className="w-full sm:w-auto relative bg-gradient-to-r from-accent via-primary to-accent text-white hover:scale-105 active:scale-95 py-3 transition-all duration-500 rounded-full px-8 sm:px-12 h-14 sm:h-auto whitespace-normal sm:whitespace-nowrap overflow-hidden border-none shadow-xl shadow-primary/20"
                onClick={handleBookingRedirect}
              >
                {/* Gold Shimmer effect - Desktop Only (infinite animation) */}
                {!isMobile && (
                  <m.div
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                )}
                <span className="relative z-10 flex items-center justify-center">
                  Claim Your Success
                  <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                </span>
              </Button>
            </MagneticWrapper>
          </m.div>
        </div>
      </div>

      {/* Decorative large quotes */}
      <m.div
        animate={isInView ? { opacity: 0.05, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-10 sm:top-20 left-4 sm:left-10 text-background pointer-events-none"
      >
        <Quote className="w-32 h-32 sm:w-64 sm:h-64 rotate-12" />
      </m.div>
    </section>
  );
};

export default TestimonialSection;
