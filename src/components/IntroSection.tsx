import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground">
            <span className="text-muted-foreground">Create Assistants</span> combines a powerful 
            all‑in‑one CRM system, 24/7 AI voice and chat employees, and hands‑on human support. 
            In <span className="text-primary font-semibold">four weeks or less</span>, we'll implement 
            your custom growth infrastructure and become your ongoing systems team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
