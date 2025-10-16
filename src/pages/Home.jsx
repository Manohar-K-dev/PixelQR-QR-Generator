// Components
import Navbar from "../components/Navbar.jsx";
import QRCode from "../components/QRCode.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-900 space-y-8 h-full">
      <Navbar />
      <QRCode />
      <Footer />
    </div>
  );
};

export default Home;
