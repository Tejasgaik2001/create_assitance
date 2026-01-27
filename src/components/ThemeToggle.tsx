import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-muted border border-border p-1 transition-colors duration-300"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Sliding circle */}
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full bg-foreground flex items-center justify-center shadow-md"
        animate={{
          left: theme === "light" ? "4px" : "calc(100% - 28px)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.div
          key={theme}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {theme === "light" ? (
            <Sun className="w-3.5 h-3.5 text-background" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-background" />
          )}
        </motion.div>
      </motion.div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Sun className={`w-3 h-3 transition-opacity duration-300 ${theme === "light" ? "opacity-0" : "opacity-30"}`} />
        <Moon className={`w-3 h-3 transition-opacity duration-300 ${theme === "dark" ? "opacity-0" : "opacity-30"}`} />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
