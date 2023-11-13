import React, { useContext } from "react";
import { ThemeContext } from "../../common/contexts";
import { BsMoonStars, BsSun } from "react-icons/bs";
import "./DarkModeToggle.scss";

export function DarkModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className='darkmode-toggle'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <BsSun /> : <BsMoonStars />}
      <span className='visually-hidden'>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </span>
    </button>
  );
}
