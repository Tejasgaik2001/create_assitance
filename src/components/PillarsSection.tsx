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

const PillarCard = ({ pillar, index }: { pillar: typeof pillars[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      className="group relative"
    >
      <motion.div
        style={{ rotate }}
        className={`glass-card rounded-3xl p-8 h-full relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}
        whileHover={{ scale: 1.02 }}
      >
        {/* Image background with parallax */}
        <motion.div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ y: imageY }}
        >
          <img 
            src={pillar.image} 
            alt="" 
            className="w-full h-full object-cover scale-110" 
          />
        </motion.div>
        
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative z-10">
          {/* Number */}
          <motion.span 
            className="text-7xl font-bold text-muted-foreground/10 group-hover:text-primary/20 transition-all duration-500 block"
            whileHover={{ scale: 1.1 }}
          >
            {pillar.number}
          </motion.span>
          
          {/* Icon */}
          <motion.div 
            className="w-14 h-14 bg-foreground rounded-2xl flex items-center justify-center mt-4 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"
          >
            <pillar.icon className="w-7 h-7 text-background" />
          </motion.div>

          {/* Content */}
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {pillar.title}
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {pillar.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PillarsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section ref={ref} id="product" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration with parallax */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]"
        style={{ y: backgroundY }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Our Services
          </motion.span>
          <h2 className="section-headline mb-6">What We Offer</h2>
          <p className="body-large max-w-2xl mx-auto">
            Three pillars that transform how you capture, engage, and convert leads.
          </p>
        </motion.div>

        {/* Pillars Grid with parallax cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
