import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, Target, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.gif";

const BookACall = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <main className="pt-32 pb-24 px-4 overflow-x-hidden">
        <CursorSpotlight />

        {/* Simple Header Area */}
        <div className="container max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-10"
          >
            <img src={logo} alt="Create Assistants" className="h-12 w-auto" />
          </motion.div>

          <AnimatedSection direction="up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white">
              Let's See If Create Assistants Is a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80 dark:from-accent dark:to-accent/80">
                Fit For Your Business
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              We design, build and manage an integrated CRM and AI workforce that captures leads, engages customers and scales your business so you can focus on what you do best.
            </p>
          </AnimatedSection>
        </div>

        {/* Focused Scheduler Section */}
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-col gap-12 items-center">
              {/* Calendar Container */}
              <div className="w-full p-1 rounded-[2.5rem] bg-gradient-to-br from-slate-200 via-white to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 shadow-2xl">
                <div className="p-8 md:p-12 rounded-[2.3rem] bg-white/90 dark:bg-slate-950/90 backdrop-blur-3xl border border-white/40 dark:border-white/5 flex flex-col items-center">
                  <div className="text-center mb-10 w-full">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-[0.3em]">Select Date & Time</h3>
                    <div className="flex items-center gap-2 justify-center mt-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Available Slots Today</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 w-full mt-4">
                    {/* Calendar Layout */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between px-2">
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-[0.2em]">February 2026</span>
                        <div className="flex gap-4">
                          <span className="text-slate-300 dark:text-slate-700 cursor-not-allowed text-xs">{"<"}</span>
                          <span className="text-slate-800 dark:text-slate-200 font-bold cursor-pointer text-xs">{">"}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase mb-2">
                        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: 28 }).map((_, i) => (
                          <div key={i} className={`h-11 flex items-center justify-center rounded-full text-[13px] font-bold transition-all ${i + 1 === 2 ? 'bg-accent text-white shadow-lg' : i + 1 < 2 ? 'text-slate-200 dark:text-slate-800 cursor-not-allowed' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'}`}>
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Time Slots Layout */}
                    <div className="space-y-3">
                      {["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"].map((time, idx) => (
                        <motion.button
                          key={time}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={cn(
                            "w-full py-4 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1",
                            idx === 1
                              ? "bg-accent border-accent text-white shadow-xl shadow-accent/40"
                              : "bg-white dark:bg-slate-900 border-slate-100 dark:border-white/5 text-slate-900 dark:text-slate-200 shadow-sm hover:border-accent/30"
                          )}
                        >
                          <span className="text-base font-bold tracking-tight">{time}</span>
                          <span className={cn(idx === 1 ? "text-white/80" : "text-slate-500", "text-[10px] font-bold uppercase tracking-[0.1em]")}>
                            {idx === 1 ? "Selected" : "Available"}
                          </span>
                        </motion.button>
                      ))}
                      <div className="text-[10px] font-bold text-slate-400 dark:text-slate-600 text-center mt-6 uppercase tracking-wider">
                        All times in (GMT+05:30) Asia/Calcutta
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure Booking Info */}
              <div className="flex flex-wrap justify-center gap-10 mt-4 opacity-60">
                {[
                  { text: "30-min Call", icon: Clock },
                  { text: "Secure Sync", icon: Shield },
                  { text: "Free Strategy", icon: Target }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon size={14} className="text-accent" />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookACall;
