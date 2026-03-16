import { Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage.jsx";
import About from "./landing_page/about/AboutPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
