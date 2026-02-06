import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiHeart, FiUsers, FiZap } from "react-icons/fi";
import crmDashboard from "@/assets/crm-dashboard.jpg";

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section ref={ref} id="solutions" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-accent border border-accent text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6"
            >
              Why Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 uppercase"
            >
              Why Choose
              <span className="text-gradient block drop-shadow-sm">Create Assistants</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-xl font-medium"
            >
              We're not just another software vendor. We're your dedicated growth partner,
              combining cutting-edge AI with genuine human expertise.
            </motion.p>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              {[
                { title: "Family-Owned", subtitle: "Iowa born & raised, committed to integrity.", icon: FiHeart, color: "primary" },
                { title: "Real Humans + AI", subtitle: "AI efficiency backed by expert humans.", icon: FiUsers, color: "accent" },
                { title: "Quick Launch", subtitle: "Go live in four weeks or less.", icon: FiZap, color: "primary" },
                { title: "Managed Service", subtitle: "We are your internal systems team.", icon: FiBriefcase, color: "accent" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.3 + i * 0.1
                  }}
                  whileHover={{
                    y: -6,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                  }}
                  className="group relative p-5 sm:p-6 rounded-2xl border border-border/40 bg-gradient-to-br from-background via-background/95 to-background/80 backdrop-blur-sm shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-accent/20 hover:border-accent/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Icon with animation */}
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -10, 10, -10, 0],
                        transition: {
                          rotate: { duration: 0.5, ease: "easeInOut" },
                          scale: { type: "spring", stiffness: 400, damping: 10 }
                        }
                      }}
                      className="inline-block p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/50 shadow-md shadow-primary/10 mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
                    >
                      <item.icon className={`text-xl sm:text-2xl ${item.color === 'primary' ? 'text-accent' : 'text-accent'} drop-shadow-lg`} />
                    </motion.div>

                    <h3 className="font-bold text-lg sm:text-xl bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent uppercase tracking-tight italic mb-1.5 sm:mb-2 transition-all duration-500">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground/90 group-hover:text-muted-foreground text-xs sm:text-sm font-medium leading-relaxed transition-colors duration-500">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:pl-8 lg:block hidden">
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8, rotate: 5 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1, rotate: 0 } : { opacity: 0, x: 100, scale: 0.8, rotate: 5 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: 0.2
              }}
              whileHover={{
                scale: 1.02,
                rotate: -1,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="aspect-square rounded-[3rem] overflow-visible shadow-2xl shadow-black/20 hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.3)] hover:shadow-primary/30 relative transition-all duration-500"
            >
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-border/40 backdrop-blur-sm">
                <img
                  src={crmDashboard}
                  alt="AI-powered CRM visualization"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
              </div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.8
                }}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-xl border border-border/40 rounded-[2rem] p-6 lg:p-8 shadow-2xl shadow-black/20 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] hover:border-primary/50 transition-all duration-300 max-w-[180px] lg:max-w-none"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
                <div className="relative">
                  <p className="text-4xl lg:text-6xl font-bold bg-gradient-to-br from-primary via-accent to-accent bg-clip-text text-transparent tracking-tighter mb-1 lg:mb-2 drop-shadow-lg whitespace-nowrap">4 WEEKS</p>
                  <p className="text-[10px] lg:text-xs font-bold text-muted-foreground/80 uppercase tracking-widest leading-tight">Average Launch Time</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Atmospheric Glow */}
            <div className="absolute -inset-20 bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
