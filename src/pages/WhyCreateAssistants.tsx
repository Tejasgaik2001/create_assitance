import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Clock, Settings, Lightbulb, Target, Award, Heart, MapPin, MessageSquare, Shield, MousePointer2, Mouse } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MagneticWrapper } from "@/components/MagneticWrapper";
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

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      bio: "Visionary leader with 10+ years in AI automation and business strategy.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Sarah Chen",
      role: "Head of AI Implementation",
      bio: "Master of neural networks and large language model fine-tuning.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "David Park",
      role: "CRM Architect",
      bio: "Specializes in building complex, high-converson customer journey systems.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Elena Rodriguez",
      role: "Growth Strategist",
      bio: "Direct-response marketing expert focused on scaling local businesses.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Marcus Thorne",
      role: "Technical Director",
      bio: "Ensures seamless integration between diverse software stacks and AI.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  const teamPairs = [];
  for (let i = 0; i < team.length; i += 2) {
    teamPairs.push(team.slice(i, i + 2));
  }

  const teamContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: teamScrollY } = useScroll({
    target: teamContainerRef,
    offset: ["start end", "end start"],
  });

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
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
            <div className="hidden md:grid grid-cols-12 grid-rows-3 gap-4 lg:gap-8 items-center">
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

              {[0, 1, 2, 3].map((index) => {
                const reason = reasons[index];
                const Icon = reason.icon;
                const gridClasses = [
                  "col-start-1 col-end-5 lg:col-end-4 row-start-1 md:mt-[-40px] md:ml-[20px] lg:mt-[-30px] lg:ml-[40px]",
                  "col-start-9 lg:col-start-10 col-end-13 row-start-1 md:mt-[20px] md:mr-[0px] lg:mt-[40px] lg:mr-[20px]",
                  "col-start-1 col-end-5 lg:col-end-4 row-start-3 md:mb-[30px] md:ml-[-20px] lg:mb-[50px] lg:ml-[-10px]",
                  "col-start-9 lg:col-start-10 col-end-13 row-start-3 md:mb-[-20px] md:mr-[0px] lg:mb-[-10px] lg:mr-[50px]",
                ];

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
                        y: [0, -12, 0, 12, 0],
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
                  setMousePos({ x: e.clientX, y: e.clientY });
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
                            <h3 className="text-xl md:text-3xl font-bold text-neutral-900 dark:text-white uppercase tracking-tighter">
                              {item.title}
                            </h3>
                          </div>
                          <div className="h-[48px] md:h-14 flex items-center gap-4">
                            <span className="text-sm font-bold text-accent">{item.step}</span>
                            <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tighter italic text-accent">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl overflow-hidden bg-muted/50 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/10">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>

                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 group-hover:w-full" />

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="fixed pointer-events-none z-50 w-48 h-32 md:w-64 md:h-44 rounded-xl overflow-hidden shadow-2xl border border-border/50"
                          style={{ left: mousePos.x + 20, top: mousePos.y - 80 }}
                        >
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
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
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] dark:bg-orange-500/10" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block opacity-80">Our DNA</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
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
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -10 }}
                    className="relative group h-full"
                  >
                    <div className="glass-card h-full rounded-[2.5rem] p-10 md:p-12 border border-white/40 dark:border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] backdrop-blur-3xl relative overflow-hidden flex flex-col items-center text-center">
                      <div className="relative mb-10">
                        <div className="w-20 h-20 rounded-3xl bg-white dark:bg-white/5 shadow-inner border border-white/80 dark:border-white/10 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110">
                          <Icon className="w-7 h-7 text-orange-600" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600">{value.title}</h3>
                      <p className="text-muted-foreground/90 font-medium text-sm lg:text-base">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section - Cinematic Gallery */}
        <div ref={teamContainerRef} className="relative md:h-[600vh] bg-slate-950">
          <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={{ perspective: "1200px" }}>

            {/* Background Texture / Gradient (All Devices) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* Cinematic Title Behind Layers (All Devices - Parallax on Mobile too) */}
            <motion.div
              style={{
                opacity: useTransform(teamScrollY, [0, 0.1, 0.9, 1], [0, 0.2, 0.2, 0]),
                scale: useTransform(teamScrollY, [0, 1], [0.9, 1.1]),
                y: useTransform(teamScrollY, [0, 1], [50, -50])
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
            >
              <h2 className="text-[20vw] md:text-[15vw] font-black text-white/5 tracking-tighter uppercase select-none opacity-50 text-center leading-[0.8] md:leading-none">
                THE<br className="md:hidden" />COLLECTIVE
              </h2>
            </motion.div>

            {/* Desktop Tunnel (Z-Axis Layers) */}
            <div className="relative w-full max-w-7xl h-full z-20 hidden md:block">
              {teamPairs.map((pair, index) => (
                <TeamPairLayer
                  key={index}
                  members={pair}
                  progress={teamScrollY}
                  index={index}
                  total={teamPairs.length}
                />
              ))}
            </div>

            {/* Mobile Reveal Stack (Simplified for Performance) */}
            <div className="md:hidden w-full px-6 py-24 z-20 space-y-12 relative h-auto">
              <div className="text-center mb-16">
                <span className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block opacity-60 font-mono">Precision Engineered</span>
                <h2 className="text-5xl font-black text-white tracking-tighter italic">THE <span className="text-indigo-400">TEAM</span></h2>
              </div>

              {team.map((member, index) => (
                <AnimatedSection
                  key={member.name}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="w-full"
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-indigo-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex flex-col rounded-[2.5rem] bg-slate-900/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                        />
                      </div>
                      <div className="p-8">
                        <h4 className="text-2xl font-black text-white tracking-tight mb-1">{member.name}</h4>
                        <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-4">{member.role}</p>
                        <p className="text-sm text-slate-400 italic leading-relaxed">"{member.bio}"</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              <div className="pt-20 text-center pb-12">
                <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-4 opacity-40">End of the line</p>
                <div className="h-px w-8 bg-indigo-500/30 mx-auto" />
              </div>
            </div>

            {/* Final Reveal Text (Desktop Only - Mobile has it in stack) */}
            <motion.div
              style={{
                opacity: useTransform(teamScrollY, [0.92, 0.98], [0, 1]),
                y: useTransform(teamScrollY, [0.92, 0.98], [40, 0]),
              }}
              className="absolute bottom-16 z-50 text-center px-4 hidden md:block"
            >
              <span className="text-indigo-400 font-bold tracking-[0.5em] uppercase text-[10px] mb-3 block">Infinite Evolution</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic">
                THE <span className="text-indigo-400">TEAM</span>
              </h2>
            </motion.div>
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
              <h2 className="section-headline mb-6">Partnership, <span className="text-gradient">Not a One‑Off</span></h2>
              <p className="body-large mb-8">
                Your success is our success. We stay with you after launch, adjusting your automations and retaining AI employees without you hiring a systems team.
              </p>
            </AnimatedSection>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="inline-block">
              <MagneticWrapper strength={0.25}>
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
                  <a href="/book-a-call">Book a Free Consultation<ArrowRight className="w-4 h-4 ml-2" /></a>
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

const TeamPairLayer = ({ members, progress, index, total }: { members: any[], progress: any, index: number, total: number }) => {
  // Define the normalized scroll range for this specific pair
  const start = index / total;
  const end = (index + 1) / total;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {members.map((member, mIndex) => (
        <IndividualMemberCard
          key={member.name}
          member={member}
          progress={progress}
          // Each member in the pair gets a staggered sub-window
          // First card starts at the beginning of the pair window, 
          // second card starts slightly later (15% offset).
          rangeStart={start + (mIndex * 0.15 / total)}
          rangeEnd={end - ((1 - mIndex) * 0.05 / total)}
          mIndex={mIndex}
        />
      ))}
    </div>
  );
};

const IndividualMemberCard = ({ member, progress, rangeStart, rangeEnd, mIndex }: { member: any, progress: any, rangeStart: number, rangeEnd: number, mIndex: number }) => {
  // Define a "Focus Plateau" where the card is crystal clear and stationary at Z=0
  const duration = rangeEnd - rangeStart;
  const focusStart = rangeStart + (duration * 0.25); // Spends 25% of time moving from back
  const focusEnd = rangeEnd - (duration * 0.25);   // Spends 25% of time moving past viewer
  // Plateau is 50% of the card's active scroll window where it is perfect for reading

  // Z-Axis Depth Movement with Hold at Z=0
  const zPos = useTransform(progress, [rangeStart, focusStart, focusEnd, rangeEnd], [-5000, 0, 0, 2000]);

  // Opacity & Blur: Snap into focus at focusStart, hold, then fade out after focusEnd
  const opacity = useTransform(progress,
    [rangeStart, rangeStart + 0.05, focusStart, focusEnd, rangeEnd - 0.05, rangeEnd],
    [0, 1, 1, 1, 1, 0]
  );

  // Scale: Grows as it gets closer, stable during focus
  const scale = useTransform(progress, [rangeStart, focusStart, focusEnd, rangeEnd], [0.3, 1, 1, 2.5]);

  // Blur: Heavy blur in back, sharp in focus, heavy blur as it passes
  const blur = useTransform(progress,
    [rangeStart, focusStart, focusEnd, rangeEnd],
    ["blur(40px)", "blur(0px)", "blur(0px)", "blur(60px)"]
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        left: mIndex === 0 ? "28%" : "72%",
        top: "50%",
        x: "-50%",
        y: "-50%",
        z: zPos,
        opacity: opacity,
        scale: scale,
        filter: blur,
      }}
      className="w-[420px] aspect-[4/5] z-10 origin-center pointer-events-auto"
    >
      <div className="relative w-full h-full rounded-[4rem] bg-slate-900 border border-white/10 shadow-[0_100px_200px_rgba(0,0,0,0.8)] overflow-hidden group">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0"
        />

        {/* Info Box */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-12 flex flex-col justify-end">
          <h4 className="text-4xl font-black text-white tracking-tighter leading-none mb-2">{member.name}</h4>
          <p className="text-xs text-indigo-400 font-bold uppercase tracking-[0.3em] mb-4">{member.role}</p>
          <div className="h-px w-16 bg-indigo-500/50 mb-4" />
          <p className="text-base text-slate-200 italic leading-relaxed line-clamp-3">"{member.bio}"</p>
        </div>

        {/* Cinematic Glint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default WhyCreateAssistants;
