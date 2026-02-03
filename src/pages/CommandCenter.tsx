import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Calendar, CreditCard, BarChart3, Users, Mail, Phone, MessageSquare, FileText, Settings, CheckCircle, TrendingUp, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { ThreeDCard } from "@/components/ui/ThreeDCard";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { handleBookingRedirect } from "@/utils/navigation";

const DropInHoverText = ({ text, trigger, className, highlightClass = "text-accent" }: { text: string; trigger: boolean; className?: string; highlightClass?: string }) => {
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

const AutomationCard = ({ item, index }: { item: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-16 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Node Point */}
      <div className="absolute left-6 top-6 -translate-x-1/2 -translate-y-[2px] w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-accent z-10 flex items-center justify-center shadow-[0_0_10px_rgba(219,154,70,0.3)]">
        <div className={cn("w-2 h-2 rounded-full bg-accent transition-transform duration-300", isHovered ? "scale-150" : "")} />
      </div>

      <div className={cn(
        "p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 shadow-sm",
        isHovered
          ? "bg-accent/10 dark:bg-accent/20 border-accent/50 dark:border-accent/50 shadow-xl translate-x-1"
          : "bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
      )}>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
          <Icon className={cn("w-5 h-5 transition-colors duration-300", isHovered ? "text-accent" : "text-slate-500")} />
          <DropInHoverText text={item.title} trigger={isHovered} />
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};


const IntegrationNode = ({ text, index }: { text: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const parts = text.split(":");
  const title = parts[0];
  const desc = parts.slice(1).join(":");

  const icons = [Zap, Users, Shield];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative p-4 rounded-xl border transition-all duration-500 group overflow-hidden h-full",
        isHovered
          ? "bg-accent/10 dark:bg-accent/20 border-accent dark:border-accent/50 shadow-xl shadow-accent/10 -translate-x-2"
          : "bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800"
      )}
    >
      <div className="flex gap-5">
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm",
          isHovered
            ? "bg-accent text-white scale-110 rotate-[360deg] shadow-accent/40"
            : "bg-accent/10 dark:bg-accent/20 text-accent"
        )}>
          <Icon size={20} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
            <DropInHoverText text={title} trigger={isHovered} highlightClass="text-accent" />
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            {desc}
          </p>
        </div>
      </div>

      {/* Animated side highlight */}
      <div className={cn(
        "absolute right-0 top-0 bottom-0 w-1 bg-accent transition-transform duration-500 origin-bottom",
        isHovered ? "scale-y-100" : "scale-y-0"
      )} />
    </motion.div>
  );
};

const ThreeDImageCard = ({ src, alt }: { src: string; alt: string }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 30; // 30deg range
    const y = ((e.clientY - top) / height - 0.5) * -30;
    setRotate({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] max-h-[500px] cursor-pointer"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        animate={{ rotateX: rotate.y, rotateY: rotate.x, scale: rotate.x !== 0 ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Main Base Card */}
        <div
          className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent to-accent/80 p-[1px] shadow-2xl"
          style={{ transform: 'translateZ(0px)' }}
        >
          <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-slate-950">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </div>
        </div>

        {/* Floating Top Elements */}
        <motion.div
          style={{ transform: 'translateZ(60px)' }} // Lift it up
          className="absolute -top-12 -left-12 p-6 rounded-3xl bg-white/10 dark:bg-slate-900/10 backdrop-blur-2xl border border-white/20 shadow-2xl hidden lg:block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/40">
              <CheckCircle size={24} />
            </div>
            <div>
              <div className="text-[10px] text-accent font-bold uppercase tracking-widest">System Status</div>
              <div className="text-sm font-bold text-white">Endpoints Synced</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ transform: 'translateZ(40px)' }}
          className="absolute -bottom-10 -right-10 p-6 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-accent/30 shadow-2xl max-w-[240px] hidden lg:block"
        >
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Integration Health</span>
              <span className="text-[10px] text-green-400 font-bold">99.9%</span>
            </div>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '99%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-accent shadow-[0_0_10px_#db9a46]"
              />
            </div>
          </div>
        </motion.div>

        {/* Gloss Overlay */}
        <div
          className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
          style={{
            background: `linear-gradient(${45 + rotate.x}deg, rgba(255,255,255,0.1) 0%, transparent 60%)`,
            transform: 'translateZ(20px)'
          }}
        />
      </motion.div>
    </div>
  );
};


const ToolCard = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "p-6 rounded-2xl border transition-all duration-500 relative overflow-hidden group h-full flex flex-col justify-between",
        isHovered
          ? "bg-accent/10 dark:bg-accent/10 border-accent/50 dark:border-accent/50 shadow-xl -translate-y-1"
          : "bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/60"
      )}
    >
      {/* Background Decorative Gradient */}
      <div className={cn(
        "absolute -right-8 -bottom-8 w-32 h-32 bg-accent/5 rounded-full blur-2xl transition-opacity duration-500",
        isHovered ? "opacity-100" : "opacity-0"
      )} />

      <div>
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
          isHovered ? "bg-accent text-white rotate-6" : "bg-accent/10 dark:bg-accent/20 text-accent"
        )}>
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
          <DropInHoverText text={item.title} trigger={isHovered} highlightClass="text-accent" />
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-8 flex items-center text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn more <ArrowRight className="ml-1 w-3 h-3" />
      </div>
    </motion.div>
  );
};


const GlossyCard = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const images = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Data Dashboard
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", // Charts
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // Consolidated Nexus
  ];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl h-full flex flex-col transition-all duration-300 shadow-lg hover:shadow-2xl dark:shadow-none"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[index % images.length]}
          alt={item.title}
          className="w-full h-full object-cover opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/90 dark:via-slate-950/80 to-transparent" />
      </div>

      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, hsla(34, 67%, 57%, 0.12), transparent 40%)`,
        }}
      />

      {/* Glossy Border Effect */}
      <div
        className="pointer-events-none absolute -inset-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, hsla(34, 67%, 57%, 0.2), transparent 40%)`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
        }}
      />

      <div className="relative z-20 p-8 flex flex-col h-full">
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-accent/25",
        )}>
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          <DropInHoverText text={item.title} trigger={isHovered} highlightClass="text-accent" />
        </h3>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
          {item.description}
        </p>

        <div className="mt-auto pt-8 flex items-center text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Live Data Stream <TrendingUp className="ml-2 w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
};

const JourneyStep = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative p-8 rounded-3xl border transition-all duration-700 h-full flex flex-col group overflow-hidden",
        isHovered
          ? "bg-accent/10 dark:bg-accent/10 border-accent/30 shadow-[0_20px_50px_-15px_rgba(219,154,70,0.15)] scale-[1.02] -translate-y-2"
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
      )}
    >
      {/* Background Number */}
      <div className="absolute top-4 right-6 text-7xl font-bold opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:opacity-10 transition-opacity">
        0{index + 1}
      </div>

      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500",
        isHovered ? "bg-accent text-white scale-110 shadow-lg shadow-accent/20" : "bg-accent/10 dark:bg-accent/10 text-accent"
      )}>
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        <DropInHoverText text={item.title} trigger={isHovered} highlightClass="text-accent" />
      </h3>

      <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
        {item.description}
      </p>

      {/* Mini Visual Decorations per step */}
      <div className="mt-auto relative h-24 w-full rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 overflow-hidden p-4">
        {index === 0 && (
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              <span>Available slots</span>
              <span className="text-accent font-bold">12:30 PM</span>
            </div>
            <div className="flex gap-1.5 opacity-50">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-6 w-full rounded-md bg-accent/10" />)}
            </div>
          </div>
        )}

        {index === 1 && (
          <div className="relative h-full flex items-center justify-center">
            <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                className="h-full bg-accent"
              />
            </div>
            <div className="absolute -top-4 right-0 px-2 py-0.5 rounded bg-accent text-white text-[8px] font-bold">Signed</div>
          </div>
        )}

        {index === 2 && (
          <div className="flex items-center gap-4 h-full">
            <div className="w-full bg-accent/5 rounded-lg p-2 flex items-center justify-between border border-accent/10">
              <div className="text-[10px] font-mono dark:text-accent">#INV-8952</div>
              <div className="h-4 w-4 rounded-full bg-accent flex items-center justify-center">
                <CheckCircle size={10} className="text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const CommandCenter = () => {
  const features = [
    {
      title: "Capture & Manage Leads",
      description: "Forms, funnels, call tracking and chat widgets feed directly into your CRM. No more double entry or lost notes.",
      icon: Users,
    },
    {
      title: "All Conversations in One Dashboard",
      description: "View calls, texts, emails and chats alongside each contact. Track pipelines and reports from the same screen.",
      icon: MessageSquare,
    },
    {
      title: "Centralise Your Sales Process",
      description: "See where each prospect is in your pipeline; drag and drop deals between stages.",
      icon: TrendingUp,
    },
  ];

  const automations = [
    {
      title: "Automate Emails, Texts & Funnels",
      description: "Pre‑built workflows nurture prospects and customers, ensuring timely follow‑ups.",
      icon: Mail,
    },
    {
      title: "Set Triggers Once, Reap Results Forever",
      description: "Automations fire based on behaviour—such as form submissions, missed calls or invoice payments—so nothing falls through the cracks.",
      icon: Zap,
    },
    {
      title: "Convert More While You Sleep",
      description: "Automatic nurturing sequences warm up leads and schedule appointments without human effort.",
      icon: Settings,
    },
  ];

  const tools = [
    {
      title: "Easy Bookings",
      description: "Prospects can book appointments through integrated calendars; reminders reduce no‑shows.",
      icon: Calendar,
    },
    {
      title: "Integrated Payments",
      description: "Generate invoices, accept deposits and sell packages directly from the system. Transactions are logged against each contact for a complete history.",
      icon: CreditCard,
    },
    {
      title: "Contracts & Estimates",
      description: "Send proposals and contracts for digital signatures, speeding up the closing process.",
      icon: FileText,
    },
  ];

  const visibility = [
    {
      title: "At‑a‑Glance Reporting",
      description: "Monitor revenue, pipeline value and marketing performance in real time.",
      icon: BarChart3,
    },
    {
      title: "Custom Dashboards",
      description: "Create views for sales, marketing and operations teams so everyone sees the data that matters most.",
      icon: TrendingUp,
    },
    {
      title: "Stop Juggling Tools",
      description: "Replace multiple apps with one powerful platform.",
      icon: Shield,
    },
  ];

  const integrations = [
    "No duplication: When AI employees book appointments or capture leads, the data flows straight into your Command Center.",
    "Unified experience: Whether a customer calls, chats or fills out a form, everything is tracked in one record.",
    "Easier collaboration: Your human team can jump into any conversation thread or deal stage knowing the full context.",
  ];

  const sections = [
    // Hero Section
    // Hero Section - Command Center Style
    <section key="hero" className="min-h-screen lg:h-screen w-full flex items-center justify-center relative overflow-hidden pt-24 pb-20 lg:pt-0 lg:pb-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Enhanced Background decoration from HeroSection */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-[120px]"
        />

        {/* Premium grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 dark:bg-accent/10 border border-accent/20 dark:border-accent/30 text-accent mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-wide uppercase">Operational Control</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
              Control Your Entire Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 dark:from-accent dark:to-accent/80">
                From One Screen
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed font-medium">
              The central nervous system for your operations. Unify CRM, sales pipelines, marketing automations, and AI feedback loops into a single, real-time command center.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-accent/20">
                Start Monitoring
              </Button>
              <Button variant="outline" className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full px-8 h-12 text-base">
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Image (3D Dashboard) */}
          <div className="relative w-full" style={{ perspective: '1000px' }}>
            <motion.div
              initial={{ opacity: 0, rotateX: 10, rotateY: -10, scale: 0.9 }}
              animate={{ opacity: 1, rotateX: 5, rotateY: -10, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-accent/10 dark:shadow-accent/20 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transform-style-3d group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/10 pointer-events-none group-hover:opacity-75 transition-opacity" />
              <img
                src={dashboardMockup}
                alt="Command Center Dashboard"
                className="w-full h-auto object-contain rounded-xl"
              />

              {/* Floating Elements (Optional Decoration) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-accent/20 dark:border-accent/30 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Monthly Revenue</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">$124,500 <span className="text-accent text-xs ml-1">+12%</span></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 dark:bg-accent/20 blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>,

    // Unified CRM & Marketing Hub
    <section key="features" className="min-h-screen lg:min-h-screen w-full flex items-center justify-center py-16 lg:py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Animated gold/Accent Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, -15, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent/20 via-primary/15 to-transparent rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="section-headline mb-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
            {/* Staggered Letter Animation for Title */}
            {"Unified CRM & Marketing Hub".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: (wordIndex * 0.1) + (charIndex * 0.03),
                      ease: "easeOut"
                    }}
                    className={cn(
                      "inline-block",
                      (word === "CRM" || word === "Marketing") ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 dark:from-accent dark:to-accent/80" : ""
                    )}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="flex justify-center">
              <ThreeDCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>,

    // Automations
    <section key="automations" className="min-h-screen lg:min-h-screen w-full flex items-center justify-center py-16 lg:py-24 relative bg-slate-50 dark:bg-slate-950/50 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content: Logic Flow */}
          <div className="relative">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 dark:bg-accent/10 border border-accent/20 dark:border-accent/30 text-accent mb-6">
                <Zap className="w-3 h-3 text-accent" />
                <span className="text-xs font-semibold tracking-wide uppercase">Workflow Engine</span>
              </div>
              <h2 className="section-headline mb-8">
                Automations That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 dark:from-accent dark:to-accent/80">
                  Work While You Sleep
                </span>
              </h2>

              <div className="relative space-y-8">
                {/* Vertical Connection Line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent/50 via-accent/30 to-transparent" />

                {automations.map((item, index) => (
                  <AutomationCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content: Workflow Visualization */}
          <AnimatedSection direction="right" className="relative h-full flex items-center justify-center">
            {/* Abstract Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-md aspect-[4/5] bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col">
              {/* Mock Header */}
              <div className="h-12 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/30" />
                </div>
                <div className="ml-4 text-xs font-mono text-slate-400 dark:text-slate-500">workflow_builder.exe</div>
              </div>

              {/* Canvas Area */}
              <div className="flex-1 p-6 relative bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]">
                {/* Animated Nodes */}
                <div className="flex flex-col gap-8 relative z-10 h-full justify-center">

                  {/* Trigger Node */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="bg-white dark:bg-slate-800 border border-accent/20 dark:border-accent/30 p-4 rounded-xl shadow-lg relative"
                  >
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-lg bg-accent" />
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 dark:bg-accent/20 text-accent"><Users size={16} /></div>
                      <div>
                        <div className="text-[10px] text-accent font-bold uppercase tracking-wider">Trigger</div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">New Lead Submitted</div>
                      </div>
                    </div>
                    {/* Connector Line Down */}
                    <div className="absolute left-8 bottom-0 translate-y-full h-8 w-0.5 bg-slate-200 dark:bg-slate-700">
                      <motion.div
                        animate={{ height: ["0%", "100%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-full bg-accent"
                      />
                    </div>
                  </motion.div>

                  {/* Action Node 1 */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-slate-800 border border-accent/20 dark:border-accent/30 p-4 rounded-xl shadow-lg relative ml-8"
                  >
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 z-20" />
                    {/* Connecting Curve */}
                    <div className="absolute -left-8 -top-8 w-8 h-[calc(100%+32px)] border-l-2 border-b-2 border-slate-200 dark:border-slate-700 rounded-bl-2xl -z-10" />

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 dark:bg-accent/20 text-accent"><Mail size={16} /></div>
                      <div>
                        <div className="text-[10px] text-accent font-bold uppercase tracking-wider">Action</div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">Send Welcome Email</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Delay Node */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white dark:bg-slate-800 border border-accent/20 dark:border-accent/30 p-3 rounded-lg shadow-lg relative w-max self-center"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Wait 2 Days</span>
                    </div>
                    {/* Connector Line Down */}
                    <div className="absolute left-1/2 bottom-0 translate-y-full h-8 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2" />
                  </motion.div>

                  {/* Action Node 2 */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white dark:bg-slate-800 border border-accent/20 dark:border-accent/30 p-4 rounded-xl shadow-lg relative"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-200 dark:bg-slate-700" />
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 dark:bg-accent/20 text-accent"><MessageSquare size={16} /></div>
                      <div>
                        <div className="text-[10px] text-accent font-bold uppercase tracking-wider">Follow Up</div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">SMS Check-in</div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>,

    // Scheduling & Payments - Three Step Journey
    <section key="tools" className="min-h-screen lg:min-h-screen w-full flex items-center justify-center py-16 lg:py-24 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 dark:bg-accent/10 border border-accent/20 dark:border-accent/30 text-accent mb-6">
              <CreditCard className="w-3 h-3 text-accent" />
              <span className="text-xs font-semibold tracking-wide uppercase">Financial Ecosystem</span>
            </div>
            <h2 className="section-headline mb-6">
              Built‑In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 dark:from-accent dark:to-accent/80">Scheduling & Payments</span>
            </h2>
            <p className="body-large text-slate-500 dark:text-slate-400">
              From first hello to final settlement. Manage the entire customer lifecycle without leaving your command center.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {tools.map((item, index) => (
            <JourneyStep key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>,

    // Real-Time Visibility
    <section key="visibility" className="min-h-screen lg:min-h-screen w-full flex items-center justify-center py-16 lg:py-24 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(219,154,70,0.1)_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-40 dark:opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 dark:via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 dark:bg-accent/10 border border-accent/20 dark:border-accent/30 text-accent mb-6 font-medium">
            <BarChart3 className="w-3 h-3" />
            <span className="text-xs tracking-wide uppercase">Performance Insights</span>
          </div>
          <h2 className="section-headline mb-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
            {/* Staggered Letter Animation for Title */}
            {"Real‑Time Visibility".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: (wordIndex * 0.1) + (charIndex * 0.03),
                      ease: [0.215, 0.61, 0.355, 1]
                    }}
                    className={cn(
                      "inline-block",
                      (word === "Visibility") ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 dark:from-accent dark:to-accent/80" : "text-slate-900 dark:text-white"
                    )}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
          <p className="body-large text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Complete transparency into your operations. Monitor every lead, deal, and dollar in real-time through high-performance dashboards.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {visibility.map((item, index) => (
            <GlossyCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>,

    // Seamless Integration
    <section key="integrations" className="min-h-screen lg:min-h-screen w-full flex items-center justify-center py-20 lg:py-24 relative bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content: 3D Image Card */}
          <AnimatedSection direction="left" className="relative group">
            <ThreeDImageCard
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="AI integration dashboard"
            />
          </AnimatedSection>

          {/* Right Content: Advanced Integration Nodes */}
          <div>
            <AnimatedSection direction="right" className="mb-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 dark:bg-accent/10 border border-accent/20 dark:border-accent/30 text-accent mb-4">
                <Shield className="w-3 h-3" />
                <span className="text-xs font-semibold tracking-wide uppercase">Unified Infrastructure</span>
              </div>
              <h2 className="section-headline mb-4 text-left font-bold">
                Seamless Integration with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 dark:from-accent dark:to-accent/80">AI Employees</span>
              </h2>
              <p className="body-large text-slate-500 dark:text-slate-400 text-left mb-8 max-w-xl">
                Bridge the gap between artificial intelligence and human operations. Our command center acts as the final destination for all automated interactions.
              </p>

              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <IntegrationNode
                    key={index}
                    text={integration}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>,

    // Why It Matters (Strategic Advantage Card)
    <StrategicAdvantageCard key="cta-footer" />
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        {sections}
      </main>
    </div>
  );
};

const StrategicAdvantageCard = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="min-h-screen lg:min-h-screen w-full flex flex-col relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(219,154,70,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="flex-grow flex items-center justify-center py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection direction="up">
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              whileHover={{ y: -5 }}
              className="relative p-10 lg:p-16 rounded-[2.5rem] overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 shadow-2xl dark:shadow-none group"
            >
              {/* Glossy Border Effect */}
              <div
                className="pointer-events-none absolute -inset-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2.5rem]"
                style={{
                  background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsla(34, 67%, 57%, 0.4), transparent 40%)`,
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                }}
              />

              {/* Dynamic Gloss Fade Background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, hsla(34, 67%, 57%, 0.08), transparent 80%)`,
                }}
              />

              {/* Internal Mesh Background */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

              <div className="relative z-20 text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 dark:bg-accent/10 border border-accent/20 dark:border-accent/30 text-accent mb-6 transition-transform duration-500 group-hover:scale-105">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold tracking-widest uppercase">Strategic Advantage</span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                  <DropInHoverText text="Why It Matters" trigger={true} highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 dark:from-accent dark:to-accent/80" />
                </h2>

                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed font-medium">
                  The Command Center isn’t just a CRM. It’s your business’s heartbeat. Centralising tools saves time, reduces errors and gives you visibility into what’s working and what’s not. Focus on growth, not juggling apps.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <MagneticWrapper strength={0.2}>
                    <Button
                      className="h-16 px-10 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(219,154,70,0.3)] hover:-translate-y-1 group/btn relative overflow-hidden"
                      onClick={handleBookingRedirect}
                    >
                      <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10 flex items-center gap-3">
                        Book a Strategy Call  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </MagneticWrapper>

                  {/* <button className="text-slate-500 dark:text-slate-400 font-semibold hover:text-accent transition-colors flex items-center gap-2 group/text">
                    Book a Strategy Call <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/text:opacity-100 group-hover/text:translate-x-0 transition-all" />
                  </button> */}
                </div>
              </div>

              {/* Decorative Corner Glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 blur-[60px] rounded-full" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CommandCenter;
