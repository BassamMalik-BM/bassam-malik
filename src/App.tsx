import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import BreadcrumbSchema from "./schemas/BreadcrumbSchema";
import CookieConsent from "./components/CookieConsent";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Blogs from "./pages/Blogs";
import Resources from "./pages/Resources";
import Tools from "./pages/Tools";
import Calculators from "./pages/Calculators";
import Ebooks from "./pages/Ebooks";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import RiskDisclaimer from "./pages/RiskDisclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiesPolicy from "./pages/CookiesPolicy";
import LearnCategories from "./pages/LearnCategories";
import LearnCategory from "./pages/LearnCategory";
import Sources from "./pages/Sources";
import NotFound from "./pages/NotFound";

import BlogsDetail from "./pages/details/BlogsDetail";
import LearnDetail from "./pages/details/LearnDetail";
import CalculatorsDetail from "./pages/details/CalculatorsDetail";
import ToolsDetail from "./pages/details/ToolsDetail";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-900 transition-colors dark:text-slate-100">
      {/* GLOBAL FIXED BACKGROUND */}
      <div
        className="
          fixed inset-0 -z-10
          bg-[#f8fafc]
          bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_35%)]
          dark:bg-[#020817]
          dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_35%),linear-gradient(180deg,#020817,#07111f)]
        "
      />

      <ScrollToTop />
      <Navbar />
      <BreadcrumbSchema />
      <CookieConsent />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* LEARN */}
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/categories" element={<LearnCategories />} />
        <Route path="/learn/categories/:category" element={<LearnCategory />} />
        <Route
          path="/learn/categories/:categorySlug/:slug"
          element={<LearnDetail />}
        />
        <Route path="/learn/:slug" element={<LearnDetail />} />

        {/* BLOGS */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogsDetail />} />

        {/* TOOLS */}
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:slug" element={<ToolsDetail />} />

        {/* CALCULATORS */}
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/calculators/:slug" element={<CalculatorsDetail />} />

        {/* OTHER PAGES */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/sources" element={<Sources />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}