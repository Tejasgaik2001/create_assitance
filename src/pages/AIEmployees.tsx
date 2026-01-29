import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, Users, Shield, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSnapContainer } from "@/components/FullScreenSection";

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

  const sections = [
    // Hero Section
    <div key="hero" className="h-screen w-full flex items-center justify-center relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200/60 mb-6"
          >
            <Bot className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium">AI Employees</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">Meet Your Hardest‑Working</span>
            <span className="block text-gradient">Team Members</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base"
          >
            Businesses lose thousands in missed calls and slow follow‑ups. Create Assistants solves this with AI employees.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20">
              See AI in Action
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>,

    // What Are AI Employees
    <div key="what" className="h-screen w-full flex items-center justify-center bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-6 text-center"
        >
          What Are <span className="text-gradient">AI Employees?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="body-large max-w-3xl mx-auto text-center mb-12"
        >
          Our AI voice and chat employees interact with prospects and customers via phone, text and website chat.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card rounded-xl p-6 border border-border/40 shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>,

    // 24/7 Responses
    <div key="247" className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-black relative overflow-hidden">
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
              className="section-headline mb-6 text-accent"
            >
              Instant Responses <span className="text-indigo-400">24/7</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="body-large mb-4 text-slate-600"
            >
              Unlike traditional staff, AI employees never sleep. They answer calls, texts and chats within seconds,
              even at 2 AM.
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
            className="relative h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="24/7 AI support"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-medium text-slate-200">Always Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>,

    // Benefits
    <div key="benefits" className="h-screen w-full flex items-center justify-center bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-12 text-center"
        >
          Benefits at a <span className="text-gradient">Glance</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card rounded-xl p-6 border border-border/40 shadow-lg"
            >
              <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
              <p className="text-sm text-muted-foreground">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>,

    // CTA
    <div key="cta" className="h-screen w-full flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-6 max-w-3xl mx-auto"
        >
          Want to see how AI employees can <span className="text-gradient">transform</span> your customer interactions?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
            <a href="/command-center">
              Explore the Command Center
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>,

    // Footer
    <div key="footer" className="h-screen w-full flex flex-col justify-end bg-background">
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
