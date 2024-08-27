"use client";

import DarkChatbox from "@/components/DarkTheme";
import LightChatbox from "@/components/LightTheme";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const Homepage = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-white transition-all"
      >
        <Sun
          className={`h-6 w-6 transition-transform duration-300 ${
            theme === "dark" ? "rotate-0 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute h-6 w-6 transition-transform duration-300 ${
            theme === "dark" ? "rotate-100 scale-100" : "rotate-90 scale-0"
          }`}
        />
      </button>
      <div className="w-full">
        {theme === "light" ? <LightChatbox /> : <DarkChatbox />}
      </div>
    </div>
  );
};

export default Homepage;
