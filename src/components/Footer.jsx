import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="text-gary-500 dark:text-gray-400 place-self-center place-content-end px-6 pb-8 pt-4 text-sm md:text-base h-48 md:h-80">
      {t("designer")}{" "}
      <a
        href="https://www.linkedin.com/in/manohar--k"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 dark:text-blue-600"
      >
        {t("name")}
      </a>
    </div>
  );
};

export default Footer;
