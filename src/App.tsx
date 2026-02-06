import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={null}>
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
);

export default App;
