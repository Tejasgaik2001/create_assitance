import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";
import { handleBookingRedirect } from "@/utils/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "What You Get", href: "/what-you-get" },
    { name: "AI Employees", href: "/ai-employees" },
    { name: "Support", href: "/why-create-assistants" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-background/10 backdrop-blur-md border border-white/10 group-hover:border-accent/50 transition-all duration-500">
              <img
                src={logo}
                alt="Create Assistants Logo"
                className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase italic bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:text-accent transition-colors duration-500">
              Create Assistants
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative group text-sm font-bold uppercase tracking-widest italic text-foreground/80 hover:text-accent transition-colors duration-300"
              >
                {link.name}
                <m.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            ))}
            <Button
              variant="hero"
              size="sm"
              className="bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full px-6 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 group h-10"
              onClick={handleBookingRedirect}
            >
              Book Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[73px] bg-background/95 backdrop-blur-xl z-40 md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-4 bg-transparent">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-2xl font-bold uppercase tracking-tighter italic text-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </m.div>
              ))}
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-xs mt-4"
              >
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full py-6 text-xl shadow-xl shadow-primary/20"
                  onClick={handleBookingRedirect}
                >
                  Book Consultation
                </Button>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
