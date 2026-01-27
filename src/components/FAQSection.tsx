import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="resources" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              FAQ
            </motion.span>
            <h2 className="section-headline mb-6">
              Frequently Asked
              <span className="block">Questions</span>
            </h2>
            <p className="body-large">
              Everything you need to know about our services.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border rounded-2xl px-6 data-[state=open]:bg-muted/50 data-[state=open]:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline group">
                      <span className="flex-1">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              whileHover={{ x: 5 }}
            >
              Contact our team
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
