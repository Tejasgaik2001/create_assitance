import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { CursorSpotlight } from "@/components/CursorSpotlight";

// Lazy-load below-the-fold sections so their images/assets only download when needed
const IntroSection = lazy(() => import("@/components/IntroSection"));
const PillarsSection = lazy(() => import("@/components/PillarsSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const TestimonialSection = lazy(() => import("@/components/TestimonialSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

const SectionFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        <CursorSpotlight />
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <IntroSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PillarsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQSection withFooter />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
