import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Headphones, Layers3, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { useState } from "react";

// Floating Pillar Card Component
const FloatingPillarCard = ({ pillar, index }: { pillar: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = pillar.icon;

  // Different floating durations for each card to avoid sync
  const floatDuration = 2.5 + (index * 0.5); // 2.5s, 3s, 3.5s

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? { y: 0 } : { y: [0, -8, 0] }}
      transition={isHovered ? { duration: 0.3 } : { duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
      className="glass-card rounded-2xl overflow-hidden border border-border/40 shadow-xl cursor-pointer"
    >
      <div className="relative h-44 overflow-hidden">
        {/* Image with shrink effect on hover */}
        <motion.img
          src={pillar.image}
          alt={pillar.title}
          className="h-full w-full object-cover"
          loading="lazy"
          animate={{
            scale: isHovered ? 0.95 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"
          animate={{
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon and title - always visible */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
          <motion.div
            className="w-11 h-11 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-border/30 flex items-center justify-center"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-5 h-5 text-primary" />
          </motion.div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-tight">{pillar.title}</h3>
            <motion.p
              className="text-xs text-muted-foreground"
              animate={{
                opacity: isHovered ? 1 : 0.7,
              }}
            >
              {pillar.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Floating info overlay on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="text-xl font-bold mb-2"
                >
                  {pillar.title}
                </motion.h3>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-muted-foreground"
                >
                  {pillar.subtitle}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content section */}
      <motion.div
        className="p-6"
        animate={{
          opacity: isHovered ? 0.6 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="space-y-3">
          {pillar.points.map((point: string, idx: number) => (
            <motion.li
              key={point}
              className="flex items-start gap-2 text-sm text-muted-foreground"
              animate={{
                x: isHovered ? 5 : 0,
                opacity: isHovered ? 0.8 : 1,
              }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const WhatYouGet = () => {
  const pillars = [
    {
      title: "Business Operating System",
      subtitle: "Integrated CRM & Marketing",
      icon: Layers3,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      points: [
        "All your tools in one place: Forms, funnels, email/SMS campaigns, pipelines, payments and scheduling",
        "Never miss a lead: every call, text, chat and form submission is captured and organised",
        "Automated follow-ups: workflows and nurturing sequences keep prospects warm",
        "Crystal-clear visibility: conversations, sales stages and revenue in real time",
      ],
    },
    {
      title: "AI Voice & Chat Employees",
      subtitle: "Human-like coverage, 24/7",
      icon: BrainCircuit,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      points: [
        "24/7 coverage: handle inbound calls, texts and chats around the clock",
        "Smart conversations: answer FAQs, qualify leads, book appointments and collect payments",
        "Free your team: remove repetitive work so humans focus on high-value tasks",
        "Always on brand: trained on your scripts and tone, with easy human takeover",
      ],
    },
    {
      title: "Done-For-You Setup & Management",
      subtitle: "White-glove onboarding + support",
      icon: Headphones,
      image:
        "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80",
      points: [
        "Launch in weeks, not months: go live in as little as four weeks",
        "Custom configuration: automations, pipelines and AI scripts tailored to your business",
        "Ongoing partnership: check-ins, AI re-training and real human support",
        "Built on trust: family-owned and U.S.-based with personalised service",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Animated gradient orbs */}
            <motion.div
              className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                scale: [1.1, 1, 1.1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Extra floating orb */}
            <motion.div
              className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 mb-6">
                <span className="text-xs font-medium">The Complete Create Assistants Solution</span>
              </div>

              <h1 className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">What You Get –</span>
                <span className="block text-gradient">A Turnkey Growth Engine</span>
              </h1>

              <p className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base">
                You don't need another app; you need a system that works. Create Assistants combines a powerful business
                operating system, human-like AI employees and hands-on support—so you capture leads, convert customers and
                scale with confidence.
              </p>

              <MagneticWrapper strength={0.25}>
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20">
                  Explore The 3 Pillars
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Button>
              </MagneticWrapper>
            </AnimatedSection>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left floating orb */}
            <motion.div
              className="absolute top-20 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
              animate={{
                y: [0, 40, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Right floating orb */}
            <motion.div
              className="absolute bottom-20 -right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
              animate={{
                y: [0, -40, 0],
                scale: [1.1, 1, 1.1],
              }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Center accent */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                The Complete <span className="text-gradient">Create Assistants</span> Solution
              </h2>
              <p className="body-large max-w-3xl mx-auto">
                Three pillars working together—unified software, AI employees and white-glove service.
              </p>
            </AnimatedSection>

            <StaggeredChildren className="grid lg:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <FloatingPillarCard key={pillar.title} pillar={pillar} index={index} />
              ))}
            </StaggeredChildren>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-16 relative bg-muted/20 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Central pulsing orb */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Top right orb */}
            <motion.div
              className="absolute -top-10 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, 20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Bottom left orb */}
            <motion.div
              className="absolute -bottom-10 left-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl"
              animate={{
                x: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center max-w-4xl mx-auto">
              <h2 className="section-headline mb-6">
                Why It <span className="text-gradient">Matters</span>
              </h2>
              <p className="body-large">
                By combining these three pillars—unified software, AI employees and white-glove service—you get more than a
                toolkit. You get a complete operating system designed to capture every opportunity and grow with you.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left glow */}
            <motion.div
              className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
              animate={{
                x: [0, 40, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Right glow */}
            <motion.div
              className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
              animate={{
                x: [0, -40, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Center subtle orb */}
            <motion.div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-headline mb-6">
                  Ready to see how these pieces <span className="text-gradient">fit together?</span>
                </h2>
                <p className="body-large mb-10">
                  Next up: a deeper look at our AI Employees.
                </p>

                <MagneticWrapper strength={0.25}>
                  <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
                    <a href="#">
                      Explore our AI Employees
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </a>
                  </Button>
                </MagneticWrapper>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatYouGet;
