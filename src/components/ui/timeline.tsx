import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      className="relative"
    >
      <div className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-10">
        <div className="relative pl-10 md:pl-0">
          <div className="text-sm font-semibold text-foreground md:pt-0.5">
            {item.title}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background shadow-sm md:hidden" />
          <div className="absolute left-4 top-2 h-px w-6 bg-gradient-to-r from-primary to-accent md:hidden" />
          <div className="pl-10 md:pl-0">{item.content}</div>
        </div>
      </div>
    </motion.div>
  );
}
