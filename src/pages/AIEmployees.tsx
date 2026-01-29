import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, Users, Zap, Shield, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const AIEmployees = () => {
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
      description: "Seamless CRM integration for transactions",
      icon: Shield,
    },
  ];

  const benefits = [
    "Capture every lead and respond instantly",
    "Free your staff from repetitive calls and messages",
    "Improve conversion rates with consistent follow‑up",
    "Scale without headcount—handle unlimited conversations",
    "Deliver better service around the clock",
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
                <Bot className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium">AI Employees</span>
              </div>

              <h1 className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Meet Your Hardest‑Working</span>
                <span className="block text-gradient">Team Members</span>
              </h1>

              <p className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base">
                Businesses lose thousands in missed calls and slow follow‑ups. Create Assistants solves this with AI employees,
                fully trained voice and chat assistants that work around the clock. They capture every opportunity,
                handle repetitive tasks and let your people focus on high‑value work.
              </p>

              <MagneticWrapper strength={0.25}>
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20">
                  See AI in Action
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

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                What Are <span className="text-gradient">AI Employees?</span>
              </h2>
              <p className="body-large max-w-3xl mx-auto">
                Our AI voice and chat employees interact with prospects and customers via phone, text and website chat.
                Trained on your scripts, FAQs and brand guidelines, they can:
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                  alt="AI voice assistant"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>

              <StaggeredChildren className="grid grid-cols-2 gap-4">
                {capabilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="glass-card rounded-xl p-4 border border-border/40 shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  );
                })}
              </StaggeredChildren>
            </div>

            <AnimatedSection direction="up" className="text-center">
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Route complex queries to your human team whenever needed.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 relative bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left">
                <h2 className="section-headline mb-6">
                  Instant Responses, <span className="text-gradient">24/7</span>
                </h2>
                <p className="body-large mb-4">
                  Unlike traditional staff, AI employees never sleep. They answer calls, texts and chats within seconds,
                  even at 2 AM. This immediate engagement reduces lead drop‑off and increases conversion rates.
                </p>
                <p className="text-sm text-muted-foreground">
                  Every interaction is logged in your system so nothing falls through the cracks.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                    alt="24/7 AI support"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50/90 backdrop-blur-sm border border-gray-200/50">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium">Always Available</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="right" className="order-2 lg:order-1">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                    alt="Personalized AI service"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" className="order-1 lg:order-2">
                <h2 className="section-headline mb-6">
                  Personalised & <span className="text-gradient">Consistent</span>
                </h2>
                <p className="body-large mb-4">
                  AI employees learn your business rules and FAQs to deliver personalized service. Whether someone calls,
                  texts or chats on your website, they receive the same friendly tone and accurate information.
                </p>
                <p className="text-sm text-muted-foreground">
                  Your brand voice stays consistent across every customer touchpoint.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-16 relative bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                Benefits at a <span className="text-gradient">Glance</span>
              </h2>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass-card rounded-xl p-6 border border-border/40 shadow-lg"
                >
                  <CheckCircle className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground">{benefit}</p>
                </motion.div>
              ))}
            </StaggeredChildren>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-headline mb-6">
                  Want to see how AI employees can <span className="text-gradient">transform</span> your customer interactions?
                </h2>

                <MagneticWrapper strength={0.25}>
                  <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
                    <a href="#">
                      Explore the Command Center
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

export default AIEmployees;
