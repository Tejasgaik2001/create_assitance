import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { MotionConfig, LazyMotion, domMax } from "framer-motion";
import { PageLoader, MobileSkeletonLoader, DesktopSkeletonLoader } from "@/components/ui/PageLoader";
const Index = lazy(() => import("./pages/Index"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const WhatYouGet = lazy(() => import("./pages/WhatYouGet"));
const AIEmployees = lazy(() => import("./pages/AIEmployees"));
const CommandCenter = lazy(() => import("./pages/CommandCenter"));
const WhyCreateAssistants = lazy(() => import("./pages/WhyCreateAssistants"));
// import BookACall from "./pages/BookACall";
const NotFound = lazy(() => import("./pages/NotFound"));
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  const [disableMotion, setDisableMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 1024px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setDisableMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <MotionConfig reducedMotion={disableMotion ? "always" : "never"}>
      <LazyMotion features={domMax} strict>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTop />
                <Suspense fallback={
                  <>
                    <MobileSkeletonLoader />
                    <DesktopSkeletonLoader />
                  </>
                }>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/what-you-get" element={<WhatYouGet />} />
                    <Route path="/ai-employees" element={<AIEmployees />} />
                    <Route path="/command-center" element={<CommandCenter />} />
                    <Route path="/why-create-assistants" element={<WhyCreateAssistants />} />
                    {/* <Route path="/book-a-call" element={<BookACall />} /> */}
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </TooltipProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </LazyMotion>
    </MotionConfig>
  );
};

export default App;
