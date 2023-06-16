import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Toggle() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "dark");

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch
      checked={darkSide}
      onChange={toggleDarkMode}
      size={15}
      moonColor="white"
      sunColor="white"
      className="hover:motion-safe:animate-spin"
    />
  );
}
