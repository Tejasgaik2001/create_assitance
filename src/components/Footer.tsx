import { Link } from "react-router-dom";
import { m, useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logoBlack from "@/assets/logo_black.webp";
import logoWhite from "@/assets/logo_white.webp";
import { useTheme } from "@/hooks/useTheme";
import { useIsMobile } from "@/hooks/useIsMobile";

const Footer = () => {
  const ref = useRef(null);
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: isMobile, margin: "-10%" });

  const footerLinks = {
    Solutions: [
      { name: "Command Center", href: "/command-center" },
      { name: "AI Employees", href: "/ai-employees" },
      { name: "Automation", href: "/what-you-get" },
      { name: "Managed Service", href: "/why-create-assistants" },
    ],
    Company: [
      { name: "About Us", href: "/why-create-assistants" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Success Stories", href: "/#success" },
      { name: "Book a Call", href: "/book-a-call" },
    ],
    Connect: [
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "Facebook", href: "https://facebook.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "Twitter", href: "https://twitter.com" },
    ],
  };

  return (
    <footer ref={ref} className="bg-background pt-20 pb-10 border-t border-border/40 overflow-hidden relative">
      {/* Decorative background orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={theme === "dark" ? logoWhite : logoBlack}
                  alt="Logo"
                  className="w-10 h-10 object-contain p-1 bg-white/5 rounded-xl border border-white/10 dark:invert-0"
                />
                <span className="text-xl font-bold tracking-tighter uppercase italic">Create Assistants</span>
              </Link>
            </m.div>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground font-medium leading-relaxed"
            >
              Transforming small businesses with enterprise-grade AI employees and unified growth systems.
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4"
            >
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <m.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-2.5 rounded-xl bg-muted/50 border border-border/40 hover:border-accent/40 text-muted-foreground hover:text-accent transition-all duration-300"
                >
                  <Icon size={18} />
                </m.a>
              ))}
            </m.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <div key={title} className="space-y-6">
              <m.h4
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (sectionIndex + 1) }}
                className="font-bold uppercase tracking-widest text-sm text-accent"
              >
                {title}
              </m.h4>
              <ul className="space-y-4">
                {links.map((link, i) => (
                  <m.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 * (sectionIndex + 1) + (i * 0.05) }}
                  >
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground font-medium transition-colors flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-0 w-0 opacity-0 group-hover:mr-2 group-hover:w-3.5 group-hover:opacity-100 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </m.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-10 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm text-muted-foreground font-medium order-2 md:order-1">
            © {new Date().getFullYear()} Create Assistants. All rights reserved.
          </p>
          <div className="flex gap-8 order-1 md:order-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Terms of Service</Link>
          </div>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
