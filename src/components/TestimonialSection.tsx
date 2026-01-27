import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote Icon */}
          <div className="w-16 h-16 bg-background/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Quote className="w-8 h-8" />
          </div>

          {/* Testimonial */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            "After implementing the Create Assistants' system, we cut our response time from 
            hours to seconds and booked <span className="text-primary">50% more appointments</span> within 
            the first month."
          </blockquote>

          {/* Attribution */}
          <div className="mb-12">
            <p className="font-semibold text-lg">Sarah Mitchell</p>
            <p className="text-background/60">CEO, Midwest Realty Group</p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              variant="default" 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90 group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
