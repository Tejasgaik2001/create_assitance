import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Bot, HeadphonesIcon } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "System Integration & Automation",
    description:
      "We build a unified CRM, marketing automation and sales platform to capture and manage every lead. Eliminate manual spreadsheets and disjointed tools; see all conversations, pipelines and reports in one dashboard.",
    number: "01",
  },
  {
    icon: Bot,
    title: "AI Voice & Chat Assistants",
    description:
      "Deploy AI employees who answer calls, chat with website visitors and text leads back within seconds, 24/7. They learn your business rules and FAQs to book appointments, qualify prospects and nurture follow‑ups.",
    number: "02",
  },
  {
    icon: HeadphonesIcon,
    title: "Managed Service & Support",
    description:
      "Our team handles everything from initial setup to continuous optimisation. Launch your system in as little as four weeks with personalised onboarding and training, then enjoy ongoing updates and strategy.",
    number: "03",
  },
];

const PillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="product" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="section-headline mb-6">What We Offer</h2>
          <p className="body-large max-w-2xl mx-auto">
            Three pillars that transform how you capture, engage, and convert leads.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover-lift">
                {/* Number */}
                <span className="text-6xl font-bold text-muted-foreground/10 group-hover:text-primary/10 transition-colors duration-300">
                  {pillar.number}
                </span>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mt-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-6 h-6 text-background" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
