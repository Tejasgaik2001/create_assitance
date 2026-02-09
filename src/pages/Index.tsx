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

const SectionsLoader = () => (
  <div className="w-full bg-background py-20 space-y-20">
    {[1, 2, 3].map((i) => (
      <div key={i} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-6 animate-pulse">
          <div className="h-4 w-32 rounded-full bg-muted" />
          <div className="h-8 w-72 sm:w-96 rounded-full bg-muted" />
          <div className="h-4 w-56 sm:w-80 rounded-full bg-muted/70" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
            {[1, 2, 3].map((j) => (
              <div key={j} className="h-48 rounded-2xl bg-muted/50 border border-border/30" />
            ))}
          </div>
        </div>
      </div>
    ))}
    <div className="flex justify-center pt-8">
      <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>
        {/* <CursorSpotlight /> */}
        <HeroSection />
        <Suspense fallback={<SectionsLoader />}>
          <IntroSection />
          <PillarsSection />
          <WhyChooseUs />
          <TestimonialSection />
          <FAQSection withFooter />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
