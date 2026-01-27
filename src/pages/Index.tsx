import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import PillarsSection from "@/components/PillarsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <PillarsSection />
        <WhyChooseUs />
        <TestimonialSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
