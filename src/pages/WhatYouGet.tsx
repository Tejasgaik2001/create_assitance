import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Headphones, Layers3, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { useRef, useState } from "react";
import { AssemblingWord } from "@/components/ui/AssemblingWord";

// Scroll-linked section wrapper
const ScrollSection = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Flip Card Component
const RoadmapCard = ({ pillar, index }: { pillar: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = pillar.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      className="relative w-full h-[500px] perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700 preserve-3d"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face - Image */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl border border-border/20 bg-background">
          <img
            src={pillar.image}
            alt={pillar.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
            </div>
            <p className="text-white/80 text-sm font-medium">Hover to explore details</p>
          </div>
        </div>

        {/* Back Face - Content */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl border border-border/40 bg-background/95 backdrop-blur-xl p-8 flex flex-col justify-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">{pillar.title}</h3>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            {pillar.subtitle}
          </p>

          <ul className="space-y-4">
            {pillar.points.map((point: string) => (
              <li key={point} className="flex items-start gap-3 text-muted-foreground/90 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Connector Dot for Desktop */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-20 hidden md:block
        ${isEven ? "-right-[58px]" : "-left-[58px]"}`}
      />
    </div>
  );
};

const WhatYouGet = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Main scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Narrative section scroll progress for snake drawing
  const { scrollYProgress: narrativeProgress } = useScroll({
    target: narrativeRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(narrativeProgress, [0, 0.8], [0, 1]);

  // Parallax transforms
  const backgroundY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const guidingLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const guidingLineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.6, 0.6, 0]);

  const pillars = [
    {
      title: "Business Operating System",
      subtitle: "Integrated CRM & Marketing",
      icon: Layers3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      points: [
        "All your tools in one place: Forms, funnels, email/SMS campaigns",
        "Never miss a lead: every call, text, chat and form submission captured",
        "Automated follow-ups: workflows and nurturing sequences",
        "Crystal-clear visibility: conversations and sales stages",
      ],
    },
    {
      title: "AI Voice & Chat Employees",
      subtitle: "Human-like coverage, 24/7",
      icon: BrainCircuit,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      points: [
        "24/7 coverage: outbound/inbound calls, texts and chats",
        "Smart conversations: answer FAQs, qualify leads, book appts",
        "Free your team: remove repetitive work, focus on high-value tasks",
        "Always on brand: trained on your scripts and tone",
      ],
    },
    {
      title: "Done-For-You Setup",
      subtitle: "White-glove onboarding + support",
      icon: Headphones,
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80",
      points: [
        "Launch in weeks: go live in as little as four weeks",
        "Custom configuration: automations tailored to your business",
        "Ongoing partnership: check-ins, AI re-training and support",
        "Built on trust: family-owned and U.S.-based service",
      ],
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background transition-colors duration-300 relative">
      <Header />

      {/* Guiding gradient line for page flow */}
      {!prefersReducedMotion && (
        <motion.div
          className="fixed left-8 top-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent pointer-events-none z-40 hidden lg:block"
          style={{
            height: guidingLineHeight,
            opacity: guidingLineOpacity,
          }}
        />
      )}

      <main>
        {/* Hero Section */}
        <ScrollSection className="relative overflow-hidden pt-24 pb-16">
          {/* Background effects */}
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
              style={{ y: backgroundY1 }}
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
              style={{ y: backgroundY2 }}
            />

            {/* Premium grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

            {/* Glowing Data Lines - subtle for this page */}
            <motion.div
              animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden sm:block"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 mb-6">
                <span className="text-xs font-medium">The Complete Create Assistants Solution</span>
              </div>

              <h1 className="hero-headline mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">What You Get –</span>
                <span className="block text-gradient">A Turnkey Growth Engine</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium mb-10">
                You don't need another app; you need a system that works. Create Assistants combines a powerful business
                operating system, human-like AI employees and hands-on support.
              </p>

              {/* <MagneticWrapper strength={0.25}>
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20">
                  Explore The Roadmap
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </MagneticWrapper> */}
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </ScrollSection>

        {/* Snake Roadmap Section */}
        <section ref={narrativeRef} className="py-24 relative overflow-visible">
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-24">
              <h2 className="section-headline mb-6">
                The Path to <span className="text-gradient">Automated Growth</span>
              </h2>
              <p className="body-large max-w-3xl mx-auto">
                Hover over each step to discover how our pillars drive your success.
              </p>
            </div>

            <div className="max-w-5xl mx-auto relative">
              {/* Snake Curved Line - Desktop Only */}
              <div className="absolute inset-0 pointer-events-none hidden md:block h-full" aria-hidden="true">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* Base Track - Faint */}
                  <path
                    d="M 25 10 C 25 25, 75 25, 75 50 C 75 75, 25 75, 25 90"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="0.5"
                    className="text-foreground"
                    vectorEffect="non-scaling-stroke"
                    style={{ strokeDasharray: "4 4" }}
                  />
                  {/* Filling Animation Track - Bright */}
                  <motion.path
                    d="M 25 10 C 25 25, 75 25, 75 50 C 75 75, 25 75, 25 90"
                    fill="none"
                    stroke="url(#snake-gradient)"
                    strokeWidth="1.5"
                    pathLength={pathLength}
                    vectorEffect="non-scaling-stroke"
                    style={{
                      pathLength: pathLength,
                      filter: "drop-shadow(0 0 4px rgba(249, 115, 22, 0.5))"
                    }}
                  />
                  <defs>
                    <linearGradient id="snake-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="space-y-12 md:space-y-0 relative z-10">
                {pillars.map((pillar, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={pillar.title}
                      className={`md:flex ${isEven ? 'md:justify-start' : 'md:justify-end'} relative md:py-16`}
                    >
                      <motion.div
                        className="md:w-[45%]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <RoadmapCard pillar={pillar} index={index} />
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <ScrollSection className="py-24 relative bg-muted/30 overflow-hidden border-y border-border/40">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
              style={{ y: backgroundY1 }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="section-headline mb-6">
                Why It <span className="text-gradient">Matters</span>
              </h2>
              <p className="body-large text-lg md:text-xl text-muted-foreground leading-relaxed">
                By combining these three pillars: <motion.span
                  whileHover={{ scale: 1.1, color: "hsl(var(--primary))", textShadow: "0 0 20px hsla(var(--primary), 0.4)" }}
                  className="text-foreground font-bold cursor-default inline-block transition-colors duration-300"
                >
                  unified software
                </motion.span>, <motion.span
                  whileHover={{
                    scale: 1.1,
                    color: "hsl(var(--accent))",
                    textShadow: "0 0 20px hsla(var(--accent), 0.4)",
                    y: [0, -2, 0]
                  }}
                  transition={{ y: { duration: 0.4, repeat: Infinity, ease: "easeInOut" } }}
                  className="text-foreground font-bold cursor-default inline-block transition-colors duration-300 ml-1"
                >
                  AI employees
                </motion.span> and <motion.span
                  whileHover={{ scale: 1.1, color: "hsl(var(--primary))", letterSpacing: "0.02em" }}
                  className="text-foreground font-bold cursor-default inline-block transition-all duration-300 ml-1"
                >
                  white-glove service
                </motion.span>, you get more than a toolkit. You get a complete operating system designed to capture every opportunity and grow with you.
              </p>
            </motion.div>
          </div>
        </ScrollSection>

        {/* CTA Section */}
        <ScrollSection className="py-24 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
              style={{ y: backgroundY1 }}
            />
            <motion.div
              className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
              style={{ y: backgroundY2 }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-headline mb-6">
                Ready to see how these <AssemblingWord word="pieces" className="text-gradient" /> <br className="md:hidden" />
                fit together?
              </h2>
              <p className="body-large mb-10">
                Next up: a deeper look at our AI Employees.
              </p>

              <MagneticWrapper strength={0.25}>
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
                  <Link to="/ai-employees">
                    Explore our AI Employees
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </MagneticWrapper>
            </div>
          </div>
        </ScrollSection>
      </main>
      <Footer />

      <style>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default WhatYouGet;
