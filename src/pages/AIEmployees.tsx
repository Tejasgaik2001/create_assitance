import { m, useInView, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Shield, CheckCircle, Headphones } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/generated/humanized-tech-team.webp";
import leadCaptureImg from "@/assets/generated/lead-capture-v2.webp";
import efficiencyImg from "@/assets/generated/conversion-growth.webp";
import effiImg from "@/assets/generated/eficciancy.jpg";
import scalabilityImg from "@/assets/external/scalability.jpg";
import service247Img from "@/assets/external/24-7-service.jpg";
import instantResponsesImg from "@/assets/external/instant-responses.webp";
import personalisedImg from "@/assets/external/personalised.jpg";
import seamlessImg from "@/assets/external/seamless.jpg";
import humanHandoffImg from "@/assets/external/human-handoff.jpg";
import aiStrategyImg from "@/assets/external/ai-strategy.jpg";
import { handleBookingRedirect, handleDemoRedirect } from "@/utils/navigation";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const AIEmployees = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const capabilities = [
    {
      title: "Answer Questions",
      description: "Common questions about services and pricing",
      icon: Headphones,
    },
    {
      title: "Qualify Leads",
      description: "Gather key details and determine fit",
      icon: Users,
    },
    {
      title: "Schedule Appointments",
      description: "Book in your calendar and send confirmations",
      icon: Clock,
    },
    {
      title: "Execute Actions",
      description: "Automate contact workflows, track deal closure time and trigger system-wide actions seamlessly",
      icon: Shield,
    },
    {
      title: "Human Routing",
      description: "Route complex queries to your human team whenever needed.",
      icon: Users,
    },
  ];

  const benefits = [
    {
      title: "Lead Capture",
      description: "Capture every lead and respond instantly, never missing a client call.",
      image: leadCaptureImg,
    },
    {
      title: "Efficiency",
      description: "Free your staff from repetitive tasks and focus on growing your business.",
      image: effiImg,
    },
    {
      title: "Conversion",
      description: "Improve conversion rates with consistent, automated follow-up sequences.",
      image: efficiencyImg,
    },
    {
      title: "Scalability",
      description: "Scale without headcount—handle unlimited conversations simultaneously.",
      image: scalabilityImg,
    },
    {
      title: "24/7 Service",
      description: "Deliver better service around the clock with instant responses anytime.",
      image: service247Img,
    },
  ];

  const sections = [
    // Hero Section - Revamped for SaaS Standard
    <section key="hero" className="relative overflow-x-hidden pt-24 pb-16 min-h-screen flex items-center bg-white dark:bg-[#020617]">
      {/* Enhanced Background decoration from HeroSection */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <m.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[140px]"
        />
        <m.div
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

        {/* Glowing Data Lines */}
        <m.div
          animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden sm:block"
        />
        <m.div
          animate={{ x: [100, -100], opacity: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden sm:block"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 xl:gap-16 items-center">
          {/* Left Side: Content */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <m.span
              variants={itemVariants}
              className="text-accent font-bold tracking-[0.2em] uppercase text-sm sm:text-base"
            >
              The Future of Business Efficiency
            </m.span>

            <m.h1
              variants={itemVariants}
              className="text-slate-900 dark:text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              Meet Your <span className="block text-gradient">Hardest‑Working</span>
              <span className="block">Team Members</span>
            </m.h1>

            <m.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium mt-2"
            >
              Businesses lose thousands in missed calls and slow follow‑ups. Prospects expect answers in seconds, not hours. Create Assistants solves this with AI employees, fully trained voice and chat assistants that work around the clock.
            </m.p>

            <m.div variants={itemVariants} className="mt-4 xl:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center">
              <MagneticWrapper strength={0.3} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto relative z-10 rounded-full px-8 sm:px-10 h-12 sm:h-14 bg-gradient-to-r from-accent via-primary to-accent text-accent-foreground shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all text-sm sm:text-base font-bold uppercase tracking-tight overflow-hidden border-none group"
                  onClick={handleBookingRedirect}
                >
                  Book Your Consultation
                </Button>
              </MagneticWrapper>
              <MagneticWrapper strength={0.2} className="w-full lg:hidden">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-12 sm:h-14 px-8 sm:px-10 rounded-full border-accent/20 hover:bg-accent/10 transition-all hover:border-accent/50 text-slate-800 dark:text-white font-bold uppercase tracking-wider text-sm sm:text-base"
                  onClick={handleDemoRedirect}
                >
                  Demo Our AI
                </Button>
              </MagneticWrapper>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative z-20 flex justify-center lg:justify-end lg:pr-4 xl:pr-8 mt-12 lg:mt-0"
          >
            <div className="relative group w-full max-w-[320px] md:max-w-[400px] lg:max-w-[380px] xl:max-w-[600px]">
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full scale-110 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

              <img
                src={heroImage}
                alt="AI Specialist Team"
                loading="lazy"
                className="relative z-10 w-full h-auto max-h-[500px] lg:max-h-[600px] object-cover rounded-[40px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_20px_50px_rgba(255,220,100,0.15)] transition-all duration-700 group-hover:scale-[1.02]"
              />

              {/* Status Indicator Card 1 */}
              <m.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 xl:-top-10 xl:-right-10 hidden lg:flex items-center gap-2 xl:gap-4 p-2 xl:p-5 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-xl rounded-xl xl:rounded-3xl shadow-2xl border border-accent/20 z-30"
              >
                <div className="w-8 h-8 xl:w-12 xl:h-12 rounded-lg xl:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Headphones className="w-4 h-4 xl:w-6 xl:h-6 text-accent" />
                </div>
                <div>
                  <div className="text-[7px] xl:text-[10px] text-accent font-bold uppercase tracking-widest leading-none">Active Specialist</div>
                  <div className="text-slate-900 dark:text-white font-bold text-xs xl:text-lg leading-none mt-1">Specialist Team Alpha</div>
                </div>
              </m.div>

              {/* Status Indicator Card 2 */}
              <m.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-6 left-2 lg:bottom-10 lg:left-4 xl:-bottom-10 xl:-left-10 hidden lg:flex items-center gap-2 xl:gap-4 p-2 xl:p-5 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-xl rounded-xl xl:rounded-3xl shadow-2xl border border-accent/20 z-30"
              >
                <div className="w-8 h-8 xl:w-12 xl:h-12 rounded-lg xl:rounded-2xl bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 xl:w-6 xl:h-6 text-accent" />
                </div>
                <div>
                  <div className="text-[7px] xl:text-[10px] text-accent font-bold uppercase tracking-widest leading-none">Performance</div>
                  <div className="text-slate-900 dark:text-white font-bold text-xs xl:text-lg leading-none mt-1">99.8% Accuracy</div>
                </div>
              </m.div>

              {/* Live Tag */}
              <div className="absolute top-8 left-8 z-30 flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-xs font-bold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse" />
                LIVE PROCESSING
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section >,

    // What Are AI Employees - Story-Based Journey
    <div key="what" className="w-full bg-slate-50 dark:bg-slate-950 relative overflow-hidden py-24 lg:py-40">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <m.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[5%] left-[5%] w-[50%] h-[50%] bg-accent/30 blur-[150px] rounded-full"
        />
        <m.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[5%] right-[5%] w-[40%] h-[40%] bg-primary/25 blur-[130px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <m.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-accent"
            />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">The Customer Journey</span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
          >
            How <span className="text-gradient">AI Employees</span>
            <br />Transform Every Interaction
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Follow the journey of a customer interaction — from first contact to completed transaction
          </m.p>
        </div>

        {/* Story Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Journey Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <m.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-gradient-to-b from-accent/20 via-accent to-accent/20 origin-top rounded-full"
            />
          </div>

          {/* Journey Steps */}
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;
            const storyPrefixes = [
              "When a lead calls...",
              "As the conversation progresses...",
              "Ready to book?",
              "Time to close the deal?",
              "Need human expertise?"
            ];

            return (
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative flex items-center mb-16 lg:mb-24 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Timeline Node - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20">
                  <m.div
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    <m.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute inset-0 w-16 h-16 rounded-full bg-accent/30"
                    />
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center shadow-xl shadow-accent/30 border-4 border-white dark:border-slate-900">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </m.div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-[calc(50%-4rem)] ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <m.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl group"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Mobile Icon */}
                    <div className="lg:hidden mb-6 flex items-center justify-between">
                      <m.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center shadow-lg"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </m.div>
                      <div className="text-3xl font-black text-accent/20">0{index + 1}</div>
                    </div>

                    {/* Story Prefix */}
                    <m.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-accent font-semibold text-sm mb-2 italic"
                    >
                      {storyPrefixes[index]}
                    </m.p>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Step Number - Desktop */}
                    <div className="hidden lg:block absolute top-10 right-8 text-7xl font-black text-accent/10 group-hover:text-accent/40 transition-all duration-700 group-hover:drop-shadow-[0_0_25px_rgba(251,191,36,0.6)] group-hover:scale-110">
                      0{index + 1}
                    </div>

                    {/* Connector Arrow */}
                    <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${isLeft ? '-right-8' : '-left-8'}`}>
                      <m.div
                        animate={{ x: isLeft ? [0, 5, 0] : [0, -5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`w-8 h-8 flex items-center justify-center`}
                      >
                        <ArrowRight className={`w-5 h-5 text-accent ${isLeft ? '' : 'rotate-180'}`} />
                      </m.div>
                    </div>
                  </m.div>
                </div>
              </m.div>
            );
          })}

          {/* Journey End */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <m.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold shadow-xl shadow-accent/30"
            >
              <CheckCircle className="w-5 h-5" />
              Customer Converted Successfully
            </m.div>
          </m.div>
        </div>
      </div>
    </div>,

    // 24/7 Responses
    <div key="247" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 dark:from-slate-950 to-white dark:to-slate-900 text-slate-900 dark:text-white relative overflow-x-hidden py-20 lg:py-32">
      {/* Dark theme background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <m.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="section-headline mb-6 text-slate-900 dark:text-white"
            >
              Instant Responses <span className="text-accent dark:text-accent">24/7</span>
            </m.h2>
            <m.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="body-large mb-4 text-slate-600 dark:text-slate-300"
            >
              Unlike traditional staff, AI employees never sleep. They answer calls, texts and chats within seconds, even at 2 AM. This immediate engagement reduces lead drop‑off and increases conversion rates.
            </m.p>
            <m.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-400"
            >
              Every interaction is logged in your system so nothing falls through the cracks.
            </m.p>
          </div>

          <m.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-64 sm:h-80 lg:max-h-[70vh] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <img
              src={instantResponsesImg}
              alt="24/7 AI support"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-medium text-slate-900 dark:text-slate-200">Always Available</span>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </div>,

    // Benefits
    <div key="benefits" className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950/50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <m.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-12 text-center text-slate-900 dark:text-white"
        >
          Benefits at a <span className="text-gradient">Glance</span>
        </m.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <m.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col lg:flex-row bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-accent/20 transition-all min-h-[160px] lg:h-full"
            >
              <div className="w-full lg:w-1/2 h-48 lg:h-auto relative overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 dark:bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>,

    // Why AI Employees - Cinematic Feature Showcase
    (() => {
      const [activeFeature, setActiveFeature] = useState(0);

      const features = [
        {
          title: "Personalised & Consistent",
          highlight: "Consistent",
          description: "AI employees learn your business rules and FAQs to deliver personalized service. Your brand voice stays consistent across every customer touchpoint.",
          image: personalisedImg,
          stat: "100%",
          statLabel: "Brand Consistency"
        },
        {
          title: "Integrated & Seamless",
          highlight: "Seamless",
          description: "Leads flow into your CRM with tags and notes. Appointments sync to your calendar. Payments post to your accounts. Zero manual data entry.",
          image: seamlessImg,
          stat: "50+",
          statLabel: "Integrations"
        },
        {
          title: "Work With Humans",
          highlight: "Humans",
          description: "AI employees augment your team, not replace it. They handle repetitive tasks, freeing your people to nurture relationships and close deals.",
          image: humanHandoffImg,
          stat: "24/7",
          statLabel: "Human Handoff"
        }
      ];

      return (
        <div key="features-showcase" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-24 lg:py-32">
          {/* Cinematic Background */}
          <div className="absolute inset-0 pointer-events-none">
            <m.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute top-0 left-0 w-[60%] h-[60%] bg-accent/20 blur-[200px] rounded-full"
            />
            <m.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-indigo-500/20 blur-[180px] rounded-full"
            />
            {/* Film grain overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
              >
                <m.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-accent"
                />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Why Choose Us</span>
              </m.div>

              <m.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
              >
                The <span className="text-gradient">AI Advantage</span>
              </m.h2>
            </div>

            {/* Feature Showcase */}
            <div className="max-w-6xl mx-auto">
              {/* Navigation Pills */}
              <div className="flex justify-center gap-3 mb-12">
                {features.map((feature, index) => (
                  <m.button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 ${activeFeature === index
                      ? 'bg-accent text-slate-900 shadow-lg shadow-accent/30'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {feature.highlight}
                  </m.button>
                ))}
              </div>

              {/* Stacked Cards Container */}
              <div className="relative h-[500px] lg:h-[450px]">
                <AnimatePresence mode="popLayout">
                  {features.map((feature, index) => {
                    const isActive = index === activeFeature;
                    const offset = index - activeFeature;

                    return (
                      <m.div
                        key={feature.title}
                        initial={{ opacity: 0, scale: 0.8, y: 100 }}
                        animate={{
                          opacity: isActive ? 1 : 0.3,
                          scale: isActive ? 1 : 0.9 - Math.abs(offset) * 0.05,
                          y: offset * 30,
                          zIndex: isActive ? 30 : 20 - Math.abs(offset),
                          rotateX: offset * 5
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: -100 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0"
                        style={{ perspective: '1000px' }}
                      >
                        <div className={`w-full h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border ${isActive ? 'border-accent/30' : 'border-white/10'} shadow-2xl overflow-hidden transition-all duration-500`}>
                          <div className="grid lg:grid-cols-2 h-full">
                            {/* Content Side */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                              {/* Large Number Background */}
                              <div className="absolute top-8 right-8 lg:top-12 lg:right-12 text-[120px] lg:text-[180px] font-black text-white/[0.03] leading-none select-none">
                                0{index + 1}
                              </div>

                              <m.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -30 }}
                                transition={{ delay: 0.2 }}
                              >
                                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                                  {feature.title.split(feature.highlight)[0]}
                                  <span className="text-accent">{feature.highlight}</span>
                                  {feature.title.split(feature.highlight)[1]}
                                </h3>

                                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-md">
                                  {feature.description}
                                </p>

                                {/* Stat Badge */}
                                <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-accent/10 border border-accent/20">
                                  <span className="text-3xl font-black text-accent">{feature.stat}</span>
                                  <span className="text-sm font-medium text-slate-400">{feature.statLabel}</span>
                                </div>
                              </m.div>
                            </div>

                            {/* Image Side */}
                            <div className="relative hidden lg:block">
                              <m.div
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 1.1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="absolute inset-0"
                              >
                                <img
                                  src={feature.image}
                                  alt={feature.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent" />
                              </m.div>
                            </div>
                          </div>
                        </div>
                      </m.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {features.map((_, index) => (
                  <m.button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className="relative p-1"
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeFeature === index ? 'bg-accent' : 'bg-white/20'
                      }`} />
                    {activeFeature === index && (
                      <m.div
                        layoutId="activeDot"
                        className="absolute inset-0 w-4 h-4 -m-1 rounded-full border-2 border-accent"
                      />
                    )}
                  </m.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    })(),

    // CTA Section
    <div key="cta" className="min-h-screen w-full flex flex-col bg-background lg:bg-slate-50 dark:lg:bg-[#020617] selection:bg-accent/30 overflow-hidden">
      <div className="flex-grow flex items-center justify-center relative py-24 lg:py-32">
        {/* Abstract background elements - hidden on mobile to prevent horizontal scroll */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-accent/5 dark:bg-accent/10 skew-x-[-12deg] translate-x-32" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 mt-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 dark:bg-accent/10 border border-accent/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Growth Engine</span>
              </div>

              <m.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white"
              >
                Ready to <span className="text-accent dark:text-accent">Transform</span> Your Business?
              </m.h2>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Want to see how AI employees can transform your customer interactions?
              </p>

              <div className="relative group w-fit">
                <MagneticWrapper strength={0.25}>
                  <Button
                    size="xl"
                    className="group bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-2xl shadow-accent/20 transition-all font-bold px-12"
                    onClick={handleBookingRedirect}
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticWrapper>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pr-8 pb-8"
            >
              <m.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative lg:max-w-[110%] xl:max-w-none"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                  <img
                    src={aiStrategyImg}
                    alt="AI Strategy"
                    className="w-full h-[320px] md:h-[400px] object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <m.div
                  animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-6"
                >
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-3 border border-slate-200 shadow-xl">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-slate-900">API Integration Active</span>
                  </div>
                </m.div>

                {/* Stat Box */}
                <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-8 lg:-right-12 lg:bottom-12">
                  <m.div
                    animate={{ y: [0, -10, 0], x: [0, 3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-accent p-5 md:p-6 rounded-2xl shadow-2xl shadow-accent/20 border border-white/20 w-44 md:w-56"
                  >
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">94%</div>
                    <div className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider leading-tight">
                      Reduction In <br /> Response Latency
                    </div>
                  </m.div>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-300">
      <Header />
      <main>
        {sections}
      </main>
      <Footer />
    </div>
  );
};

export default AIEmployees;
