import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageSquare, Calendar, CreditCard, Heart, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Timeline } from "@/components/ui/timeline";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Capture Every Lead",
      subtitle: "Never Miss an Opportunity",
      icon: Users,
      description: "24/7 lead capture through QR codes, pop-up forms, chat widgets, call-in numbers, and automated social media DMs.",
      features: [
        "24/7 lead capture across all channels",
        "Centralised intake dashboard",
        "No more gaps in lead tracking"
      ]
    },
    {
      number: 2,
      title: "Engage & Qualify Instantly",
      subtitle: "AI-Powered Customer Service",
      icon: MessageSquare,
      description: "AI employees respond immediately using your brand's tone, collecting details and scheduling calls without human effort.",
      features: [
        "Instant AI responses 24/7",
        "Smart CRM with interaction logging",
        "Focus on high-value tasks"
      ]
    },
    {
      number: 3,
      title: "Book & Nurture",
      subtitle: "Automated Customer Journey",
      icon: Calendar,
      description: "Personalized nurture campaigns guide prospects toward scheduling with conversational AI overcoming objections in real-time.",
      features: [
        "Automated nurture campaigns",
        "Conversational AI for objections",
        "One-click booking with reminders"
      ]
    },
    {
      number: 4,
      title: "Close & Collect Payment",
      subtitle: "Seamless Sales Process",
      icon: CreditCard,
      description: "Send estimates, contracts and invoices directly. Prospects sign and pay with clicks, no external tools needed.",
      features: [
        "Seamless checkout process",
        "Deal pipeline management",
        "Upsells & add-ons at checkout"
      ]
    },
    {
      number: 5,
      title: "Delight, Retain & Refer",
      subtitle: "Long-Term Growth Engine",
      icon: Heart,
      description: "Automated review requests, referral tracking, and long-term nurture keep customers engaged and drive repeat business.",
      features: [
        "Automated review requests",
        "Referral engine with rewards",
        "Long-term nurture campaigns"
      ]
    }
  ];

  const benefits = [
    { icon: Zap, title: "Lightning Fast Responses", description: "AI responds instantly, 24/7" },
    { icon: Shield, title: "Never Lose a Lead", description: "Automated follow-ups ensure no gaps" },
    { icon: TrendingUp, title: "Increase Conversion", description: "Streamlined process boosts sales" },
    { icon: CheckCircle, title: "Hands-Off Growth", description: "Fully automated system" }
  ];

  const timelineData = steps.map((step) => {
    const Icon = step.icon;
    return {
      title: `Step ${step.number}`,
      content: (
        <div className="glass-card rounded-2xl p-6 md:p-8 shadow-xl border border-border/40">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center shadow-md">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{step.subtitle}</p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
                {step.description}
              </p>
              <ul className="mt-5 space-y-2">
                {step.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16">
          {/* Background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/60 backdrop-blur-sm border border-border/30 mb-6">
                <Zap className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium">5-Step Growth Engine</span>
              </div>

              <h1 className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">How It Works –</span>
                <span className="block text-gradient">Your Automated Growth Engine</span>
              </h1>

              <p className="body-large mb-8 max-w-2xl mx-auto text-sm md:text-base">
                Most small-business owners juggle too many tools and miss opportunities because they can't respond instantly.
                Create Assistants replaces that chaos with a single, automated system that takes strangers from first touch
                to loyal promoters while saving you time and increasing conversion.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Steps Timeline Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                <span className="text-gradient">Your 5-Step Process</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Each stage is fully managed and customised for your business, so you can go live in as little as four weeks.
              </p>
            </AnimatedSection>

            <div className="relative w-full overflow-clip">
              <Timeline data={timelineData} />
            </div>
          </div>
        </section>

      {/* Why It Works Section */}
      <section className="py-16 relative bg-muted/20">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-12">
            <h2 className="section-headline mb-6">
              Why This Process <span className="text-gradient">Works</span>
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              By capturing every lead and automating engagement, Create Assistants eliminates manual tasks, 
              speeds up responses and keeps prospects moving forward.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="glass-card rounded-xl p-4 text-center group cursor-pointer border border-border/30"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 mb-3"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-base font-bold mb-2">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </StaggeredChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-headline mb-6">
                Ready to See This System <span className="text-gradient">In Action?</span>
              </h2>
              <p className="body-large mb-10">
                Book a free consultation and we'll walk you through how Create Assistants can 
                capture more leads, close more sales and free up your time.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20">
                  Book a Free Consultation
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
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

export default HowItWorks;
