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
      <h1 className="text-veryLightGray text-[26px] sm:text-[40px] font-bold leading-none uppercase tracking-[10px] sm:tracking-[14px] pt-2 sm:pt-[10px]">
        Todo
      </h1>

      <button onClick={handleChangeTheme} aria-label="Toggle theme">
        {theme === "light" ? (
          <img
            src={iconMoon}
            alt="icon theme"
            width={20}
            height={20}
            className="sm:w-[26px] sm:h-[26px]"
          />
        ) : (
          <img
            src={iconSun}
            alt="icon theme"
            width={20}
            height={20}
            className="sm:w-[26px] sm:h-[26px]"
          />
        )}
      </button>
    </header>
  );
}
