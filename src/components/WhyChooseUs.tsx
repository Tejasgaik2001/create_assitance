import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiHeart, FiUsers, FiZap } from "react-icons/fi";
import crmDashboard from "@/assets/crm-dashboard.jpg";

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const floatCard1Y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const floatCard2Y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section ref={ref} id="solutions" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content with parallax */}
          <motion.div
            style={{ y: contentY }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Why Us
            </motion.span>

            <motion.h2 variants={itemVariants} className="section-headline mb-6">
              Why Choose
              <span className="text-primary block">Create Assistants</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="body-large mb-10">
              We're not just another software vendor. We're your dedicated growth partner,
              combining cutting-edge AI with genuine human expertise.
            </motion.p>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <Card
                title="Family-Owned"
                subtitle="Family-owned agency in Iowa, committed to integrity."
                href="#"
                Icon={FiHeart}
              />
              <Card
                title="Real Humans + AI"
                subtitle="AI employees work alongside human experts."
                href="#"
                Icon={FiUsers}
              />
              <Card
                title="Quick Launch"
                subtitle="Go live in four weeks or less."
                href="#"
                Icon={FiZap}
              />
              <Card
                title="Ongoing Partnership"
                subtitle="We become your systems department."
                href="#"
                Icon={FiBriefcase}
              />
            </div>
          </motion.div>

          {/* Right Column - Visual with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <motion.div
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
              style={{ y: imageY, rotate: imageRotate }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={crmDashboard}
                alt="AI-powered CRM visualization"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </motion.div>

            {/* Floating stat card with parallax */}
            <motion.div
              style={{ y: floatCard1Y }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-6 shadow-2xl"
            >
              <motion.p
                className="text-4xl font-bold text-primary mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 1 }}
              >
                4 weeks
              </motion.p>
              <p className="text-sm text-muted-foreground">Average launch time</p>
            </motion.div>

            {/* Additional floating element with parallax */}
            <motion.div
              style={{ y: floatCard2Y }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-4 -right-4 bg-foreground text-background rounded-2xl px-5 py-3 shadow-2xl"
            >
              <p className="text-2xl font-bold">50%</p>
              <p className="text-xs opacity-80">More appointments</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ title, subtitle, Icon, href }: { title: string; subtitle: string; Icon: any; href: string }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white dark:bg-slate-950 dark:border-slate-800"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300 dark:text-slate-900" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300 dark:text-slate-100">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300 text-sm">
        {subtitle}
      </p>
    </a>
  );
};

export default WhyChooseUs;
