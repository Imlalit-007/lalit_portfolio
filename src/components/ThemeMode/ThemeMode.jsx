import { IoSunny, IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";

function ThemeMode() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme) {
      setTheme(storedTheme === "dark");
      document.querySelector("body").setAttribute("data-theme", storedTheme);
    } else {
      setTheme(true);
      localStorage.setItem("selectedTheme", "dark");
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    localStorage.setItem("selectedTheme", newTheme ? "dark" : "light");

    setTheme(newTheme);
    document
      .querySelector("body")
      .setAttribute("data-theme", newTheme ? "dark" : "light");
  };

  return (
    <div
      className='theme-icon'
      onClick={toggleTheme}
    >
      {theme ? <IoSunny /> : <IoMoon />}
    </div>
  );
}

export default ThemeMode;
