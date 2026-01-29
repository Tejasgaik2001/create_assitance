import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Headphones, Layers3, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50/90 backdrop-blur-sm border border-gray-200/50 mb-6">
                <span className="text-xs font-medium">The Complete Create Assistants Solution</span>
              </div>

              <h1 className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">What You Get –</span>
                <span className="block text-gradient">A Turnkey Growth Engine</span>
              </h1>

              <p className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base">
                You don’t need another app; you need a system that works. Create Assistants combines a powerful business
                operating system, human-like AI employees and hands-on support—so you capture leads, convert customers and
                scale with confidence.
              </p>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
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
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                The Complete <span className="text-gradient">Create Assistants</span> Solution
              </h2>
              <p className="body-large max-w-3xl mx-auto">
                Three pillars working together—unified software, AI employees and white-glove service.
              </p>
            </AnimatedSection>

            <StaggeredChildren className="grid lg:grid-cols-3 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="glass-card rounded-2xl overflow-hidden border border-border/40 shadow-xl"
                  >
                    <div className="relative h-44">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-border/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold leading-tight">{pillar.title}</h3>
                          <p className="text-xs text-muted-foreground">{pillar.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <ul className="space-y-3">
                        {pillar.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </StaggeredChildren>
          </div>
        </section>

        <section className="py-16 relative bg-muted/20">
          <div className="container mx-auto px-4">
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

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-headline mb-6">
                  Ready to see how these pieces <span className="text-gradient">fit together?</span>
                </h2>
                <p className="body-large mb-10">
                  Next up: a deeper look at our AI Employees.
                </p>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
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
                </motion.div>
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
