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
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <motion.div
                className="w-9 h-9 bg-foreground rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-background font-bold text-lg">C</span>
              </motion.div>
              <span className="font-semibold text-lg hidden sm:block">Create Assistants</span>
            </Link>
          </div>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <NavbarButton variant="primary" onClick={() => { }}>Book a Consultation</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-base">C</span>
                </div>
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
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 py-2 block"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <div className="flex justify-start">
                <ThemeToggle />
              </div>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
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

