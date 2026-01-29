import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Clock, Users, Shield, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredChildren from "@/components/StaggeredChildren";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSnapContainer } from "@/components/FullScreenSection";
import AuroraBackground from "@/components/AuroraBackground";

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
        <AuroraBackground key="hero">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-gray-200"
                    >
                        <Bot className="w-3 h-3 text-indigo-400" />
                        <span className="text-xs font-medium">AI Employees</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="hero-headline mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
                    >
                        <span className="block">Meet Your Hardest‑Working</span>
                        <span className="block text-gradient from-indigo-300 to-purple-400 bg-clip-text text-transparent bg-gradient-to-r">Team Members</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="body-large mb-10 max-w-2xl mx-auto text-sm md:text-base text-gray-300"
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
                        <Button variant="hero" size="lg" className="group shadow-xl shadow-indigo-500/20 bg-white text-indigo-950 hover:bg-gray-100">
                            See AI in Action
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </AuroraBackground>,

        // What Are AI Employees
        <AuroraBackground key="what">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-headline mb-6 text-center text-white"
                >
                    What Are <span className="text-indigo-400">AI Employees?</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="body-large max-w-3xl mx-auto text-center mb-12 text-gray-300"
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
                                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </AuroraBackground>,

        // 24/7 Responses (Light Section - KEPT AS IS)
        <div key="247" className="h-screen w-full flex items-center justify-center bg-slate-200 text-black relative overflow-hidden">
            {/* Background elements for light theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="section-headline mb-6 text-accent"
                        >
                            Instant Responses <span className="text-indigo-600">24/7</span>
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
                            className="text-sm text-slate-500"
                        >
                            Every interaction is logged in your system so nothing falls through the cracks.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-80 rounded-2xl overflow-hidden border border-slate-300 shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                            alt="24/7 AI support"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-200/20 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-sm">
                                <Clock className="w-4 h-4 text-indigo-600" />
                                <span className="text-xs font-medium text-slate-800">Always Available</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>,

        // Benefits
        <AuroraBackground key="benefits">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-headline mb-12 text-center text-white"
                >
                    Benefits at a <span className="text-indigo-400">Glance</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            whileHover={{ scale: 1.03, y: -4 }}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/10 transition-colors"
                        >
                            <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                            <p className="text-sm text-gray-300">{benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AuroraBackground>,

        // CTA
        <AuroraBackground key="cta">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-headline mb-6 max-w-3xl mx-auto text-white"
                >
                    Want to see how AI employees can <span className="text-indigo-400">transform</span> your customer interactions?
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block"
                >
                    <Button variant="hero" size="lg" className="group shadow-xl shadow-indigo-500/20 bg-white text-indigo-950 hover:bg-gray-100" asChild>
                        <a href="/command-center">
                            Explore the Command Center
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </AuroraBackground>,

        // Footer
        <div key="footer" className="h-screen w-full flex flex-col justify-end bg-black">
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
