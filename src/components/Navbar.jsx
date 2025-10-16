// Ui
import Language from "../ui/Language.jsx";
import Theme from "../ui/Theme.jsx";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 h-20 sticky top-0 z-50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl shadow-md">
      <Language />
      <Theme />
    </div>
  );
};

export default Navbar;
