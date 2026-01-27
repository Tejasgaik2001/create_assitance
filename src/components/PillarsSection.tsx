import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Bot, HeadphonesIcon, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "System Integration & Automation",
    description:
      "We build a unified CRM, marketing automation and sales platform to capture and manage every lead. Eliminate manual spreadsheets and disjointed tools; see all conversations, pipelines and reports in one dashboard.",
    number: "01",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Bot,
    title: "AI Voice & Chat Assistants",
    description:
      "Deploy AI employees who answer calls, chat with website visitors and text leads back within seconds, 24/7. They learn your business rules and FAQs to book appointments, qualify prospects and nurture follow‑ups.",
    number: "02",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "Managed Service & Support",
    description:
      "Our team handles everything from initial setup to continuous optimisation. Launch your system in as little as four weeks with personalised onboarding and training, then enjoy ongoing updates and strategy.",
    number: "03",
    color: "from-orange-500/20 to-red-500/20",
  },
];

const PillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section ref={ref} id="product" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.05)_0%,transparent_50%)]" />
      
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

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className={`glass-card rounded-3xl p-8 h-full relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}
                whileHover={{ scale: 1.02 }}
              >
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
