import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    document.body.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
      document.body.classList.add("dark-theme");
    } else {
      document.body.removeAttribute("data-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
