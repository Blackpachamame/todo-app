import { useState, useEffect } from "react";
import { iconSun } from "../../assets/images";
import { iconMoon } from "../../assets/images";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="w-full flex justify-between items-center">
      <h1 className="text-veryLightGray text-xl font-bold uppercase tracking-widest">
        Todo
      </h1>

      <button onClick={handleChangeTheme} aria-label="Toggle theme">
        {theme === "light" ? (
          <img src={iconSun} alt="icon theme" width={26} height={26} />
        ) : (
          <img src={iconMoon} alt="icon theme" width={26} height={26} />
        )}
      </button>
    </header>
  );
}
