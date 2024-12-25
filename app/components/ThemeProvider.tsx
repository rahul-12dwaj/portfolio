"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark"; // Only dark theme, no light theme option

type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark"); // Set default theme to 'dark'

  // Check for saved theme in localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme); // If a saved theme exists, use it
    } else {
      setTheme("dark"); // Default to dark if no saved theme is found
    }
  }, []);

  // Apply the theme immediately when the theme state changes
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Always apply dark theme
    localStorage.setItem("theme", "dark"); // Save dark theme to localStorage
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
