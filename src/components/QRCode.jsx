import { useContext } from "react";
import { useTranslation } from "react-i18next";
// Icons
import { LuDownload, LuQrCode, LuSparkles } from "react-icons/lu";
// Context
import MainContext from "../context/MainContext.jsx";

const QRCode = () => {
  const {
    img,
    loading,
    qrData,
    setQrData,
    handleGenerateBtn,
    handleDownloadBtn,
  } = useContext(MainContext);
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-8 px-6">
      <span className="bg-blue-100 dark:bg-green-900/30 rounded-xl p-4 text-5xl">
        <LuQrCode className="text-blue-600 dark:text-green-500" />
      </span>
      <div className="place-items-center space-y-3">
        <p className="text-gray-900 dark:text-gray-100 text-lg md:text-5xl font-bold">
          {t("website_name")}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          {t("description")}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <input
          required
          type="text"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
          placeholder={t("input_placeholder")}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-green-500 py-3 px-4 rounded-lg outline-none text-sm md:text-base w-60 md:w-1/3"
        />
        <button
          type="submit"
          onClick={handleGenerateBtn}
          className="flex items-center justify-center gap-4 cursor-pointer bg-blue-600 md:hover:bg-blue-700 dark:bg-green-600 dark:md:hover:bg-green-700 text-white py-2 px-4 rounded-lg outline-none text-sm md:text-lg w-60 md:w-1/3"
        >
          <span>
            <LuSparkles />
          </span>
          {t("generate")}
        </button>
      </div>
      {loading ? (
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600 dark:border-blue-600"></div>
      ) : (
        img && (
          <div className="w-full place-items-center space-y-8">
            <div className="bg-white dark:bg-gray-800 w-60 md:w-1/3 place-items-center rounded-lg py-4">
              <img src={img} className="w-40 md:w-60" />
            </div>
            <button
              onClick={handleDownloadBtn}
              className="flex items-center justify-center gap-4 cursor-pointer bg-gray-800 md:hover:bg-gray-900 dark:bg-gray-700 dark:md:hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm md:text-base outline-none w-60 md:w-1/3"
            >
              <span>
                <LuDownload />
              </span>
              {t("download")}
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default QRCode;
