import { useContext } from "react";
// Icons
import { LuMoon, LuSun } from "react-icons/lu";
// Context
import MainContext from "../context/MainContext.jsx";
import { useTranslation } from "react-i18next";

const Theme = () => {
  const { theme, toggleTheme } = useContext(MainContext);
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-lg p-2 cursor-pointer  bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      <span>{theme === "light" ? <LuSun /> : <LuMoon />}</span>
      <p className="capitalize">{t(theme)}</p>
    </button>
  );
};

export default Theme;
