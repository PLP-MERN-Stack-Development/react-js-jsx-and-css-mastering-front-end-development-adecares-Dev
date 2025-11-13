import { useState } from "react";
import ThemeContext from "./ThemeContextCore";

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}


