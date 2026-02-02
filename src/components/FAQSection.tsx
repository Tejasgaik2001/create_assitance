import { motion, useInView } from "framer-motion";
import { useRef, type FC } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "How quickly can we get started?",
    answer:
      "Our proven onboarding process gets you up and running in four weeks or less. We handle everything from initial setup to training your team, so you can start seeing results fast.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "Our AI assistants are trained on your specific business rules and FAQs. When they encounter something outside their knowledge base, they seamlessly hand off to your human team with full context of the conversation.",
  },
  {
    question: "Do you integrate with our existing tools?",
    answer:
      "Absolutely. We specialize in integrating with your existing tech stack—CRMs, email platforms, calendars, and more. Our goal is to eliminate silos, not create new ones.",
  },
  {
    question: "What kind of support do you provide after launch?",
    answer:
      "We become your ongoing systems team. This includes continuous optimization, regular strategy sessions, technical support, and updates to keep your growth engine running at peak performance.",
  },
  {
    question: "Is this suitable for small businesses?",
    answer:
      "Yes! Our solutions scale to fit businesses of all sizes. Whether you're a solo entrepreneur or a growing team, we'll customize the system to match your needs and budget.",
  },
];

type FAQSectionProps = {
  withFooter?: boolean;
};

const FAQSection: FC<FAQSectionProps> = ({ withFooter = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="resources"
      className={
        withFooter
          ? "min-h-screen w-full flex flex-col relative overflow-hidden bg-background pt-24 sm:pt-32"
          : "min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background pt-24 sm:pt-32"
      }
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-10" />

      <div className={withFooter ? "flex-1 w-full" : "w-full"}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left Column - Header (Sticky on desktop) */}
              <div className="lg:sticky lg:top-24 space-y-6">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-accent/60 backdrop-blur-sm"
                >
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    FAQ
                  </span>
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.1
                  }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
                >
                  <span className="text-foreground">Frequently Asked </span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Questions
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.2
                  }}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md"
                >
                  Got questions? We've got answers. Find everything you need to know about our AI-powered growth platform.
                </motion.p>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.3
                  }}
                  className="pt-6"
                >
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-accent/50 hover:border-accent/80 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span className="font-bold text-sm bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Still have questions?
                    </span>
                    <ChevronDown className="w-4 h-4 rotate-[-90deg] text-primary group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Column - FAQ Accordion */}
              <motion.div
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: 50, filter: "blur(10px)" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: 0.2
                }}
                className="w-full"
              >
                <Accordion
                  type="single"
                  collapsible
                  className="space-y-3"
                >
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.3 + index * 0.05
                      }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="group border border-border/40 rounded-xl px-4 sm:px-6 bg-gradient-to-br from-background via-background/95 to-background/80 backdrop-blur-sm shadow-lg shadow-black/5 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/20 data-[state=open]:border-accent/50 hover:border-accent/30 transition-all duration-500 overflow-hidden"
                      >
                        {/* Gradient overlay on open */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/10 opacity-0 data-[state=open]:opacity-100 transition-opacity duration-500" />

                        <AccordionTrigger className="relative text-left py-4 hover:no-underline">
                          <span className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-tight italic group-hover:text-primary transition-colors flex-1 pr-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-data-[state=open]:from-primary group-data-[state=open]:to-accent">
                            {faq.question}
                          </span>
                        </AccordionTrigger>

                        <AccordionContent className="relative text-muted-foreground/90 pb-4 text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {withFooter ? (
        <div className="relative z-10 w-full mt-20">
          <Footer />
        </div>
      ) : null}

      {/* Additional CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
