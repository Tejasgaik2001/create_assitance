import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Calendar, CreditCard, BarChart3, Users, Mail, Phone, MessageSquare, FileText, Settings, CheckCircle, TrendingUp, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const CommandCenter = () => {
  const features = [
    {
      title: "Capture & Manage Leads",
      description: "Forms, funnels, call tracking and chat widgets feed directly into your CRM. No more double entry or lost notes.",
      icon: Users,
    },
    {
      title: "All Conversations in One Dashboard",
      description: "View calls, texts, emails and chats alongside each contact. Track pipelines and reports from the same screen.",
      icon: MessageSquare,
    },
    {
      title: "Centralise Your Sales Process",
      description: "See where each prospect is in your pipeline; drag and drop deals between stages.",
      icon: TrendingUp,
    },
  ];

  const automations = [
    {
      title: "Automate Emails, Texts & Funnels",
      description: "Pre‑built workflows nurture prospects and customers, ensuring timely follow‑ups.",
      icon: Mail,
    },
    {
      title: "Set Triggers Once, Reap Results Forever",
      description: "Automations fire based on behaviour—such as form submissions, missed calls or invoice payments—so nothing falls through the cracks.",
      icon: Zap,
    },
    {
      title: "Convert More While You Sleep",
      description: "Automatic nurturing sequences warm up leads and schedule appointments without human effort.",
      icon: Settings,
    },
  ];

  const tools = [
    {
      title: "Easy Bookings",
      description: "Prospects can book appointments through integrated calendars; reminders reduce no‑shows.",
      icon: Calendar,
    },
    {
      title: "Integrated Payments",
      description: "Generate invoices, accept deposits and sell packages directly from the system. Transactions are logged against each contact for a complete history.",
      icon: CreditCard,
    },
    {
      title: "Contracts & Estimates",
      description: "Send proposals and contracts for digital signatures, speeding up the closing process.",
      icon: FileText,
    },
  ];

  const visibility = [
    {
      title: "At‑a‑Glance Reporting",
      description: "Monitor revenue, pipeline value and marketing performance in real time.",
      icon: BarChart3,
    },
    {
      title: "Custom Dashboards",
      description: "Create views for sales, marketing and operations teams so everyone sees the data that matters most.",
      icon: TrendingUp,
    },
    {
      title: "Stop Juggling Tools",
      description: "Replace multiple apps with one powerful platform.",
      icon: Shield,
    },
  ];

  const integrations = [
    "No duplication: When AI employees book appointments or capture leads, the data flows straight into your Command Center.",
    "Unified experience: Whether a customer calls, chats or fills out a form, everything is tracked in one record.",
    "Easier collaboration: Your human team can jump into any conversation thread or deal stage knowing the full context.",
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
                <BarChart3 className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium">Command Center</span>
              </div>

              <h1 className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">One Dashboard,</span>
                <span className="block text-gradient">Infinite Possibilities</span>
              </h1>

              <p className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base">
                Most small businesses juggle spreadsheets, disjointed apps and manual reminders. The result? Missed leads, inconsistent follow‑ups and zero visibility into sales. The Create Assistants Command Center replaces that chaos with a single, integrated system. Everything from lead capture to payment happens in one place.
              </p>

              <MagneticWrapper strength={0.25}>
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20">
                  Discover Why Create Assistants
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
                Unified <span className="text-gradient">CRM & Marketing Hub</span>
              </h2>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="glass-card rounded-xl p-6 border border-border/40 shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                  Automations That <span className="text-gradient">Work for You</span>
                </h2>
                <StaggeredChildren className="space-y-6">
                  {automations.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="flex gap-4"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </StaggeredChildren>
              </AnimatedSection>

              <AnimatedSection direction="right" className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Automation dashboard"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50/90 backdrop-blur-sm border border-gray-200/50">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium">Automated Workflows</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                Built‑In <span className="text-gradient">Scheduling & Payments</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.title}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="glass-card rounded-xl p-6 border border-border/40 shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <AnimatedSection direction="up" className="text-center">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                  alt="Scheduling and payments interface"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 relative bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                Real‑Time <span className="text-gradient">Visibility</span>
              </h2>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-3 gap-6">
              {visibility.map((item) => {
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

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="section-headline mb-6">
                Seamless Integration with <span className="text-gradient">AI Employees</span>
              </h2>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left" className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="AI integration dashboard"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <StaggeredChildren className="space-y-4">
                  {integrations.map((integration) => (
                    <motion.div
                      key={integration}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="flex gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{integration}</p>
                    </motion.div>
                  ))}
                </StaggeredChildren>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-16 relative bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
              <h2 className="section-headline mb-6">
                Why It <span className="text-gradient">Matters</span>
              </h2>
              <p className="body-large mb-8">
                The Command Center isn’t just a CRM. It’s your business’s heartbeat. Centralising tools saves time, reduces errors and gives you visibility into what’s working and what’s not. You can finally stop juggling platforms and focus on growing your business.
              </p>

              <MagneticWrapper strength={0.25}>
                <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20">
                  Discover Why Create Assistants
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
      </main>
      <Footer />
    </div>
  );
};

export default CommandCenter;
