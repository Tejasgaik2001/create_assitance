import { m, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const faqs = [
  {
    question: "How long does it really take to launch?",
    answer: "Most of our clients go live in four weeks or less. This includes CRM setup, AI assistant training, and full team onboarding. We handle the heavy lifting so you can focus on your business."
  },
  {
    question: "Is the AI assistant hard to manage?",
    answer: "Not at all. We provide a fully managed service. If you need to change your business rules or FAQs, just let us know and we handle the updates. You'll also have a simple dashboard to see all AI interactions."
  },
  {
    question: "Do I need to replace my existing tools?",
    answer: "You can, but you don't have to. Our system can act as your main CRM or integrate with many existing platforms. We'll audit your current stack and recommend the most efficient path forward."
  },
  {
    question: "What makes you different from other AI agencies?",
    answer: "We're a family-owned business with a background in real-world operations. We combine cutting-edge AI with genuine human support. We don't just give you tools; we become your internal systems team."
  },
  {
    question: "Can the AI handle phone calls and text messages?",
    answer: "Yes. Our AI voice assistants answer calls, qualify leads, and book appointments. Our chat assistants handle website visitors, and our SMS automation ensures every inquiry gets a response within seconds."
  }
];

const FAQItem = ({ faq, index, isSectionInView }: { faq: typeof faqs[0]; index: number; isSectionInView: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={isMobile
          ? "w-full text-left p-6 rounded-2xl bg-background border border-border/40 hover:border-accent/40 transition-all duration-300 group shadow-lg shadow-black/5"
          : "w-full text-left p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/40 hover:border-accent/40 transition-all duration-300 group shadow-lg shadow-black/5"
        }
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-bold uppercase tracking-tight italic transition-colors group-hover:text-accent">
            {faq.question}
          </h3>
          <div className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-primary/10 text-primary'}`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pt-6 text-muted-foreground leading-relaxed font-medium">
                {faq.answer}
              </p>
            </m.div>
          )}
        </AnimatePresence>
      </button>
    </m.div>
  );
};

const FAQSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: isMobile, margin: "-10%" });

  return (
    <section ref={ref} id="faq" className="w-full flex items-center justify-center relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 px-4">
            <m.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-accent/80 border border-primary text-sm font-bold uppercase tracking-widest mb-6"
            >
              FAQ
            </m.span>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 uppercase text-gradient leading-[0.9]"
            >
              Common Questions
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-muted-foreground font-medium"
            >
              Everything you need to know about transforming your business.
            </m.p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} isSectionInView={isInView} />
            ))}
          </div>

          {/* Bottom CTA */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={isMobile
              ? "mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary shadow-2xl shadow-primary/20 text-center"
              : "mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary shadow-2xl shadow-primary/20 text-center relative overflow-hidden"
            }
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight italic">Still Have Questions?</h3>
              <p className="text-white/80 mb-8 max-w-lg mx-auto font-medium">
                We're here to help. Reach out to our team for a personalized walkthrough of how we can grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://calendly.com/createassistants', '_blank')}
                  className="px-8 py-3 rounded-full bg-white text-primary font-bold hover:scale-105 transition-transform"
                >
                  Book a Consultation
                </button>
                <button
                  className="px-8 py-3 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-primary/30 transition-all"
                >
                  Message Support
                </button>
              </div>
            </div>
            {/* Shimmer effect for desktop */}
            {!isMobile && (
              <m.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            )}
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
