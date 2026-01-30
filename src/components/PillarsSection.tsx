import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layers, Bot, HeadphonesIcon, ArrowUpRight } from "lucide-react";
import crmDashboard from "@/assets/crm-dashboard.jpg";
import aiVoice from "@/assets/ai-voice.jpg";
import automation from "@/assets/automation.jpg";

const pillars = [
  {
    icon: Layers,
    title: "System Integration & Automation",
    description:
      "We build a unified CRM, marketing automation and sales platform to capture and manage every lead. Eliminate manual spreadsheets and disjointed tools; see all conversations, pipelines and reports in one dashboard.",
    number: "01",
    color: "from-blue-500/20 to-cyan-500/20",
    image: crmDashboard,
  },
  {
    icon: Bot,
    title: "AI Voice & Chat Assistants",
    description:
      "Deploy AI employees who answer calls, chat with website visitors and text leads back within seconds, 24/7. They learn your business rules and FAQs to book appointments, qualify prospects and nurture follow‑ups.",
    number: "02",
    color: "from-violet-500/20 to-purple-500/20",
    image: aiVoice,
  },
  {
    icon: HeadphonesIcon,
    title: "Managed Service & Support",
    description:
      "Our team handles everything from initial setup to continuous optimisation. Launch your system in as little as four weeks with personalised onboarding and training, then enjoy ongoing updates and strategy.",
    number: "03",
    color: "from-orange-500/20 to-red-500/20",
    image: automation,
  },
];

const PillarCard = ({ pillar, index, isSectionInView }: { pillar: typeof pillars[0]; index: number; isSectionInView: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isSectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.15
      }}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
      className="group relative h-full"
    >
      <div className="relative h-full rounded-2xl bg-gradient-to-br from-background via-background to-background/95 border border-border/40 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden">

        {/* Clearer background image with better opacity */}
        <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
          <img
            src={pillar.image}
            alt=""
            className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-1000"
          />
        </div>

        {/* Enhanced gradient overlay with better visibility */}
        <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Card content */}
        <div className="relative z-10 p-8 h-full flex flex-col">

          {/* Large number badge - more visible */}
          <div className="flex items-start justify-between mb-6">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 text-2xl font-black text-accent shadow-md backdrop-blur-sm"
            >
              {pillar.number}
            </motion.span>
          </div>

          {/* Icon with enhanced design */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="w-16 h-16 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-black/20 group-hover:shadow-primary/30 transition-all duration-500"
          >
            <pillar.icon className="w-8 h-8 text-background" />
          </motion.div>

          {/* Title with better contrast */}
          <h3 className="text-xl lg:text-2xl font-black mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent uppercase tracking-tight leading-tight">
            {pillar.title}
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="inline-block ml-2"
            >
              <ArrowUpRight className="w-5 h-5 text-primary inline" />
            </motion.span>
          </h3>

          {/* Description with improved readability */}
          <p className="text-sm lg:text-base text-foreground/80 leading-relaxed font-medium flex-1">
            {pillar.description}
          </p>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            className="mt-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full origin-left"
          />
        </div>
      </div>
    </motion.div>
  );
};

const PillarsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section ref={ref} id="product" className="h-screen w-full flex items-center justify-center bg-muted/30 relative overflow-hidden py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-accent border border-primary text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-accent uppercase italic"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Three pillars that transform how you capture, engage, and convert leads.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} isSectionInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
