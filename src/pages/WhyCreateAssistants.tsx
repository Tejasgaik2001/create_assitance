import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Clock, Settings, Lightbulb, Target, Award, Heart, MapPin, MessageSquare, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MagneticWrapper } from "@/components/MagneticWrapper";
// import { AnimatedSnapContainer } from "@/components/FullScreenSection"; // Removed
import { RollingTextList } from "@/components/ui/RollingTextList";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

const WhyCreateAssistants = () => {
  const reasons = [
    {
      title: "Software alone isn’t enough",
      description: "Cobbling together separate tools creates gaps. Our unified system handles everything in one place.",
      icon: Shield,
    },
    {
      title: "DIY setups drain your time",
      description: "Building automations is complex. We do it for you, from initial configuration to optimization.",
      icon: Clock,
    },
    {
      title: "AI without strategy fails",
      description: "Off‑the‑shelf chatbots can’t deliver. Our AI employees are trained on your specific tone and FAQs.",
      icon: Lightbulb,
    },
    {
      title: "True partnership",
      description: "We don’t just sell software; we become your systems department, refining your growth engine.",
      icon: Users,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We map your ideal customer journey and automation opportunities.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
    },
    {
      step: "02",
      title: "Build & Train",
      description: "We configure your CRM and train AI employees on your brand guidelines.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    },
    {
      step: "03",
      title: "Launch",
      description: "We migrate data, test workflows and launch your new system.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      step: "04",
      title: "Management",
      description: "Monthly check‑ins, retraining and new features as you grow.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const values = [
    {
      title: "Integrity & Results",
      description: "Transparent values guide every system we build.",
      icon: Heart,
    },
    {
      title: "Local Roots",
      description: "Proud of our Urbandale heritage and U.S.-based support.",
      icon: MapPin,
    },
    {
      title: "Real Support",
      description: "Direct access to experts, no offshore call centres.",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 text-foreground dark:text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="min-h-[90vh] w-full flex items-center justify-center relative bg-background overflow-hidden pt-20">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
              animate={{ x: [0, 50, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
              animate={{ x: [0, -50, 0], scale: [1.1, 1, 1.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 mb-6"
              >
                <Users className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium">Why Create Assistants</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <span className="block">More Than Software,</span>
                <span className="block text-gradient">A Partner for Growth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base"
              >
                Most software tools leave you to figure things out on your own. At Create Assistants, we combine a powerful CRM with AI employees and hands‑on service.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block"
              >
                <MagneticWrapper strength={0.25}>
                  <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
                    <a href="/book-a-call">
                      Book a Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </MagneticWrapper>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Why Choose Section (Orbital Satellite Grid) */}
        <div className="py-16 w-full bg-background relative overflow-hidden min-h-[700px] flex items-center justify-center">
          {/* Background Ambient Orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
            {/* Responsive Orbital View (MD+) */}
            <div className="hidden md:grid grid-cols-12 grid-rows-3 gap-4 lg:gap-8 items-center">

              {/* Center Hub */}
              <div className="col-start-4 col-end-10 lg:col-start-5 lg:col-end-9 row-start-2 text-center z-20">
                <AnimatedSection direction="up">
                  <span className="text-primary font-semibold tracking-wider uppercase text-[10px] md:text-xs mb-3 block">
                    The AI Agency Advantage
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6">
                    Why Choose an <br />
                    <span className="text-gradient">AI Growth Agency?</span>
                  </h2>
                  <p className="text-muted-foreground text-sm lg:text-lg max-w-sm mx-auto leading-relaxed">
                    A comprehensive partnership built to out-perform DIY tools and generic software.
                  </p>
                </AnimatedSection>
              </div>

              {/* Satellite Cards - Orbiting */}
              {[0, 1, 2, 3].map((index) => {
                const reason = reasons[index];
                const Icon = reason.icon;

                // Responsive Grid Placement
                const gridClasses = [
                  "col-start-1 col-end-5 lg:col-end-4 row-start-1 md:mt-[-40px] md:ml-[20px] lg:mt-[-30px] lg:ml-[40px]", // Top Left
                  "col-start-9 lg:col-start-10 col-end-13 row-start-1 md:mt-[20px] md:mr-[0px] lg:mt-[40px] lg:mr-[20px]",   // Top Right
                  "col-start-1 col-end-5 lg:col-end-4 row-start-3 md:mb-[30px] md:ml-[-20px] lg:mb-[50px] lg:ml-[-10px]",  // Bottom Left
                  "col-start-9 lg:col-start-10 col-end-13 row-start-3 md:mb-[-20px] md:mr-[0px] lg:mb-[-10px] lg:mr-[50px]",  // Bottom Right
                ];

                // Entrance animation
                const spawnX = [150, -150, 150, -150];
                const spawnY = [100, 100, -100, -100];

                return (
                  <motion.div
                    key={reason.title}
                    className={cn("w-full max-w-[240px] lg:max-w-xs mx-auto", gridClasses[index])}
                    initial={{ opacity: 0, scale: 0.6, x: spawnX[index], y: spawnY[index] }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                    style={{ perspective: 1000 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -12, 0, 12, 0], // Elliptical orbit feel
                        x: index % 2 === 0 ? [0, 8, 0, -8, 0] : [0, -8, 0, 8, 0],
                        rotate: index % 2 === 0 ? [0, 1, 0, -1, 0] : [0, -1, 0, 1, 0]
                      }}
                      transition={{
                        duration: [9, 11, 10, 12][index],
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.04,
                          rotateX: index < 2 ? 8 : -8,
                          rotateY: index % 2 === 0 ? 8 : -8,
                        }}
                        className="glass-card p-5 lg:p-7 rounded-[1.5rem] lg:rounded-[2rem] border border-primary/10 shadow-2xl backdrop-blur-xl group relative overflow-hidden transition-all duration-300 hover:border-primary/40"
                      >
                        {/* Internal Animated Orb effect for the card */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                        </div>

                        <div className="relative z-10">
                          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 lg:mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <Icon className="w-5 h-5 lg:w-7 lg:h-7" />
                          </div>
                          <h3 className="text-base lg:text-xl font-bold mb-2 lg:mb-3 tracking-tight group-hover:text-primary transition-colors">
                            {reason.title}
                          </h3>
                          <p className="text-[12px] lg:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed group-hover:text-foreground transition-colors line-clamp-3 lg:line-clamp-none">
                            {reason.description}
                          </p>
                        </div>

                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile View: Standard Grid fallback (XS to MD) */}
            <div className="md:hidden flex flex-col items-center">
              <div className="text-center mb-12">
                <AnimatedSection direction="up">
                  <h2 className="text-3xl font-bold mb-3 leading-tight">Why Choose an <br /><span className="text-gradient">AI Growth Agency?</span></h2>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">A partnership built to out-perform DIY tools and software.</p>
                </AnimatedSection>
              </div>
              <div className="grid gap-6 w-full max-w-sm mx-auto">
                {reasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <div key={reason.title} className="glass-card p-6 rounded-2xl border border-border/50 flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold mb-1">{reason.title}</h3>
                      <p className="text-[12px] text-muted-foreground">{reason.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-24 w-full flex items-center justify-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="section-headline mb-4">
                Our Proven <span className="text-gradient">Process</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Getting started is simple. Our four‑step process gets you live in as little as four weeks.
              </p>
            </AnimatedSection>

            <div className="w-full max-w-5xl mx-auto relative">
              {process.map((item, index) => {
                const Icon = item.icon;
                const [isHovered, setIsHovered] = useState(false);
                const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

                const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                  setMousePos({
                    x: e.clientX,
                    y: e.clientY,
                  });
                };

                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative w-full cursor-pointer border-b border-neutral-200 dark:border-neutral-800 py-5"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="relative overflow-hidden h-[48px] md:h-14 flex-1">
                        <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                          <div className="h-[48px] md:h-14 flex items-center gap-4">
                            <span className="text-sm font-bold text-primary/60">{item.step}</span>
                            <h3 className="text-xl md:text-3xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">
                              {item.title}
                            </h3>
                          </div>
                          <div className="h-[48px] md:h-14 flex items-center gap-4">
                            <span className="text-sm font-bold text-orange-500">{item.step}</span>
                            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter italic text-orange-500">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl overflow-hidden bg-muted/50 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500/10">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-orange-500 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>

                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 group-hover:w-full" />

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="fixed pointer-events-none z-50 w-48 h-32 md:w-64 md:h-44 rounded-xl overflow-hidden shadow-2xl border border-border/50"
                          style={{
                            left: mousePos.x + 20,
                            top: mousePos.y - 80,
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                          <div className="absolute bottom-2 left-3 text-xs font-medium text-white/90">
                            {item.title}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-32 w-full flex items-center justify-center bg-[#FDFCFB] dark:bg-[#030614] relative overflow-hidden transition-colors duration-500">
          {/* Enhanced Background Layering */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] dark:bg-primary/10" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

            {/* Ambient Accent orbs */}
            <motion.div
              className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-50"
              animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block opacity-80">Our DNA</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                Our <span className="text-gradient">Mission & Values</span>
              </h2>
              <div className="h-1 w-20 bg-primary/20 mx-auto mb-8 rounded-full" />
              <p className="body-large max-w-2xl mx-auto text-muted-foreground/80 font-medium leading-relaxed">
                Create Assistants is a family‑owned agency based in Iowa. We believe small businesses deserve enterprise-grade automation.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ y: -10 }}
                    className="relative group h-full"
                  >
                    {/* Floating Shadow Layer */}
                    <div className="absolute inset-x-8 -bottom-4 h-8 bg-black/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500 rounded-full" />

                    <div className="glass-card h-full rounded-[2.5rem] p-10 md:p-12 border border-white/40 dark:border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] backdrop-blur-3xl relative overflow-hidden flex flex-col items-center text-center transition-all duration-500 group-hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.08)]">

                      {/* Gradient Hover spotlight */}
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Icon Podium */}
                      <div className="relative mb-10">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                        <div className="w-20 h-20 rounded-3xl bg-white dark:bg-white/5 shadow-inner border border-white/80 dark:border-white/10 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 tracking-tight relative z-10 transition-colors duration-300 group-hover:text-primary">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground/90 leading-relaxed relative z-10 font-medium text-sm lg:text-base">
                        {value.description}
                      </p>

                      {/* Animated bottom bar reveal */}
                      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-24 w-full flex items-center justify-center bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection direction="right">
                  <h2 className="section-headline mb-6 text-white">
                    Meet the <span className="text-indigo-400">Team</span>
                  </h2>
                  <p className="body-large mb-4 text-slate-200">
                    We're a small, close‑knit group of technologists, marketers and process nerds. Our diverse backgrounds allow us to craft systems that truly work.
                  </p>
                </AnimatedSection>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <MagneticWrapper strength={0.25}>
                    <Button variant="outline" size="lg" className="group border-slate-700 text-slate-900 bg-slate-100 hover:bg-white hover:text-slate-900">
                      Meet Our Team
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </MagneticWrapper>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700">
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-medium text-slate-200">Close-Knit Team</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Partnership/CTA */}
        <div className="py-24 w-full flex items-center justify-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimatedSection direction="up" className="max-w-3xl mx-auto">
              <h2 className="section-headline mb-6">
                Partnership, <span className="text-gradient">Not a One‑Off</span>
              </h2>
              <p className="body-large mb-8">
                Your success is our success. We stay with you after launch, adjusting your automations and retaining AI employees without you hiring a systems team.
              </p>
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <MagneticWrapper strength={0.25}>
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
                  <a href="/book-a-call">
                    Book a Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </MagneticWrapper>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyCreateAssistants;
