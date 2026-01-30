import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  triggerOnce?: boolean;
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  triggerOnce = false
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, margin: "-10%" });

  const directions = {
    up: { y: 100, x: 0 },
    down: { y: -100, x: 0 },
    left: { x: 100, y: 0 },
    right: { x: -100, y: 0 },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay,
        ease: [0.65, 0, 0.35, 1], // Cinematic ease
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
