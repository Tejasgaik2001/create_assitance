"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import logoBlack from "@/assets/logo_black.webp";
import logoWhite from "@/assets/logo_white.webp";
import { useTheme } from "@/hooks/useTheme";
import { handleBookingRedirect, handleDemoRedirect } from "@/utils/navigation";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const Header = () => {
  const navItems = [
    {
      name: "How It Works",
      link: "/how-it-works",
    },
    {
      name: "What You Get",
      link: "/what-you-get",
    },
    {
      name: "AI Employees",
      link: "/ai-employees",
    },
    {
      name: "Command Center",
      link: "/command-center",
    },
    {
      name: "Why Create Assistants",
      link: "/why-create-assistants",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const currentLogo = theme === "dark" ? logoWhite : logoBlack;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center gap-2 relative z-30">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <motion.img
                src={currentLogo}
                alt="Create Assistants Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain p-1"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <span className="font-bold text-base hidden lg:block whitespace-nowrap">Create Assistants</span>
            </Link>
          </div>
          <NavItems items={navItems} activeLink={location.pathname} />
          <div className="flex items-center gap-2 relative z-30">
            <ThemeToggle />
            <MagneticWrapper strength={0.2}>
              <NavbarButton
                className="border-2 border-accent bg-transparent text-accent hover:bg-accent/10 font-bold transition-all duration-300 shadow-none px-3 py-2 h-9 text-xs"
                onClick={handleBookingRedirect}
              >
                Book a Consultation
              </NavbarButton>
            </MagneticWrapper>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={currentLogo}
                  alt="Create Assistants Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain p-1"
                />
              </Link>
            </div>

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "relative py-2 block font-medium transition-colors duration-200",
                    isActive
                      ? "text-accent"
                      : "text-neutral-600 dark:text-neutral-300"
                  )}
                >
                  <span className="block whitespace-nowrap">{item.name}</span>
                </Link>
              );
            })}
            <div className="flex w-full flex-col gap-4 mt-8 pb-8 items-stretch">
              <div className="flex justify-center mb-2">
                <ThemeToggle />
              </div>
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleBookingRedirect();
                }}
                className="w-full border-2 border-accent bg-transparent text-accent font-bold h-12 flex items-center justify-center rounded-full"
              >
                Book a Consultation
              </NavbarButton>
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleDemoRedirect();
                }}
                className="w-full bg-accent text-white font-bold h-12 shadow-lg shadow-accent/20 flex items-center justify-center rounded-full"
              >
                Demo Our AI
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;

