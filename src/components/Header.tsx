"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
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
import logo from "@/assets/logo.gif";
import { handleBookingRedirect } from "@/utils/navigation";

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

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center gap-2 relative z-30">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <motion.img
                src={logo}
                alt="Create Assistants Logo"
                className="w-9 h-9 object-contain p-1"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <span className="font-semibold text-lg hidden sm:block">Create Assistants</span>
            </Link>
          </div>
          <NavItems items={navItems} activeLink={location.pathname} />
          <div className="flex items-center gap-4 relative z-30">
            <ThemeToggle />
            <NavbarButton className="border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white dark:text-accent dark:hover:text-black font-bold transition-all duration-300 shadow-none hover:shadow-lg hover:shadow-accent/20" onClick={handleBookingRedirect}>Book a Consultation</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Create Assistants Logo"
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
                  <span className="block">{item.name}</span>
                </Link>
              );
            })}
            <div className="flex w-full flex-col gap-4 mt-4">
              <div className="flex justify-start">
                <ThemeToggle />
              </div>
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleBookingRedirect();
                }}
                className="w-full border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              >
                Book a Consultation
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;

