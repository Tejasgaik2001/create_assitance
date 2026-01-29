import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users, CheckCircle, MessageSquare, Target, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookACall = () => {
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
                <Calendar className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium">Book a Call</span>
              </div>

              <h1 className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Schedule Your</span>
                <span className="block text-gradient">Free Consultation</span>
              </h1>

              <p className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base">
                Let's talk about your business goals and see how Create Assistants can help you capture every lead, convert more customers and simplify your operations.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                What to Expect <span className="text-gradient">on the Call</span>
              </h2>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-2 gap-6 mb-12">
              {expectations.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="glass-card rounded-xl p-6 border border-border/40 shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
                <span className="text-gradient">Schedule Now</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto mb-8">
                Use the calendar below to choose a date and time that works for you. Our scheduling tool syncs with our team's availability, so you can book instantly. Once scheduled, you'll receive a confirmation email with the meeting details.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" className="max-w-4xl mx-auto">
              <div className="glass-card rounded-2xl p-8 border border-border/40 shadow-xl">
                {/* Scheduling Widget Placeholder */}
                <div className="min-h-[600px] bg-muted/30 rounded-xl border-2 border-dashed border-border/40 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Calendar className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Scheduling Widget</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Insert your preferred scheduling tool here (e.g., Calendly, HubSpot Meetings, etc.)
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium">30-minute consultation</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50/90 backdrop-blur-sm border border-gray-200/50">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">Free • No obligation • Instant confirmation</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
              <h2 className="section-headline mb-6">
                Ready to <span className="text-gradient">Transform</span> Your Business?
              </h2>
              <p className="body-large mb-8">
                Join hundreds of businesses that have already streamlined their operations with Create Assistants. Your growth journey starts with a simple conversation.
              </p>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20">
                  Schedule Your Call Now
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
      </main>
      <Footer />
    </div>
  );
};

export default BookACall;
