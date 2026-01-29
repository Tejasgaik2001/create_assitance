import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield, CheckCircle, MapPin, Heart, MessageSquare, Clock, Settings, Lightbulb, Target, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhyCreateAssistants = () => {
  const reasons = [
    {
      title: "Software alone isn’t enough",
      description: "Cobbling together separate tools creates gaps and requires constant management. Our unified system handles marketing, sales and support in one place.",
      icon: Shield,
    },
    {
      title: "DIY setups drain your time",
      description: "Building and maintaining automations is complex. We do it for you, from initial configuration to ongoing optimization.",
      icon: Clock,
    },
    {
      title: "AI without strategy underperforms",
      description: "Off‑the‑shelf chatbots can’t deliver a personalised experience. Our AI employees are trained on your processes, tone and FAQs.",
      icon: Lightbulb,
    },
    {
      title: "True partnership",
      description: "We don’t just sell software; we become your systems department. You get a team of experts who proactively monitor, refine and evolve your growth engine.",
      icon: Users,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We meet to understand your business, goals and current tools. Together, we map the ideal customer journey and pinpoint automation opportunities.",
      icon: Target,
    },
    {
      step: "02",
      title: "System Build & AI Training",
      description: "Our team configures your CRM, automations, funnels and integrates with your website and calendar. At the same time, we train your AI employees using your scripts, FAQs and brand guidelines.",
      icon: Settings,
    },
    {
      step: "03",
      title: "Launch & Integration",
      description: "We migrate your data, test every workflow and launch your new system. Your AI employees start capturing and converting leads while your team gains access to the dashboard.",
      icon: Zap,
    },
    {
      step: "04",
      title: "Ongoing Management",
      description: "After launch, we monitor performance, refine workflows, retrain the AI and add new automations as your business grows. Monthly check‑ins, new funnels and tech support keep your system ahead of the curve.",
      icon: Award,
    },
  ];

  const values = [
    {
      title: "Integrity, transparency and results",
      description: "These values guide every system we build.",
      icon: Heart,
    },
    {
      title: "Local roots, national reach",
      description: "We're proud of our Urbandale heritage and our U.S.-based support team.",
      icon: MapPin,
    },
    {
      title: "Real humans, real support",
      description: "You'll always have direct access to our experts, no offshore call centres or chatbots when you need help.",
      icon: MessageSquare,
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200/60 mb-6">
                <Users className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium">Why Create Assistants</span>
              </div>

              <h1 className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">More Than Software,</span>
                <span className="block text-gradient">A Partner for Growth</span>
              </h1>

              <p className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base">
                Most software tools leave you to figure things out on your own. At Create Assistants, we take a different approach: we combine a powerful CRM with AI employees and hands‑on service. You get a complete growth system and a team dedicated to your success.
              </p>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
                  <a href="/book-a-call">
                    Book a Free Consultation
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
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                Why Choose an <span className="text-gradient">AI Growth Agency?</span>
              </h2>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="glass-card rounded-xl p-6 border border-border/40 shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </motion.div>
                );
              })}
            </StaggeredChildren>
          </div>
        </section>

        <section className="py-16 relative bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                Our Proven <span className="text-gradient">Onboarding & Support Process</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Getting started is simple and time‑bound. Our four‑step process typically gets clients live in as little as four weeks:
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="relative"
                  >
                    <div className="glass-card rounded-xl p-6 border border-border/40 shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                          <span className="text-lg font-bold text-primary">{item.step}</span>
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-accent/50" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <AnimatedSection direction="up" className="text-center">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Onboarding process"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                Our <span className="text-gradient">Mission & Values</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto mb-8">
                Create Assistants is a family‑owned agency based in Iowa. We believe small and mid‑sized businesses deserve the same automation and AI capabilities as large enterprises.
              </p>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-3 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="glass-card rounded-xl p-6 border border-border/40 shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                );
              })}
            </StaggeredChildren>
          </div>
        </section>

        <section className="py-16 relative bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <h2 className="section-headline mb-6">
                  Meet the <span className="text-gradient">Team</span>
                </h2>
                <p className="body-large mb-4">
                  We're a small, close‑knit group of technologists, marketers and process nerds. Our diverse backgrounds across technology, finance and marketing allow us to craft systems that truly work.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  We encourage you to put faces to names—visit our About page for photos and bios.
                </p>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button variant="outline" size="lg" className="group">
                    Meet Our Team
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

              <AnimatedSection direction="right" className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50/90 backdrop-blur-sm border border-gray-200/50">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium">Close-Knit Team</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
              <h2 className="section-headline mb-6">
                Partnership, <span className="text-gradient">Not a One‑Off</span>
              </h2>
              <p className="body-large mb-8">
                With Create Assistants, your success is our success. We stay with you after launch, adjusting your automations, retraining AI employees and introducing new features as your business evolves. You get continuous improvements without having to hire a systems team.
              </p>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
                  <a href="/book-a-call">
                    Book a Free Consultation
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
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyCreateAssistants;
