import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import WhatYouGet from "./pages/WhatYouGet";
import AIEmployees from "./pages/AIEmployees";
import CommandCenter from "./pages/CommandCenter";
import WhyCreateAssistants from "./pages/WhyCreateAssistants";
import BookACall from "./pages/BookACall";
import NotFound from "./pages/NotFound";
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
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/what-you-get" element={<WhatYouGet />} />
            <Route path="/ai-employees" element={<AIEmployees />} />
            <Route path="/command-center" element={<CommandCenter />} />
            <Route path="/why-create-assistants" element={<WhyCreateAssistants />} />
            <Route path="/book-a-call" element={<BookACall />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
