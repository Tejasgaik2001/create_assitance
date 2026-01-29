import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Clock, Settings, Lightbulb, Target, Award, Heart, MapPin, MessageSquare, Shield, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSnapContainer } from "@/components/FullScreenSection";

const WhyCreateAssistants = () => {
  const reasons = [
    {
      title: "Software alone isn’t enough",
      description: "Cobbling together separate tools creates gaps. Our unified system handles everything in one place.",
      icon: Shield,
    },
    {
      title: "DIY setups drain your time",
      description: "Building automations is complex. We do it for you, from initial configuration to optimization.",
      icon: Clock,
    },
    {
      title: "AI without strategy fails",
      description: "Off‑the‑shelf chatbots can’t deliver. Our AI employees are trained on your specific tone and FAQs.",
      icon: Lightbulb,
    },
    {
      title: "True partnership",
      description: "We don’t just sell software; we become your systems department, refining your growth engine.",
      icon: Users,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We map your ideal customer journey and automation opportunities.",
      icon: Target,
    },
    {
      step: "02",
      title: "Build & Train",
      description: "We configure your CRM and train AI employees on your brand guidelines.",
      icon: Settings,
    },
    {
      step: "03",
      title: "Launch",
      description: "We migrate data, test workflows and launch your new system.",
      icon: Zap,
    },
    {
      step: "04",
      title: "Management",
      description: "Monthly check‑ins, retraining and new features as you grow.",
      icon: Award,
    },
  ];

  const values = [
    {
      title: "Integrity & Results",
      description: "Transparent values guide every system we build.",
      icon: Heart,
    },
    {
      title: "Local Roots",
      description: "Proud of our Urbandale heritage and U.S.-based support.",
      icon: MapPin,
    },
    {
      title: "Real Support",
      description: "Direct access to experts, no offshore call centres.",
      icon: MessageSquare,
    },
  ];

  const sections = [
    // Hero Section
    <div key="hero" className="h-screen w-full flex items-center justify-center relative bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200/60 mb-6"
          >
            <Users className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium">Why Create Assistants</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">More Than Software,</span>
            <span className="block text-gradient">A Partner for Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base"
          >
            Most software tools leave you to figure things out on your own. At Create Assistants, we combine a powerful CRM with AI employees and hands‑on service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
              <a href="/book-a-call">
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>,

    // Why Choose Section (Cards)
    <div key="why" className="h-screen w-full flex items-center justify-center bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-12 text-center"
        >
          Why Choose an <span className="text-gradient">AI Growth Agency?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
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
        </div>
      </div>
    </div>,

    // Process Section (Split layout for better fit)
    <div key="process" className="h-screen w-full flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="section-headline mb-6"
            >
              Our Proven <span className="text-gradient">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="body-large mb-8 text-sm md:text-base"
            >
              Getting started is simple. Our four‑step process gets you live in as little as four weeks.
            </motion.p>

            <div className="space-y-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 border border-transparent hover:border-primary/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative h-[50vh] rounded-2xl overflow-hidden hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Onboarding process"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>,

    // Values Section
    <div key="values" className="h-screen w-full flex items-center justify-center bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-6 text-center"
        >
          Our <span className="text-gradient">Mission & Values</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="body-large max-w-2xl mx-auto mb-12 text-center"
        >
          Create Assistants is a family‑owned agency based in Iowa. We believe small businesses deserve enterprise-grade automation.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
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
        </div>
      </div>
    </div>,

    // Team Section - Dark Theme
    <div key="team" className="h-screen w-full flex items-center justify-center bg-slate-950 text-white relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="section-headline mb-6 text-white"
            >
              Meet the <span className="text-indigo-400">Team</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="body-large mb-4 text-slate-200"
            >
              We're a small, close‑knit group of technologists, marketers and process nerds. Our diverse backgrounds allow us to craft systems that truly work.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Button variant="outline" size="lg" className="group border-slate-700 text-slate-900 bg-slate-100 hover:bg-white hover:text-slate-900">
                Meet Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700">
                <Users className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-medium text-slate-200">Close-Knit Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>,

    // Partnership/CTA
    <div key="partnership" className="h-screen w-full flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-headline mb-6 max-w-3xl mx-auto"
        >
          Partnership, <span className="text-gradient">Not a One‑Off</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="body-large mb-8 max-w-2xl mx-auto"
        >
          Your success is our success. We stay with you after launch, adjusting your automations and retaining AI employees without you hiring a systems team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Button variant="hero" size="lg" className="group shadow-xl shadow-primary/20" asChild>
            <a href="/book-a-call">
              Book a Free Consultation
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

export default WhyCreateAssistants;
