import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import aiHero from "@/assets/ai-hero.webp";
import aiVoice from "@/assets/ai-voice.jpg";
import crmDashboard from "@/assets/crm-dashboard.jpg";
import automation from "@/assets/automation.jpg";
import { Sparkles, Zap, TrendingUp } from "lucide-react";
import { handleBookingRedirect } from "@/utils/navigation";
import { MagneticWrapper } from "@/components/MagneticWrapper";
import { useIsMobile } from "@/hooks/useIsMobile";

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: isMobile, margin: "-10%" });
  const navigate = useNavigate();

  const stats = [
    {
      icon: TrendingUp,
      value: "4 weeks",
      label: "Typical launch time",
      color: "primary"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "AI coverage",
      color: "accent"
    },
    {
      icon: Sparkles,
      value: "500+",
      label: "Businesses served",
      color: "primary"
    },
  ];

  return (
    <section id="intro" ref={ref} className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      {/* Premium Background Grid - Desktop Only (mask-image) */}
      {!isMobile && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      )}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Enhanced Professional Layout */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                <div className={isMobile
                  ? "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-accent/20"
                  : "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-accent/20 backdrop-blur-sm"
                }>
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">
                    Enterprise Growth Platform
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                >
                  <span className="text-foreground">Transform Your Business with </span>
                  <span className="text-gradient">
                    AI-Powered Growth
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium"
                >
                  An all-in-one CRM system combined with <span className="text-accent font-semibold">24/7 AI voice and chat employees</span>,
                  backed by hands-on human support. Launch in <span className="text-accent font-semibold">four weeks or less</span>.
                </motion.p>
              </div>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-2"
              >
                {["CRM System", "AI Agents", "Automation", "Analytics"].map((feature, i) => (
                  <div
                    key={feature}
                    className="px-4 py-2 rounded-lg bg-background/60 backdrop-blur-sm border border-border/60 text-sm font-medium text-foreground hover:border-accent/40 transition-colors"
                  >
                    {feature}
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticWrapper strength={0.25}>
                    <button
                      onClick={handleBookingRedirect}
                      className="group relative h-12 px-8 rounded-full bg-gradient-to-r from-accent via-primary to-accent text-white font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                      <span className="relative z-10">Book a Consultation</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </MagneticWrapper>
                  <MagneticWrapper strength={0.2}>
                    <button
                      onClick={() => navigate("/how-it-works")}
                      className={isMobile
                        ? "h-12 px-8 rounded-full border-2 border-border/60 bg-background/40 font-semibold hover:border-accent/50 hover:bg-background/60 transition-all font-bold"
                        : "h-12 px-8 rounded-full border-2 border-border/60 bg-background/40 backdrop-blur-sm font-semibold hover:border-accent/50 hover:bg-background/60 transition-all font-bold"
                      }
                    >
                      See How It Works
                    </button>
                  </MagneticWrapper>
                </div>
              </motion.div>

              {/* Stats Grid - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.6 + index * 0.1
                      }}
                      whileHover={{
                        y: -4,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      className="group relative rounded-2xl border border-accent/40 bg-gradient-to-br from-background/90 to-background/50 backdrop-blur-md p-5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative space-y-2.5">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Icon className={`w-6 h-6 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'} drop-shadow-lg`} />
                        </motion.div>
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground/90 font-semibold leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Content - Professional Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-2xl mx-auto">
                {/* Main Hero Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: 0.5
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="relative h-full rounded-3xl border border-border/40 bg-background/50 backdrop-blur-2xl shadow-2xl shadow-black/20 hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] hover:border-primary/30 overflow-hidden transition-all duration-500"
                >
                  <img
                    src={aiHero}
                    alt="AI Assistant Platform"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Overlay Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute inset-x-0 bottom-0 p-6 space-y-3"
                  >
                    <div className="flex flex-wrap gap-2">
                      <div className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-bold shadow-lg shadow-black/20 hover:bg-white/25 transition-all duration-300">
                        AI-Powered CRM
                      </div>
                      <div className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-bold shadow-lg shadow-black/20 hover:bg-white/25 transition-all duration-300">
                        Real-time Analytics
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Card - AI Voice */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -30, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.7
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                    y: -4,
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                  className="absolute -left-6 bottom-16 w-[45%] rounded-2xl border border-border/40 bg-background/90 backdrop-blur-2xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/40 overflow-hidden transition-all duration-300"
                >
                  <img
                    src={aiVoice}
                    alt="AI Voice Assistant"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg">
                    <span className="text-white text-xs font-bold drop-shadow-lg">AI Voice</span>
                  </div>
                </motion.div>

                {/* Floating Card - CRM Dashboard */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -20 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 30, y: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.8
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    y: -4,
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                  className="absolute -right-6 top-12 w-[50%] rounded-2xl border border-border/40 bg-background/90 backdrop-blur-2xl shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 overflow-hidden transition-all duration-300"
                >
                  <img
                    src={crmDashboard}
                    alt="CRM Dashboard"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-40 sm:h-52 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg">
                    <span className="text-white text-xs font-bold drop-shadow-lg">CRM Dashboard</span>
                  </div>
                </motion.div>



                {/* Animated Glow Effects - Desktop Only (infinite animations + heavy blur) */}
                {!isMobile && (
                  <>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-8 -right-8 w-32 h-32 bg-primary/40 rounded-full blur-3xl"
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-8 -left-8 w-28 h-28 bg-accent/40 rounded-full blur-3xl"
                    />
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default IntroSection;

