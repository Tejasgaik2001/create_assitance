import * as React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export type TimelineItem = {
  title: React.ReactNode;
  content: React.ReactNode;
};

export function Timeline({ data }: { data: TimelineItem[] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative w-full">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-border/30 md:left-40" />
          <motion.div
            className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary to-accent md:left-40"
            style={{
              scaleY: lineScale,
              transformOrigin: "top",
            }}
          />

          <div className="space-y-14 py-2">
            {data.map((item, index) => (
              <TimelineRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const rowRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, {
    margin: "-40% 0px -40% 0px",
    once: false
  });

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0.4, y: 24 }}
      animate={{
        opacity: isInView ? 1 : 0.4,
        y: isInView ? 0 : 10,
        scale: isInView ? 1 : 0.98
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative"
    >
      <div className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-10">
        <div className="relative pl-10 md:pl-0">
          <motion.div
            className="text-sm font-semibold text-foreground md:pt-0.5"
            animate={{
              scale: isInView ? 1.05 : 1,
              color: isInView ? "var(--primary)" : "var(--foreground)"
            }}
            transition={{ duration: 0.3 }}
          >
            {item.title}
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background shadow-sm md:hidden"
            animate={{
              scale: isInView ? 1.3 : 1,
              backgroundColor: isInView ? "var(--primary)" : "var(--background)"
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute left-4 top-2 h-px w-6 bg-gradient-to-r from-primary to-accent md:hidden" />
          <motion.div
            className="pl-10 md:pl-0"
            animate={{
              filter: isInView ? "none" : "grayscale(30%)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{
                boxShadow: isInView
                  ? "0 0 30px rgba(var(--primary-rgb, 99, 102, 241), 0.15), 0 4px 20px rgba(0,0,0,0.1)"
                  : "0 1px 3px rgba(0,0,0,0.05)",
                borderColor: isInView ? "var(--primary)" : "var(--border)"
              }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden"
              style={{ borderWidth: "1px", borderStyle: "solid" }}
            >
              {item.content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
