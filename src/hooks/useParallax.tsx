import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxOptions {
  offset?: number;
  inputRange?: [number, number];
  outputRange?: [number, number];
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { offset = 50, inputRange = [0, 1], outputRange = [offset, -offset] } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, inputRange, outputRange);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return { ref, y, opacity, scale, scrollYProgress };
};

export const useMultiParallax = (count: number, baseOffset: number = 30) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const layers: MotionValue<number>[] = [];
  
  for (let i = 0; i < count; i++) {
    const offset = baseOffset * (i + 1) * 0.5;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    layers.push(useTransform(scrollYProgress, [0, 1], [offset, -offset]));
  }

  return { ref, layers, scrollYProgress };
};
