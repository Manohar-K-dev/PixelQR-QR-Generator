import { useEffect, useState } from "react";
// Context
import MainContext from "./MainContext.jsx";

const ValueProvider = ({ children }) => {
  // Theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Theme: Apply Theme to <html/>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // QR Code
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");

  const handleGenerateBtn = async () => {
    if (qrData === "" || qrData === null || qrData === undefined) {
      return alert("Type something");
    }
    setLoading(true);
    setTimeout(() => {
      try {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
          qrData
        )}`;
        setImg(url);
      } catch (error) {
        console.log("Error from handleGenerateBtn :", error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  const handleDownloadBtn = async () => {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "PixelQR.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log("Error is Download Button:", error);
      });
  };

  //   Export all values
  const contextValues = {
    // Theme
    theme,
    setTheme,
    toggleTheme,
    // QR Code
    img,
    setImg,
    loading,
    setLoading,
    qrData,
    setQrData,
    handleGenerateBtn,
    handleDownloadBtn,
  };

  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
};

export default ValueProvider;
