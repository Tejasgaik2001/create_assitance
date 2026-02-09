"use client";
import { cn } from "@/lib/utils";
import { Menu as IconMenu2, X as IconX } from "lucide-react";
import {
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { isSafari, supportsBackdropFilter } from "@/utils/safariDetection";

// Interfaces for props
interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children?: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
    icon?: any;
  }[];
  className?: string;
  onItemClick?: () => void;
  activeLink?: string;
}

interface MobileNavProps {
  children?: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

// Create a Context to share the 'visible' state (indicates if navbar is shrunk/scrolling)
interface NavbarContextType {
  visible: boolean;
}

const NavbarContext = React.createContext<NavbarContextType>({ visible: false });

export const useNavbarStatus = () => React.useContext(NavbarContext);

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <NavbarContext.Provider value={{ visible }}>
      <m.div
        ref={ref}
        className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
            : child
        )}
      </m.div>
    </NavbarContext.Provider>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  const canUseBackdropFilter = supportsBackdropFilter() && !isSafari();

  return (
    <m.div
      animate={{
        backdropFilter: visible && canUseBackdropFilter ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        y: visible ? 20 : 0,
        paddingLeft: visible ? "2rem" : "1rem",
        paddingRight: visible ? "2rem" : "1rem",
        borderRadius: "1.5rem",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full !rounded-3xl bg-white px-4 py-2 lg:flex dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </m.div>
  );
};

export const NavItems = ({ items, className, onItemClick, activeLink }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <m.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex-1 hidden flex-row items-center justify-center space-x-1 text-sm font-semibold text-neutral-600 dark:text-neutral-400 transition duration-200 lg:flex lg:space-x-1",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isActive = activeLink === item.link;
        return (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className={cn(
              "group relative px-4 py-2 transition-colors duration-200 whitespace-nowrap",
              isActive
                ? "text-neutral-900 dark:text-white"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white font-medium"
            )}
            key={`link-${idx}`}
            to={item.link}
          >
            <span className="relative z-20">{item.name}</span>
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-accent transition-transform duration-300 ease-out",
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}
            />
          </Link>
        );
      })}
    </m.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  const canUseBackdropFilter = supportsBackdropFilter() && !isSafari();

  return (
    <m.div
      animate={{
        backdropFilter: visible && canUseBackdropFilter ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </m.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  );
};



export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
  )) => {
  const baseStyles =
    "px-4 py-2 rounded-full bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center whitespace-nowrap";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
