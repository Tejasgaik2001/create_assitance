import { m, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const faqs = [
  {
    question: "HOW QUICKLY CAN WE GET STARTED?",
    answer: "Most of our clients go live in four weeks or less. This includes CRM setup, AI assistant training, and full team onboarding. We handle the heavy lifting so you can focus on your business."
  },
  {
    question: "WHAT HAPPENS IF THE AI CAN'T ANSWER A QUESTION?",
    answer: "If the AI encounters a query it's not trained for, it can gracefully route the conversation to a human team member or collect details for a follow-up. Every interaction is logged for continuous improvement."
  },
  {
    question: "DO YOU INTEGRATE WITH OUR EXISTING TOOLS?",
    answer: "Yes. Our system act as your main CRM or integrates with many existing platforms like GHL, Salesforce, or custom internal tools. We'll audit your current stack and recommend the most efficient path forward."
  },
  {
    question: "WHAT KIND OF SUPPORT DO YOU PROVIDE AFTER LAUNCH?",
    answer: "We provide ongoing monthly support including performance audits, AI retraining to handle new scenarios, and dedicated account management. We aren't just a software provider; we're your internal systems team."
  },
  {
    question: "IS THIS SUITABLE FOR SMALL BUSINESSES?",
    answer: "Absolutely. We designed our systems specifically for small and medium businesses that need enterprise-grade automation to scale without increasing headcount. Our goal is to free you from manual tasks so you can focus on growth."
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
        className={cn(
          "w-full text-left p-6 rounded-xl transition-all duration-300 group shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-border/40 hover:border-accent/40",
          isOpen ? "bg-white dark:bg-neutral-900" : "bg-white dark:bg-black/40"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-base font-bold uppercase tracking-tight transition-colors group-hover:text-accent italic">
            {faq.question}
          </h3>
          <div className={`transition-all duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-neutral-400'}`}>
            <ChevronDown className="w-5 h-5 transition-transform duration-300" />
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
              <p className="pt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
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
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
          {/* Left Side: Header Content */}
          <div className="flex flex-col justify-center text-left">
            <m.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/20 text-xs font-bold uppercase tracking-widest mb-6 w-fit"
            >
              FAQ
            </m.span>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white leading-[1.05]"
            >
              Frequently Asked <br />
              <span className="text-accent">Questions</span>
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-600 dark:text-neutral-400 font-medium mb-10 max-w-sm"
            >
              Got questions? We've got answers. Find everything you need to know about our AI-powered growth platform.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => window.open('https://calendly.com/createassistants', '_blank')}
                className="px-6 py-3 rounded-xl bg-accent/5 border border-accent/20 text-accent font-bold hover:bg-accent/10 transition-all flex items-center gap-2 w-fit text-sm"
              >
                Still have questions? <ArrowRight size={16} />
              </button>
            </m.div>
          </div>

          {/* Right Side: FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} isSectionInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { cn } from "@/lib/utils";

export default FAQSection;
