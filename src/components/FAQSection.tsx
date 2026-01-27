import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
    <section ref={ref} id="resources" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-headline mb-6">
              Frequently Asked<br />Questions
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
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
