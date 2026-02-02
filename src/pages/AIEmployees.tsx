import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, Users, Shield, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSnapContainer } from "@/components/FullScreenSection";
import AuroraBackground from "@/components/AuroraBackground";
import heroImage from "@/assets/hero-ai-premium.png";

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
      icon: Bot,
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
      title: "Take Payments",
      description: "Take payments when appropriate, integrating seamlessly with your CRM.",
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
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Efficiency",
      description: "Free your staff from repetitive tasks and focus on growing your business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Conversion",
      description: "Improve conversion rates with consistent, automated follow-up sequences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Scalability",
      description: "Scale without headcount—handle unlimited conversations simultaneously.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "24/7 Service",
      description: "Deliver better service around the clock with instant responses anytime.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const sections = [
    // Hero Section - Revamped for SaaS Standard
    <div key="hero" className="min-h-screen lg:h-screen w-full flex items-center justify-center relative bg-white dark:bg-[#020617] pt-32 pb-20 lg:pt-24 lg:pb-0 overflow-hidden">
      {/* SaaS Standard Background: Grid + Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.2]"
          style={{ backgroundImage: 'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Cinematic Glows */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] lg:w-[50%] h-[50%] bg-primary/10 dark:bg-primary/20 blur-[120px] lg:blur-[150px] rounded-full" />
      </div>

      {/* Decorative Tech Elements (Standard SaaS Feel) */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full pointer-events-none overflow-hidden">
        {/* Glowing Data Lines - Visible on larger screens */}
        <motion.div
          animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden sm:block"
        />
        <motion.div
          animate={{ x: [100, -100], opacity: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden sm:block"
        />

        {/* Floating Abstract Shapes - Hidden on smallest screens */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] lg:right-[10%] top-[10%] lg:top-[15%] w-32 h-32 lg:w-64 lg:h-64 border border-primary/10 rounded-full flex items-center justify-center opacity-40 lg:opacity-100"
        >
          <div className="w-[80%] h-[80%] border border-primary/5 rounded-full" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 xl:gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={itemVariants}
              className="text-accent font-bold tracking-[0.2em] uppercase text-sm sm:text-base"
            >
              The Future of Business Efficiency
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              Meet Your <span className="block text-accent dark:text-accent">Hardest‑Working</span>
              <span className="block">Team Members</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg xl:text-xl max-w-xl leading-relaxed mt-2"
            >
              Businesses lose thousands in missed calls and slow follow‑ups. Prospects expect answers in seconds, not hours. Create Assistants solves this with AI employees, fully trained voice and chat assistants that work around the clock.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-4 xl:mt-8 flex flex-wrap gap-3 xl:gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-5 lg:px-6 lg:py-6 xl:px-10 xl:py-8 text-base xl:text-xl rounded-2xl shadow-2xl shadow-accent/20 transition-all hover:scale-105 active:scale-95">
                Let's Explore AI
              </Button>
              <Button variant="outline" size="lg" className="px-5 py-5 lg:px-6 lg:py-6 xl:px-10 xl:py-8 text-base xl:text-xl rounded-2xl border-accent/20 hover:bg-accent/10 transition-all">
                See it in Action
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
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
                alt="AI Professional"
                className="relative z-10 w-full h-auto object-contain rounded-[40px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_20px_50px_rgba(255,220,100,0.15)] transition-all duration-700 group-hover:scale-[1.02]"
              />

              {/* Status Indicator Card 1 */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 xl:-top-10 xl:-right-10 hidden lg:flex items-center gap-2 xl:gap-4 p-2 xl:p-5 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-xl rounded-xl xl:rounded-3xl shadow-2xl border border-primary/20 z-30"
              >
                <div className="w-8 h-8 xl:w-12 xl:h-12 rounded-lg xl:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 xl:w-6 xl:h-6 text-accent" />
                </div>
                <div>
                  <div className="text-[7px] xl:text-[10px] text-accent font-bold uppercase tracking-widest leading-none">Active Assistant</div>
                  <div className="text-slate-900 dark:text-white font-bold text-xs xl:text-lg leading-none mt-1">AI Employee #402</div>
                </div>
              </motion.div>

              {/* Status Indicator Card 2 */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-6 left-2 lg:bottom-10 lg:left-4 xl:-bottom-10 xl:-left-10 hidden lg:flex items-center gap-2 xl:gap-4 p-2 xl:p-5 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-xl rounded-xl xl:rounded-3xl shadow-2xl border border-primary/20 z-30"
              >
                <div className="w-8 h-8 xl:w-12 xl:h-12 rounded-lg xl:rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 xl:w-6 xl:h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-[7px] xl:text-[10px] text-green-500 font-bold uppercase tracking-widest leading-none">Performance</div>
                  <div className="text-slate-900 dark:text-white font-bold text-xs xl:text-lg leading-none mt-1">99.8% Accuracy</div>
                </div>
              </motion.div>

              {/* Live Tag */}
              <div className="absolute top-8 left-8 z-30 flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-xs font-bold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse" />
                LIVE PROCESSING
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>,

    // What Are AI Employees
    <div key="what" className="min-h-screen lg:h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950 relative py-10 md:py-20 lg:py-0 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4"
          >
            Efficiency Redefined
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-headline mb-6 text-slate-900 dark:text-white"
          >
            What Are <span className="text-accent dark:text-accent">AI Employees?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed"
          >
            Our AI voice and chat employees interact with prospects and customers via phone, text and website chat. They are trained on your scripts, FAQs and brand guidelines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mt-10 gap-6 lg:gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_rgba(255,190,0,0.15)] transition-all duration-300"
              >
                {/* Connection Line Decor */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-[2px] bg-gradient-to-r from-indigo-100 to-transparent z-0 pointer-events-none" />
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:rotate-12 transition-all duration-500 shadow-sm border border-accent/20">
                    <Icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-500" />

                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold text-primary/40 dark:text-primary/60 uppercase tracking-tighter">0{index + 1}</span>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white">{item.title}</h3>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>

                  <div className=" pt-6 border-t border-slate-50 dark:border-slate-800/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-semibold text-accent">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                </div>

                {/* Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-tr-3xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>,

    // 24/7 Responses
    <div key="247" className="min-h-screen lg:h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 dark:from-slate-950 to-white dark:to-slate-900 text-slate-900 dark:text-white relative py-10 md:py-20 lg:py-0 overflow-hidden">
      {/* Dark theme background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="section-headline mb-6 text-slate-900 dark:text-white"
            >
              Instant Responses <span className="text-accent dark:text-accent">24/7</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="body-large mb-4 text-slate-600 dark:text-slate-300"
            >
              Unlike traditional staff, AI employees never sleep. They answer calls, texts and chats within seconds, even at 2 AM. This immediate engagement reduces lead drop‑off and increases conversion rates.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-400"
            >
              Every interaction is logged in your system so nothing falls through the cracks.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-64 sm:h-80 lg:max-h-[70vh] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
              alt="24/7 AI support"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-medium text-slate-900 dark:text-slate-200">Always Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>,

    // Benefits
    <div key="benefits" className="min-h-screen lg:h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950/50 py-10 md:py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-12 text-center text-slate-900 dark:text-white"
        >
          Benefits at a <span className="text-gradient">Glance</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col sm:flex-row bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-accent/20 transition-all min-h-[160px] md:h-full"
            >
              <div className="w-full sm:w-1/2 h-32 sm:h-auto relative overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>,

    // Personalised & Consistent
    <div key="personalised" className="min-h-screen lg:h-screen w-full flex items-center justify-center bg-white dark:bg-[#020617] relative py-10 md:py-20 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="section-headline mb-6 text-slate-900 dark:text-white"
            >
              Personalised & <span className="text-accent dark:text-accent">Consistent</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              AI employees learn your business rules and FAQs to deliver personalized service. Whether someone calls, texts or chats on your website, they receive the same friendly tone and accurate information. Your brand voice stays consistent across every customer touchpoint.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="order-1 lg:order-2 relative h-80 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80" alt="Consistent Brand Voice" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>,

    // Integrated & Seamless
    <div key="integrated" className="min-h-screen lg:h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900/20 relative py-10 md:py-20 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Seamless Integration" className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="section-headline mb-6 text-slate-900 dark:text-white"
            >
              Integrated & <span className="text-accent dark:text-accent">Seamless</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              These digital team members plug directly into your command center. Leads captured by AI employees flow into your CRM with tags and notes; appointments sync to your calendar; and payments post to your accounts. No copy‑pasting or manual data entry.
            </motion.p>
          </div>
        </div>
      </div>
    </div>,

    // Work With Humans, Not Instead of Them
    <div key="humans" className="min-h-screen lg:h-screen w-full flex items-center justify-center bg-white dark:bg-[#020617] relative py-10 md:py-20 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="section-headline mb-6 text-slate-900 dark:text-white"
            >
              Work With Humans, <span className="text-accent dark:text-accent">Not Instead</span> of Them
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
            >
              AI employees augment your team rather than replacing it. They handle the repetitive calls and emails that slow your staff down, freeing your people to nurture relationships and close deals.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-500 dark:text-slate-400 italic"
            >
              At any point, your human team can take over a conversation, and you maintain full control.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-48 sm:h-64 lg:h-96 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl mt-8 lg:mt-0"
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team Nurturing" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>,

    // CTA Section & Footer merged
    <div key="cta-footer" className="min-h-screen lg:h-screen w-full flex flex-col bg-slate-50 dark:bg-[#020617] selection:bg-accent/30">
      <div className="flex-grow flex items-center justify-center relative overflow-hidden py-12 lg:py-0">
        {/* Abstract background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-accent/5 dark:bg-accent/10 skew-x-[-12deg] translate-x-32" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 mt-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 dark:bg-accent/10 border border-accent/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Growth Engine</span>
              </div>

              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white"
              >
                Ready to <span className="text-accent dark:text-accent">Transform</span> Your Business?
              </motion.h2>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Want to see how AI employees can transform your customer interactions?
              </p>

              <div className="relative group w-fit">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="xl" className="group bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl shadow-2xl shadow-accent/20 transition-all font-bold px-12" asChild>
                    <a href="/command-center">
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </motion.div>

                {/* Enhanced Tooltip - Professional SaaS Content - Hidden on mobile */}
                <div className="absolute bottom-full left-0 mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-50 hidden sm:block">
                  <div className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl shadow-3xl border border-slate-200 dark:border-slate-800 w-72 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Secure Deployment</div>
                        <div className="text-[10px] text-slate-500">SOC2 Type II Compliant</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-3 h-3 text-accent" />
                        <span>Instant CRM Sync</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                        <Users className="w-3 h-3 text-accent" />
                        <span>Dedicated Onboarding</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                        <Clock className="w-3 h-3 text-accent" />
                        <span>24/7 Performance Monitoring</span>
                      </div>
                    </div>
                    {/* Tooltip Corner */}
                    <div className="absolute bottom-[-6px] left-10 w-3 h-3 bg-white dark:bg-[#0f172a] border-r border-b border-slate-200 dark:border-slate-800 rotate-45" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-3xl bg-white dark:bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="AI Strategy"
                  className="w-full h-[350px] object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent" />

                {/* Floating UI Elements over image - Hidden on mobile/tablet */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 p-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hidden xl:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold dark:text-white">API Integration Active</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-8 right-8 p-6 bg-accent rounded-3xl shadow-2xl text-accent-foreground max-w-[200px] hidden xl:block"
                >
                  <div className="text-3xl font-bold mb-1">94%</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-80 leading-tight">Reduction in Response Latency</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>,
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        <AnimatedSnapContainer>
          {sections}
        </AnimatedSnapContainer>
      </main>
    </div>
  );
};

export default AIEmployees;
