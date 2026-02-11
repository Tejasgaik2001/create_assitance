import { m, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <m.button
      onClick={toggleTheme}
      className="relative w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        <m.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "light" ? (
            <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
          ) : (
            <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
          )}
        </m.div>
      </AnimatePresence>
    </m.button>
  );
};

export default ThemeToggle;
