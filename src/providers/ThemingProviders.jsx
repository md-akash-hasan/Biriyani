"use client";
import { ThemeProvider } from "next-themes";

export default function ThemingProviders({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
