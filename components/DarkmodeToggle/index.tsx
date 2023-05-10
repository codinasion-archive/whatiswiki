import { useTheme } from "next-themes";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function DarkmodeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="text-2xl mx-1"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span className="sr-only">Dark Mode Toggle</span>
        {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
    </>
  );
}
