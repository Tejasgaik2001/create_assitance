import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = [
    { text: "Create Assistants", highlight: false },
    { text: "combines a powerful all‑in‑one CRM system,", highlight: false },
    { text: "24/7 AI voice and chat employees,", highlight: true },
    { text: "and hands‑on human support.", highlight: false },
    { text: "In", highlight: false },
    { text: "four weeks or less,", highlight: true },
    { text: "we'll implement your custom growth infrastructure and become your ongoing systems team.", highlight: false },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`inline ${word.highlight ? "text-primary font-semibold" : "text-foreground"}`}
              >
                {word.text}{" "}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
