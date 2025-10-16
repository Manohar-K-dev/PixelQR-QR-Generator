// Icons
import { useTranslation } from "react-i18next";
import { LuChevronDown, LuGlobe } from "react-icons/lu";

const Language = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;

    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
      <span>
        <LuGlobe />
      </span>
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg p-2 cursor-pointer"
      >
        <option value="ta">தமிழ்</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default Language;
