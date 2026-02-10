import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy-load below-the-fold sections so their images/assets only download when needed
const IntroSection = lazy(() => import("@/components/IntroSection"));
const PillarsSection = lazy(() => import("@/components/PillarsSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const TestimonialSection = lazy(() => import("@/components/TestimonialSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

const SectionsLoader = () => (
  <div className="w-full bg-background py-20 space-y-20">
    {/* Mobile Skeleton Layout */}
    <div className="lg:hidden container mx-auto px-4 space-y-16">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-8">
          <div className="space-y-4 text-center">
            <Skeleton className="h-6 w-24 mx-auto rounded-full" />
            <Skeleton className="h-8 w-3/4 mx-auto rounded-lg" />
            <Skeleton className="h-4 w-2/3 mx-auto rounded-md" />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[1, 2].map((j) => (
              <div key={j} className="bg-card border border-border/30 rounded-xl p-4 space-y-3">
                <Skeleton className="h-16 w-16 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4 rounded-md" />
                  <Skeleton className="h-3 w-full rounded-md animation-delay-100" />
                  <Skeleton className="h-3 w-2/3 rounded-md animation-delay-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Desktop Skeleton Layout */}
    <div className="hidden lg:block">
      {[1, 2, 3].map((i) => (
        <div key={i} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center gap-6">
            <Skeleton className="h-4 w-32 rounded-full" />
            <Skeleton className="h-8 w-72 sm:w-96 rounded-full animation-delay-100" />
            <Skeleton className="h-4 w-56 sm:w-80 rounded-full/70 animation-delay-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
              {[1, 2, 3].map((j) => (
                <Skeleton key={j} className="h-48 rounded-2xl border border-border/30" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    
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
          <FAQSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
