import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage.jsx";
import About from "./landing_page/about/AboutPage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";
import Product from "./landing_page/products/ProductsPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Login from "./landing_page/login/Login.jsx";
import Signup from "./landing_page/signup/Signup.jsx";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
