import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

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
      {/* Decorative elements with parallax */}
      <motion.div
        className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent origin-center"
        style={{ scaleY: lineScale }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent origin-center"
        style={{ scaleY: lineScale }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{ y: textY }}
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
