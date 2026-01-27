import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Zap, Handshake, Check } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const reasons = [
  {
    icon: Heart,
    title: "Family-Owned & USA-Based",
    description: "We're a family-owned agency in Iowa, committed to integrity and innovation.",
  },
  {
    icon: Users,
    title: "Real Humans + AI",
    description: "Our AI employees work alongside our human experts for seamless 24/7 coverage.",
  },
  {
    icon: Zap,
    title: "Quick Launch",
    description: "Go live in four weeks or less with a proven onboarding process.",
  },
  {
    icon: Handshake,
    title: "Ongoing Partnership",
    description: "We become your systems department, providing continuous improvements and support.",
  },
];

const features = [
  "24/7 AI-powered support",
  "Custom CRM integration",
  "Lead qualification automation",
  "Real-time analytics dashboard",
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section ref={ref} id="solutions" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Why Us
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="section-headline mb-6">
              Why Choose
              <span className="text-primary block">Create Assistants</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="body-large mb-10">
              We're not just another software vendor. We're your dedicated growth partner, 
              combining cutting-edge AI with genuine human expertise.
            </motion.p>

            {/* Features list */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, index) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm"
                >
                  <Check className="w-3.5 h-3.5 text-primary" />
                  {feature}
                </motion.span>
              ))}
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <reason.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <motion.div 
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={heroVisual} 
                alt="AI-powered CRM visualization" 
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </motion.div>
            
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-6 shadow-2xl"
            >
              <motion.p 
                className="text-4xl font-bold text-primary mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 1 }}
              >
                4 weeks
              </motion.p>
              <p className="text-sm text-muted-foreground">Average launch time</p>
            </motion.div>

            {/* Additional floating element */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: 5 }}
              className="absolute -top-4 -right-4 bg-foreground text-background rounded-2xl px-5 py-3 shadow-2xl"
            >
              <p className="text-2xl font-bold">50%</p>
              <p className="text-xs opacity-80">More appointments</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
