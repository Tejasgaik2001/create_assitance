import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import PillarsSection from "@/components/PillarsSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import { CursorSpotlight } from "@/components/CursorSpotlight";

const Index = () => {
  const sections = [
    <HeroSection key="hero" />,
    <IntroSection key="intro" />,
    <PillarsSection key="pillars" />,
    <WhyChooseUs key="why" />,

    <TestimonialSection key="testimonials" />,
    <FAQSection key="faq-footer" withFooter />
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        <CursorSpotlight />
        {sections}
      </main>
    </div>
  );
};

export default Index;
