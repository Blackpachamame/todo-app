import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import PropTypes from "prop-types";

export const ThemeProvider = ({ children }) => {
  const themePrefers = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : themePrefers;
  }

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleChangeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
};
