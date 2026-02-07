import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, Clock, Lightbulb, Users, Target, Settings, Zap, Award, Heart, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';
import { MagneticWrapper } from '@/components/MagneticWrapper';
import { handleBookingRedirect } from '@/utils/navigation';
import discoveryImg from '@/assets/external/discovery.jpg';
import buildTrainImg from '@/assets/external/integration-dashboard.webp';
import launchImg from '@/assets/generated/launch-success.webp';
import managementImg from '@/assets/external/ai-strategy.jpg';
import tuckerBernImg from '@/assets/external/tucker-bern.webp';
import tylerVanarkelImg from '@/assets/external/tyler-vanarkel.webp';
import randyBernImg from '@/assets/external/randy-bern.webp';
import craigJackmanImg from '@/assets/external/craig-jackman.webp';
import ryanGoldImg from '@/assets/external/ryan-gold.webp';

const MobileTeamMember = ({ member }: { member: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="flex flex-col items-center text-center p-8 rounded-[3rem] bg-white/5 border border-white/10 transition-all duration-300 w-full mb-6 cursor-pointer"
    >
      <div className="relative mb-6">
        <img src={member.image} alt={member.name} loading="lazy" className="w-32 h-32 rounded-full object-cover border-4 border-accent/30" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent pointer-events-none" />
      </div>

      <span className="text-[10px] text-accent/90 uppercase font-black mb-1 tracking-[0.2em]">{member.category}</span>
      <h4 className="text-2xl font-black text-white tracking-tight leading-tight">{member.name}</h4>
      <p className="text-xs text-accent uppercase font-black mb-2 tracking-widest">{member.role}</p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-6"
          >
            <div className="h-px w-16 bg-accent/30 mx-auto mb-6" />
            <p className="text-sm text-slate-300 italic leading-relaxed text-left">"{member.bio}"</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="text-[10px] text-accent mt-6 uppercase font-bold tracking-widest inline-flex items-center gap-2"
        >
          Tap to read full bio
          <ArrowRight className="w-3 h-3 rotate-90" />
        </motion.span>
      )}
    </motion.div>
  );
};

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

  const processData = [
    {
      step: "01",
      title: "Discovery",
      description: "We map your ideal customer journey and automation opportunities.",
      icon: Target,
      image: discoveryImg,
    },
    {
      step: "02",
      title: "Build & Train",
      description: "We configure your CRM and train AI employees on your brand guidelines.",
      icon: Settings,
      image: buildTrainImg,
    },
    {
      step: "03",
      title: "Launch",
      description: "We migrate data, test workflows and launch your new system.",
      icon: Zap,
      image: launchImg,
    },
    {
      step: "04",
      title: "Management",
      description: "Monthly check‑ins, retraining and new features as you grow.",
      icon: Award,
      image: managementImg,
    },
  ];

  const valuesData = [
    {
      title: "Integrity & Results",
      description: "Transparent values guide every system we build.",
      icon: Heart,
    },
    {
      title: "Local Roots",
      description: "Proud of our Iowa roots and U.S based support.",
      icon: MapPin,
    },
    {
      title: "Real Support",
      description: "Direct access to experts, no offshore call centres.",
      icon: MessageSquare,
    },
  ];

  const teamMembers = [
    {
      name: "Tucker Bern",
      role: "Chief Executive Officer (CEO)",
      category: "Leadership Team",
      bio: "Tucker leads Create Assistants' strategic vision, partnerships, and corporate growth to deliver measurable client impact. As CEO, Tucker defines the strategic and financial direction of Create Assistants. He brings experience across private capital, M&A, and automation technology to guide long-term company growth. Tucker also serves as President of his family office, overseeing diversified investments across media, wellness, alcohol, and artificial intelligence. His leadership ensures each system built aligns with business outcomes, driving higher efficiency, profitability, and operational clarity for every client.",
      image: tuckerBernImg,
    },
    {
      name: "Tyler VanArkel",
      role: "Founder & Chief Systems Officer (CSO)",
      category: "Leadership Team",
      bio: "Tyler leads the design and automation backbone of Create Assistants, transforming business operations through precision-built systems. For nearly a decade, Tyler has engineered systems and automations that have streamlined workflows for small and mid-sized businesses across the Midwest. His deep technical understanding and operational discipline make him the architect behind Create Assistants' core technology infrastructure. Tyler's approach blends practical problem-solving with scalable automation design, ensuring clients achieve measurable gains in efficiency, accuracy, and profitability.",
      image: tylerVanarkelImg,
    },
    {
      name: "Randy Bern",
      role: "Strategic Advisor",
      category: "Advisory Board",
      bio: "Randy provides strategic oversight and operational insight drawn from decades of executive leadership. Randy Bern has been a vanguard from the ground up, growing it over 20 years into a multi-state enterprise employing more than 1,200 people across 10 states. Under his leadership, Vanguard consistently earned the #1 national quality award in its industry for many consecutive years. His teams ranked among the highest-paid and most respected in the field, a testament to his focus on quality, integrity, and exceeding expectations. After the company's sale, Randy continues to serve as a minority shareholder and acting CEO. His operational insight and commitment to excellence provide Create Assistants with a standard of execution that drives lasting impact.",
      image: randyBernImg,
    },
    {
      name: "Craig Jackman",
      role: "Strategic Advisor",
      category: "Advisory Board",
      bio: "Craig Jackman is co-founder and president of Paragon IT Professionals, leading the organization for nearly 30 years. Craig is a graduate of the University of Iowa with a bachelor's degree in Economics. He is married with three grown sons, two living in Scottsdale and one in New York City. Craig's primary focus is leading Paragon's strategic growth and execution, leading community, and maintaining strategic relationships. Recently, Craig was honored to join the board of the Arizona Technology Council. Paragon's primary focus is IT contract services, project solutions, and leadership development through the IT Leadership Forum that helps develop leaders inside IT departments and organizations.",
      image: craigJackmanImg,
    },
    {
      name: "Ryan Gold",
      role: "Strategic Advisor",
      category: "Advisory Board",
      bio: "Ryan leads business development and distribution for the Maeson Group, leveraging his experience which ranges from capital raising and business development to accounting and operations. Prior to co-founding Maeson, Ryan helped build and consult for a number of successful firms and funds at various stages of development. He was previously a Vice President in the Capital Services Group at Credit Suisse Securities, where he worked with over one hundred hedge fund firms to advise and assist in their business development and capital raising efforts. Prior to Credit Suisse, Ryan was a Senior Analyst at Concord Management, a family office, where he sourced investment opportunities and performed investment research and due diligence on hedge funds, private equity funds, and other investment vehicles. Prior to his work at Concord, Ryan was the Controller for Forester Capital. Ryan is a CPA and began his career at PwC. He is a graduate of Franklin & Marshall College and is Series 7, 65, and 63 licensed.",
      image: ryanGoldImg,
    },
  ];

  const teamPairs = [];
  for (let i = 0; i < teamMembers.length; i += 2) {
    teamPairs.push(teamMembers.slice(i, i + 2));
  }

  const teamContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: teamScrollY } = useScroll({
    target: teamContainerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 text-foreground dark:text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="min-h-[90vh] w-full flex items-center justify-center relative bg-background overflow-hidden pt-20">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[140px]"
            />
            <motion.div
              animate={{
                x: [0, -40, 0],
                y: [0, -25, 0],
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-[120px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 mb-6"
              >
                <Users className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium">Why Create Assistants</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="hero-headline mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              >
                <span className="block">More Than Software,</span>
                <span className="block text-gradient">A Partner for Growth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium mb-10"
              >
                Most software tools leave you to figure things out on your own. At Create Assistants, we combine a powerful CRM with AI employees and hands‑on service.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block"
              >
                <MagneticWrapper strength={0.25}>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group shadow-xl shadow-primary/20"
                    onClick={handleBookingRedirect}
                  >
                    Book a Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </MagneticWrapper>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Why Choose Section (Orbital Satellite Grid) */}
        <div className="py-16 w-full bg-background relative overflow-hidden min-h-[700px] flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
            <div className="hidden md:grid grid-cols-12 grid-rows-3 gap-4 lg:gap-8 items-center">
              <div className="col-start-4 col-end-10 lg:col-start-5 lg:col-end-9 row-start-2 text-center z-20">
                <AnimatedSection direction="up">
                  <span className="text-primary font-semibold tracking-wider uppercase text-[10px] md:text-xs mb-3 block">
                    The AI Agency Advantage
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6">
                    Why Choose an <br />
                    <span className="text-gradient">AI Growth Agency?</span>
                  </h2>
                  <p className="text-muted-foreground text-sm lg:text-lg max-w-sm mx-auto leading-relaxed">
                    A comprehensive partnership built to out-perform DIY tools and generic software.
                  </p>
                </AnimatedSection>
              </div>

              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                const gridClasses = [
                  "col-start-1 col-end-5 lg:col-end-4 row-start-1 md:mt-[-40px] md:ml-[20px] lg:mt-[-30px] lg:ml-[40px]",
                  "col-start-9 lg:col-start-10 col-end-13 row-start-1 md:mt-[20px] md:mr-[0px] lg:mt-[40px] lg:mr-[20px]",
                  "col-start-1 col-end-5 lg:col-end-4 row-start-3 md:mb-[30px] md:ml-[20px] lg:mb-[50px] lg:ml-[-10px]",
                  "col-start-9 lg:col-start-10 col-end-13 row-start-3 md:mb-[-20px] md:mr-[0px] lg:mb-[-10px] lg:mr-[50px]",
                ];

                const spawnX = [150, -150, 150, -150];
                const spawnY = [100, 100, -100, -100];

                return (
                  <motion.div
                    key={reason.title}
                    className={cn("w-full max-w-[240px] lg:max-w-xs mx-auto", gridClasses[index])}
                    initial={{ opacity: 0, scale: 0.6, x: spawnX[index], y: spawnY[index] }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                    style={{ perspective: 1000 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -12, 0, 12, 0],
                        x: index % 2 === 0 ? [0, 8, 0, -8, 0] : [0, -8, 0, 8, 0],
                        rotate: index % 2 === 0 ? [0, 1, 0, -1, 0] : [0, -1, 0, 1, 0]
                      }}
                      transition={{
                        duration: [9, 11, 10, 12][index],
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.04,
                          rotateX: index < 2 ? 8 : -8,
                          rotateY: index % 2 === 0 ? 8 : -8,
                        }}
                        className="glass-card p-5 lg:p-7 rounded-[1.5rem] lg:rounded-[2rem] border border-accent/10 shadow-2xl backdrop-blur-xl group relative overflow-hidden transition-all duration-300 hover:border-accent/40"
                      >
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                        </div>

                        <div className="relative z-10">
                          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 lg:mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <Icon className="w-5 h-5 lg:w-7 lg:h-7" />
                          </div>
                          <h3 className="text-base lg:text-xl font-bold mb-2 lg:mb-3 tracking-tight group-hover:text-primary transition-colors">
                            {reason.title}
                          </h3>
                          <p className="text-[12px] lg:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed group-hover:text-foreground transition-colors line-clamp-3 lg:line-clamp-none">
                            {reason.description}
                          </p>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <div className="md:hidden w-full">
              <div className="text-center mb-12">
                <AnimatedSection direction="up">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4">
                    <Zap className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Limited Slots Available</span>
                  </div>
                  <h2 className="text-3xl font-black mb-4 leading-tight tracking-tighter">
                    Why Choose an <br />
                    <span className="text-gradient">AI Growth Agency?</span>
                  </h2>
                  <p className="text-muted-foreground text-sm max-w-[280px] mx-auto leading-relaxed">
                    A comprehensive partnership built to out-perform DIY tools and generic software.
                  </p>
                </AnimatedSection>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <motion.div
                      key={reason.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card p-5 rounded-3xl border border-white/10 flex flex-col items-center text-center relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-[13px] font-black mb-2 leading-tight uppercase tracking-wide relative z-10">{reason.title}</h3>
                      <p className="text-[11px] text-muted-foreground/80 leading-snug line-clamp-3 relative z-10">
                        {reason.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-24 w-full flex items-center justify-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="section-headline mb-4">
                Our Proven <span className="text-gradient">Process</span>
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                Getting started is simple. Our four‑step process gets you live in as little as four weeks.
              </p>
            </AnimatedSection>

            <div className="w-full max-w-5xl mx-auto relative">
              {processData.map((item, index) => (
                <ProcessItem key={item.step} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-32 w-full flex items-center justify-center bg-[#FDFCFB] dark:bg-[#030614] relative overflow-hidden transition-colors duration-500">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] dark:bg-accent/10" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection direction="up" className="text-center mb-20">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block opacity-80">OUR DNA</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
                Our <span className="text-gradient">Mission & Values</span>
              </h2>
              <div className="h-1 w-20 bg-accent/20 mx-auto mb-8 rounded-full" />
              <p className="body-large max-w-2xl mx-auto text-muted-foreground/80 font-medium leading-relaxed">
                Create Assistants is a family‑owned agency based in Iowa. We believe small businesses deserve enterprise-grade automation.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {valuesData.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -10 }}
                    className={cn(
                      "relative group h-full",
                      index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                    )}
                  >
                    <div className={cn(
                      "glass-card h-full rounded-[2.5rem] p-10 md:p-12 border border-white/40 dark:border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] hover:shadow-lg dark:hover:shadow-accent/10 backdrop-blur-3xl relative overflow-hidden flex flex-col items-center text-center transition-shadow duration-300",
                      index === 2 ? "md:max-w-md md:mx-auto lg:max-w-none" : ""
                    )}>
                      <div className="relative mb-8">
                        <div className="w-20 h-20 rounded-3xl bg-white dark:bg-white/5 shadow-inner border border-white/80 dark:border-white/10 flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110">
                          <Icon className="w-7 h-7 text-accent" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{value.title}</h3>
                      <p className="text-muted-foreground/90 font-medium text-sm lg:text-base">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section - Cinematic Layer Tunnel */}
        <div ref={teamContainerRef} className="relative h-auto lg:h-[600vh] bg-slate-950">
          {/* Desktop Parallax - Hidden on Mobile/Tablet */}
          <div className="hidden lg:block sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden" style={{ perspective: "1200px" }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] pointer-events-none" />

            <motion.div
              style={{
                opacity: useTransform(teamScrollY, [0, 0.1, 0.9, 1], [0, 0.3, 0.3, 0]),
                scale: useTransform(teamScrollY, [0, 1], [0.8, 1.2]),
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            >
              <h2 className="text-[15vw] font-black text-white/5 tracking-tighter uppercase select-none">
                THE COLLECTIVE
              </h2>
            </motion.div>

            <div className="relative w-full max-w-7xl h-[600px] z-20 mx-auto mt-32">
              {teamPairs.map((pair, index) => (
                <TeamPairLayer
                  key={index}
                  members={pair}
                  progress={teamScrollY}
                  index={index}
                  total={teamPairs.length}
                />
              ))}
            </div>

            <motion.div
              style={{
                opacity: useTransform(teamScrollY, [0.0, 0.08, 0.15], [0, 1, 0]),
                y: useTransform(teamScrollY, [0.0, 0.08], [40, 0]),
              }}
              className="absolute top-12 inset-x-0 z-50 flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-3 block">Infinite Evolution</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                THE <span className="text-gradient">TEAM</span>
              </h2>
            </motion.div>
          </div>

          {/* Mobile/Tablet Team List - Vertical Cards */}
          <div className="lg:hidden w-full px-6 py-24 z-10 bg-slate-950 relative">
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block opacity-60">The Collective</span>
              <h2 className="text-4xl font-black text-white italic mb-2">The <span className="text-gradient">Team</span></h2>
              <div className="h-px w-12 bg-accent/30 mx-auto" />
            </div>

            <div className="flex flex-col gap-6">
              {teamMembers.map((member) => (
                <MobileTeamMember key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>

        {/* Partnership/CTA */}
        <div className="py-24 w-full flex items-center justify-center bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimatedSection direction="up" className="max-w-3xl mx-auto">
              <h2 className="section-headline mb-6">Partnership, <span className="text-gradient">Not a One‑Off</span></h2>
              <p className="body-large mb-8">
                Your success is our success. We stay with you after launch, adjusting your automations and retaining AI employees without you hiring a systems team.
              </p>
            </AnimatedSection>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="inline-block">
              <MagneticWrapper strength={0.25}>
                <Button
                  variant="hero"
                  size="lg"
                  className="group shadow-xl shadow-primary/20"
                  onClick={handleBookingRedirect}
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </MagneticWrapper>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const ProcessItem = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const Icon = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full cursor-pointer border-b border-neutral-200 dark:border-neutral-800 py-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="relative overflow-hidden h-[48px] md:h-14 flex-1">
          <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
            <div className="h-[48px] md:h-14 flex items-center gap-4">
              <span className="text-sm font-bold text-primary/60">{item.step}</span>
              <h3 className="text-xl md:text-3xl font-bold text-neutral-900 dark:text-white uppercase tracking-tighter">
                {item.title}
              </h3>
            </div>
            <div className="h-[48px] md:h-14 flex items-center gap-4">
              <span className="text-sm font-bold text-accent">{item.step}</span>
              <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tighter italic text-accent">
                {item.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl overflow-hidden bg-muted/50 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/10">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {item.description}
      </p>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 group-hover:w-full" />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed pointer-events-none z-50 hidden md:block w-48 h-32 md:w-64 md:h-44 rounded-xl overflow-hidden shadow-2xl border border-border/50"
            style={{ left: mousePos.x + 20, top: mousePos.y - 80 }}
          >
            <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TeamPairLayer = ({ members, progress, index, total }: { members: any[]; progress: any; index: number; total: number }) => {
  const start = index / total;
  const end = (index + 1) / total;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {members.map((member, mIndex) => (
        <IndividualMemberCard
          key={member.name}
          member={member}
          progress={progress}
          rangeStart={start + (mIndex * 0.15 / total)}
          rangeEnd={end - ((1 - mIndex) * 0.05 / total)}
          mIndex={mIndex}
        />
      ))}
    </div>
  );
};

const IndividualMemberCard = ({ member, progress, rangeStart, rangeEnd, mIndex }: { member: any; progress: any; rangeStart: number; rangeEnd: number; mIndex: number }) => {
  const duration = rangeEnd - rangeStart;
  const focusStart = rangeStart + (duration * 0.25);
  const focusEnd = rangeEnd - (duration * 0.25);

  const [isHovered, setIsHovered] = useState(false);

  const zPos = useTransform(progress, [rangeStart, focusStart, focusEnd, rangeEnd], [-5000, 0, 0, 2000]);
  const opacity = useTransform(progress, [rangeStart, rangeStart + 0.05, focusStart, focusEnd, rangeEnd - 0.05, rangeEnd], [0, 1, 1, 1, 1, 0]);
  const scale = useTransform(progress, [rangeStart, focusStart, focusEnd, rangeEnd], [0.3, 1, 1, 2.5]);
  const blur = useTransform(progress, [rangeStart, focusStart, focusEnd, rangeEnd], ["blur(40px)", "blur(0px)", "blur(0px)", "blur(60px)"]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: mIndex === 0 ? "28%" : "72%",
        top: "50%",
        x: "-50%",
        y: "-50%",
        z: zPos,
        opacity: opacity,
        scale: scale,
        filter: blur,
      }}
      className="w-[420px] aspect-[4/5] z-10 origin-center pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="relative w-full h-full rounded-[4rem] bg-slate-900 border border-white/10 shadow-[0_100px_200px_rgba(0,0,0,0.8)] overflow-hidden group">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className={cn(
            "w-full h-full object-cover transition-all duration-1000",
            isHovered ? "scale-105" : ""
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-12 flex flex-col justify-end">
          <span className="text-xs text-accent/90 font-black uppercase tracking-[0.2em] mb-2">{member.category}</span>
          <h4 className="text-4xl font-black text-white tracking-tighter leading-tight mb-2">{member.name}</h4>
          <p className="text-xs text-accent font-bold uppercase tracking-[0.3em] mb-4">{member.role}</p>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="h-px w-16 bg-accent/50 mb-4" />
            <div className="max-h-48 overflow-y-auto custom-scrollbar pr-2">
              <p className="text-sm text-slate-200 italic leading-relaxed">"{member.bio}"</p>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default WhyCreateAssistants;
