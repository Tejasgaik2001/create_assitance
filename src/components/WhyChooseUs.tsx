import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Zap, Handshake } from "lucide-react";
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

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="solutions" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-headline mb-8">
              Why Choose<br />
              <span className="text-primary">Create Assistants</span>
            </h2>
            <p className="body-large mb-12">
              We're not just another software vendor. We're your dedicated growth partner, 
              combining cutting-edge AI with genuine human expertise.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <reason.icon className="w-5 h-5 text-foreground" />
                  </div>
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
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroVisual} 
                alt="AI-powered CRM visualization" 
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-6 shadow-xl"
            >
              <p className="text-4xl font-bold text-primary mb-1">4 weeks</p>
              <p className="text-sm text-muted-foreground">Average launch time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
