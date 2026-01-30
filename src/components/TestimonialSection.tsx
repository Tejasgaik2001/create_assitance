import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <section ref={ref} className="h-screen w-full flex items-center justify-center bg-foreground text-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Rating stars */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -20 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, type: "spring" }}
              >
                <Star className="w-8 h-8 fill-primary text-primary" />
              </motion.div>
            ))}
          </div>

          {/* Testimonial Quote */}
          <motion.blockquote
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(10px)", y: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-12 uppercase italic"
          >
            "After implementing the system, we cut our response time from
            hours to seconds and booked{" "}
            <span className="text-accent relative inline-block">
              50% more appointments
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 1, ease: "circOut" }}
                className="absolute -bottom-2 left-0 w-full h-2 bg-accent origin-left"
              />
            </span>
            {" "}within the month."
          </motion.blockquote>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-14"
          >
            <div className="w-20 h-20 rounded-[1.5rem] bg-primary/10 mx-auto mb-6 flex items-center justify-center text-3xl font-black text-primary border border-primary/20">
              SM
            </div>
            <p className="text-2xl font-black uppercase tracking-tight italic">Sarah Mitchell</p>
            <p className="text-background/50 font-black uppercase tracking-[0.2em] text-xs mt-1">CEO, Midwest Realty Group</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              variant="hero"
              size="xl"
              className="bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all hover:bg-accent hover:text-primary duration-300 rounded-full px-12"
              asChild
            >
              <a href="/book-a-call">
                Claim Your Success
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative large quotes */}
      <motion.div
        animate={isInView ? { opacity: 0.05, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-20 left-10 text-background pointer-events-none"
      >
        <Quote className="w-64 h-64 rotate-12" />
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
