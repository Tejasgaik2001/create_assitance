import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoBlack from "@/assets/logo_black.webp";
import logoWhite from "@/assets/logo_white.webp";
import { useTheme } from "@/hooks/useTheme";
import { handleBookingRedirect } from "@/utils/navigation";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton
} from "@/components/ui/resizable-navbar";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: "How It Works", link: "/how-it-works" },
    { name: "What You Get", link: "/what-you-get" },
    { name: "AI Employees", link: "/ai-employees" },
    { name: "Command Center", link: "/command-center" },
    { name: "Why Create Assistants", link: "/why-create-assistants" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <Navbar className="top-6">
      <NavBody className="bg-white/95 dark:bg-black/95 border border-border/40 px-6 py-3">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={theme === "dark" ? logoWhite : logoBlack}
            alt="Logo"
            className="w-7 h-7 object-contain"
          />
          <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-white">
            Create Assistants
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <NavItems
          items={navLinks}
          activeLink={location.pathname}
          className="mx-8"
        />

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <NavbarButton
            onClick={handleBookingRedirect}
            className="bg-transparent border border-orange-400 text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/10 px-6 font-bold"
          >
            Book a Consultation
          </NavbarButton>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </NavBody>

      {/* Mobile Menu */}
      <MobileNav>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} className="bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-border/40">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className={cn(
                  "text-lg font-bold py-2 transition-colors",
                  location.pathname === item.link
                    ? "text-orange-400"
                    : "text-neutral-700 dark:text-neutral-300"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <NavbarButton
              onClick={() => {
                handleBookingRedirect();
                setIsOpen(false);
              }}
              className="bg-transparent border border-orange-400 text-orange-400 mt-4 w-full py-4 text-lg font-bold"
            >
              Book a Consultation
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
