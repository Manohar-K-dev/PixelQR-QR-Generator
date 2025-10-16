import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      light: "Light",
      dark: "Dark",
      website_name: "QR Code Generator",
      description: "Create QR codes instantly for any text or URL",
      input_placeholder: "Enter text or URL...",
      generate: "Generate QR Code",
      download: "Download QR",
      designer: "Designed by",
      name: "K MANOHAR",
    },
  },
  ta: {
    translation: {
      light: "ஒளி",
      dark: "இருள்",
      website_name: "வி.எ. குறியீடு உருவாக்கி",
      description:
        "எந்த உரை அல்லது இணைப்புக்கும் உடனடியாக வி.எ. குறியீடுகளை உருவாக்குங்கள்",
      input_placeholder: "உரை அல்லது இணைப்பை உள்ளிடவும்...",
      generate: "வி.எ. குறியீட்டை உருவாக்கவும்",
      download: "வி.எ-ஐப் பதிவிறக்கு",
      designer: "வடிவமைப்பு இவண்",
      name: "கா மனோகர்",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "ta",
  fallbackLng: "ta",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
