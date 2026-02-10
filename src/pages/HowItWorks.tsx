import { m, AnimatePresence } from "framer-motion";
import { MotionText } from "@/components/ui/MotionText";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageSquare, Calendar, CreditCard, Heart } from "lucide-react";
import { FiZap, FiShield, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { RollingTextList } from "@/components/ui/RollingTextList";
import { VerticalTimeline } from "@/components/ui/VerticalTimeline";
import { handleBookingRedirect } from "@/utils/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";

const HowItWorks = () => {
  const isMobile = useIsMobile();

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
    { icon: FiZap, title: "Lightning Fast Responses", description: "AI responds instantly, 24/7" },
    { icon: FiShield, title: "Never Lose a Lead", description: "Automated follow-ups ensure no gaps" },
    { icon: FiTrendingUp, title: "Increase Conversion", description: "Streamlined process boosts sales" },
    { icon: FiCheckCircle, title: "Hands-Off Growth", description: "Fully automated system" }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16">
          {/* Background elements - desktop only, completely hidden on mobile */}
          {!isMobile && (
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
              <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20 mobile-hide-bg" />
            </div>
          )}

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 mb-6">
                <FiZap className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium">5-Step Growth Engine</span>
              </div>

              <h1 className="hero-headline mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
                <span className="block">How It Works –</span>
                <span className="block w-full text-gradient leading-[1.2]">
                  Your Automated Growth Engine
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium mb-8">
                Most small-business owners juggle too many tools and miss opportunities because they can't respond instantly.
                Create Assistants replaces that chaos with a single, automated system that takes strangers from first touch
                to loyal promoters while saving you time and increasing conversion.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Steps Timeline Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background effects - desktop only, completely hidden on mobile */}
          {!isMobile && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Left floating orb */}
              <m.div
                className="absolute top-20 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
                animate={{
                  y: [0, 40, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Right floating orb */}
              <m.div
                className="absolute bottom-40 -right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
                animate={{
                  y: [0, -40, 0],
                  scale: [1.1, 1, 1.1],
                }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Center accent */}
              <m.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] mobile-hide-bg" />
            </div>
          )}

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                <span className="text-gradient">Your 5-Step Process</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Each stage is fully managed and customised for your business, so you can go live in as little as four weeks.
              </p>
            </AnimatedSection>

            <VerticalTimeline steps={steps} />
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-16 relative bg-muted/20 overflow-hidden">
          {/* Background effects - desktop only, completely hidden on mobile */}
          {!isMobile && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Central pulsing orb */}
              <m.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Top left orb */}
              <m.div
                className="absolute -top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{
                  x: [0, 30, 0],
                  y: [0, 20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Bottom right orb */}
              <m.div
                className="absolute -bottom-10 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl"
                animate={{
                  x: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          )}

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                Why This Process <span className="text-gradient">Works</span>
              </h2>
              <p className="body-large max-w-3xl mx-auto">
                By capturing every lead and automating engagement, Create Assistants eliminates manual tasks,
                speeds up responses and keeps prospects moving forward.
              </p>
            </AnimatedSection>

            <RollingTextList items={benefits} className="w-full" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Animated orbs on desktop, static on mobile */}
            {!isMobile ? (
              <>
                {/* Left glow */}
                <m.div
                  className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
                  animate={{
                    x: [0, 40, 0],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Right glow */}
                <m.div
                  className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
                  animate={{
                    x: [0, -40, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Center subtle orb */}
                <m.div
                  className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </>
            ) : (
              <>
                <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-20" />
                <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-20" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-10" />
              </>
            )}
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] mobile-hide-bg" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-headline mb-6">
                  Ready to See This System <MotionText text="In Action?" className="sm:ml-2 block sm:inline-block text-gradient" />
                </h2>
                <p className="body-large mb-10">
                  Book a free consultation and we'll walk you through how Create Assistants can
                  capture more leads, close more sales and free up your time.
                </p>

                <MagneticWrapper strength={0.25}>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group shadow-xl shadow-primary/20"
                    onClick={handleBookingRedirect}
                  >
                    Book a Free Consultation
                    <m.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </m.span>
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

export default HowItWorks;
