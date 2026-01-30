import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users, CheckCircle, MessageSquare, Target, Zap, Shield, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { AnimatedSnapContainer } from "@/components/FullScreenSection";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";

const DropInHoverText = ({ text, trigger, className, highlightClass = "text-orange-600 dark:text-orange-400" }: { text: string; trigger: boolean; className?: string; highlightClass?: string }) => {
  return (
    <span className={cn("inline-flex flex-wrap transition-colors duration-300", trigger ? highlightClass : "", className)}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={false}
          animate={trigger ? {
            y: [-15, 0],
            opacity: [0, 1],
          } : { y: 0, opacity: 1 }}
          transition={{
            delay: trigger ? i * 0.02 : 0,
            duration: 0.3,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const ConsultationStepCard = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // 3D Tilt calculation
    const rotateX = ((y / rect.height) - 0.5) * -10; // 10deg range
    const rotateY = ((x / rect.width) - 0.5) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const images = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", // Strategy
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // CRM/Systems
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80", // Questions/Support
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", // Roadmap/Planning
  ];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
      }}
      className="relative group h-full"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ rotateX: rotate.x, rotateY: rotate.y, scale: isHovered ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative h-full p-1 rounded-[2rem] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-xl overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative h-full p-6 rounded-[1.8rem] bg-white dark:bg-slate-950 overflow-hidden flex flex-col md:flex-row gap-6">
          {/* Background Step Number */}
          <div className="absolute top-2 right-6 text-6xl font-black text-slate-100 dark:text-slate-900/30 pointer-events-none select-none z-0">
            0{index + 1}
          </div>

          {/* Background Image Decor */}
          <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700">
            <img src={images[index % images.length]} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent" />
          </div>

          {/* Spotlight Effect */}
          <div
            className="pointer-events-none absolute -inset-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 120, 41, 0.12), transparent 40%)`,
            }}
          />

          <div className="relative z-20 shrink-0">
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500",
              isHovered
                ? "bg-orange-600 text-white scale-110 rotate-12 shadow-xl shadow-orange-500/30"
                : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
            )}>
              <Icon className="w-7 h-7" />
            </div>
          </div>

          <div className="relative z-20 flex-1">
            <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white tracking-tight uppercase italic">
              <DropInHoverText text={item.title} trigger={isHovered} highlightClass="text-orange-600 dark:text-orange-400" />
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FinalMegaCTA = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <section key="cta" className="h-screen w-full flex flex-col justify-between relative bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Intense Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,41,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,41,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Animated Mesh Gradients */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10 w-full px-4 pt-20">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection direction="up">
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setRotate({ x: 0, y: 0 });
              }}
              animate={{ rotateX: rotate.x, rotateY: rotate.y, scale: isHovered ? 1.01 : 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative p-10 md:p-14 rounded-[3rem] overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl border border-slate-200/60 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(249,115,22,0.2)] group"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              {/* Glossy Border Effect */}
              <div
                className="pointer-events-none absolute -inset-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[3rem]"
                style={{
                  background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 120, 41, 0.4), transparent 40%)`,
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                }}
              />

              {/* Spotlight Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 120, 41, 0.1), transparent 80%)`,
                }}
              />

              {/* Cubes Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.pattern.png')] opacity-[0.03] dark:opacity-[0.06] pointer-events-none" />

              <div className="relative z-20 text-center flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-600 text-white mb-8 font-black tracking-[0.2em] uppercase text-xs shadow-2xl shadow-orange-500/40"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Authority Scale</span>
                </motion.div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[0.8] tracking-tighter uppercase italic">
                  <DropInHoverText text="Ready to" trigger={isHovered} className="block" highlightClass="text-slate-900 dark:text-white" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 drop-shadow-2xl">Scale Up?</span>
                </h2>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-bold">
                  Your journey to operational excellence starts with a single high‑impact conversation. Let's build your <span className="text-orange-600 dark:text-orange-400">Empire</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <MagneticWrapper strength={0.3}>
                    <Button onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })} className="h-16 md:h-20 px-12 md:px-16 rounded-[2.5rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-lg md:text-xl transition-all duration-500 shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-2 group/btn relative overflow-hidden">
                      <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10 flex items-center gap-4">
                        Back to Scheduler <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover/btn:translate-x-2 transition-transform" />
                      </span>
                    </Button>
                  </MagneticWrapper>

                  <button className="text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em] text-xs hover:text-orange-600 dark:hover:text-orange-400 transition-all hover:tracking-[0.4em]">
                    Download Info Pack
                  </button>
                </div>
              </div>

              {/* Decorative Corner Glows */}
              <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-orange-500/10 blur-[80px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-amber-500/10 blur-[80px] rounded-full" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
      <div className="w-full relative z-20">
        <Footer />
      </div>
    </section>
  );
};

const BookACall = () => {
  const [isHovered, setIsHovered] = useState(false);

  const expectations = [
    {
      title: "Understand your needs",
      description: "We'll discuss your current processes, challenges and growth goals.",
      icon: Users,
    },
    {
      title: "See our system in action",
      description: "Get a live walk‑through of our all‑in‑one CRM, AI employees and automation workflows.",
      icon: Zap,
    },
    {
      title: "Ask anything",
      description: "We'll answer your questions about pricing, onboarding, AI training and ongoing support.",
      icon: MessageSquare,
    },
    {
      title: "Plan next steps",
      description: "If it's a fit, we'll outline a personalised plan to get you live in as little as four weeks.",
      icon: Target,
    },
  ];

  const sections = [
    // Hero Section
    <section key="hero" className="h-[120vh] lg:h-screen w-full flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Advanced Background Matrix/Grid Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,41,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,41,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,120,41,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,41,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-slate-50 dark:from-slate-950 via-slate-50/50 dark:via-slate-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-slate-50/50 dark:via-slate-950/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-500/20 text-orange-700 dark:text-orange-400 mb-6 font-bold tracking-tight uppercase">
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-xs">Strategic Consultation</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] mb-6 text-slate-900 dark:text-white">
                Schedule Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400">
                  Free Consultation
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
                Let's talk about your business goals and see how Create Assistants can help you capture every lead, convert more customers and simplify your operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <MagneticWrapper strength={0.2}>
                  <Button onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })} className="h-14 px-8 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-base transition-all duration-300 shadow-xl shadow-orange-500/20 hover:-translate-y-1">
                    Book Your Slot
                  </Button>
                </MagneticWrapper>
                <MagneticWrapper strength={0.1}>
                  <button className="text-slate-500 dark:text-slate-400 font-bold hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-2 px-4 text-sm">
                    View FAQ <ArrowRight size={16} />
                  </button>
                </MagneticWrapper>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Visual */}
          <div className="relative w-full hidden lg:block" style={{ perspective: '2000px' }}>
            <AnimatedSection direction="right" delay={0.4}>
              <div className="relative group">
                {/* Decorative Back Grid - Localized Depth */}
                <div className="absolute -inset-10 bg-[radial-gradient(rgba(249,115,22,0.1)_1.5px,transparent_1.5px)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_100%)] opacity-60 -z-10" />

                {/* Main Image Container with Glass Frame */}
                <motion.div
                  whileHover={{ rotateY: -4, rotateX: 2, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 150, damping: 30 }}
                  className="relative rounded-[3.5rem] overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(249,115,22,0.2)] bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl p-4"
                >
                  <div className="relative rounded-[2.8rem] overflow-hidden aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                      alt="Strategic Partnership"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 via-transparent to-transparent mix-blend-overlay" />

                    {/* Pulsing Tech Nodes */}
                    {[
                      { top: '25%', left: '30%' },
                      { top: '55%', left: '75%' },
                      { top: '42%', left: '48%' }
                    ].map((pos, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                        className="absolute w-3.5 h-3.5 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.8)]"
                        style={pos}
                      >
                        <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping" />
                      </motion.div>
                    ))}

                    {/* Inner Tech Decor */}
                    <div className="absolute top-6 left-6 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 shadow-2xl">
                      <div className="relative flex">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-50" />
                      </div>
                      <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Consultation Live</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 1: Efficiency Stats */}
                <motion.div
                  animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-14 -left-14 bg-white dark:bg-slate-900 shadow-[0_30px_60px_-15px_rgba(249,115,22,0.3)] p-7 rounded-[3rem] border border-orange-500/10 backdrop-blur-2xl z-20 hidden xl:block"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-xl shadow-orange-500/40">
                      <TrendingUp size={28} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Efficiency</div>
                      <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">+84.2%</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 2: Availability */}
                <motion.div
                  animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-12 -right-12 bg-slate-900 dark:bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] p-8 rounded-[3rem] border border-white/10 dark:border-slate-200/50 z-20 flex flex-col gap-5 text-center min-w-[220px]"
                >
                  <div className="text-[10px] text-orange-500 font-black uppercase tracking-[0.3em] mb-1">Next Available</div>
                  <div className="text-2xl font-black text-white dark:text-slate-900 tracking-tighter">Today, 2:30 PM</div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?u=${i + 75}`} className="w-9 h-9 rounded-full border-2 border-slate-900 dark:border-white shadow-lg" alt="Expert" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em]">+14 Online</span>
                  </div>
                </motion.div>

                {/* Background Atmosphere */}
                <div className="absolute -inset-32 bg-orange-500/10 blur-[150px] rounded-full -z-10 animate-pulse pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>,

    // What to Expect
    <section key="expectations" className="h-screen w-full flex items-center justify-center relative bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,41,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,41,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,120,41,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,41,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <AnimatedSection direction="up" className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-500/20 text-orange-700 dark:text-orange-400 mb-4 font-bold tracking-tight uppercase">
            <Target className="w-3.5 h-3.5" />
            <span className="text-xs">The Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none mb-4 text-slate-900 dark:text-white">
            What to Expect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 uppercase italic">on the Call</span>
          </h2>
        </AnimatedSection>

        <StaggeredChildren className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {expectations.map((item, index) => (
            <ConsultationStepCard key={item.title} item={item} index={index} />
          ))}
        </StaggeredChildren>
      </div>
    </section>,

    // Scheduler Section
    <section key="scheduler" className="h-screen w-full flex items-center justify-center relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,41,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,41,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,120,41,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,41,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 w-full relative z-10 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 text-left">
              <AnimatedSection direction="left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-500/20 text-orange-700 dark:text-orange-400 mb-8 font-bold tracking-tight uppercase">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="text-xs">Secure Booking</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-[0.9] mb-8 tracking-tighter uppercase">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400">Instant</span> <br />
                  Availability
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium max-w-md">
                  Choose a slot that works for you. Our system syncs with local availability for a zero‑friction experience.
                </p>

                <div className="space-y-3">
                  {[
                    { text: "Free 30-minute strategic consultation", icon: Clock },
                    { text: "Direct access to our system architects", icon: Users },
                    { text: "Personalised implementation roadmap", icon: Target },
                    { text: "Instant confirmation via email", icon: CheckCircle }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
                      whileHover={{ x: 8 }}
                      className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-md border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-500"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                        <item.icon size={18} />
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection direction="right" delay={0.3}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative group p-1 rounded-[3rem] bg-gradient-to-br from-slate-200 via-white to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_-20px_rgba(249,115,22,0.1)]"
                >
                  <div className="p-6 md:p-10 rounded-[2.8rem] bg-white/80 dark:bg-slate-950/80 backdrop-blur-3xl border border-white/40 dark:border-white/5 overflow-hidden flex flex-col items-center justify-center relative min-h-[520px]">
                    {/* Interior Mesh Decor */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50 pointer-events-none" />

                    {/* Floating Glows */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-[80px] rounded-full animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 blur-[80px] rounded-full animate-pulse" />

                    {/* Scheduler Content Container */}
                    <div className="relative z-10 w-full flex flex-col items-center">
                      <div className="text-center mb-10">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center mx-auto mb-4 shadow-xl"
                        >
                          <Clock size={28} />
                        </motion.div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-[0.3em]">Select a Time</h3>
                        <div className="flex items-center gap-2 justify-center mt-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                          <span className="text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest">Global Sync Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                        {[
                          "09:00", "11:30", "14:00", "16:30"
                        ].map((time, idx) => (
                          <motion.button
                            key={time}
                            whileHover={{ scale: 1.02, backgroundColor: idx === 0 ? "" : "rgba(249, 115, 22, 0.05)" }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                              "p-5 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1",
                              idx === 0
                                ? "bg-orange-600 border-orange-500 text-white shadow-xl shadow-orange-500/40"
                                : "bg-white dark:bg-slate-900/40 border-slate-100 dark:border-white/5 text-slate-900 dark:text-slate-200 shadow-sm"
                            )}
                          >
                            <span className="text-base font-black tracking-tight">{time} AM</span>
                            <span className={cn(idx === 0 ? "text-orange-100" : "text-slate-500", "text-[10px] font-bold uppercase tracking-[0.1em]")}>
                              {idx === 0 ? "Selected" : "Available"}
                            </span>
                          </motion.button>
                        ))}
                      </div>

                      <div className="mt-10 pt-8 border-t border-slate-100 dark:border-white/5 w-full flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                              <img key={i} src={`https://i.pravatar.cc/100?u=${i + 30}`} className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-950 shadow-md" alt="Consultant" />
                            ))}
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Enterprise Team</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase">Ready for strategy</p>
                          </div>
                        </div>
                        <div className="px-4 py-2 rounded-xl bg-orange-500/5 border border-orange-500/10">
                          <p className="text-[9px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest">Session: <span className="text-slate-900 dark:text-white">30 Min</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>,

    <FinalMegaCTA />
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        <CursorSpotlight />
        <AnimatedSnapContainer>
          {sections}
        </AnimatedSnapContainer>
      </main>
    </div>
  );
};

export default BookACall;
