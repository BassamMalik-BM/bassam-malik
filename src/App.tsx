import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import BreadcrumbSchema from './schemas/BreadcrumbSchema';

import Home from './pages/Home';
import Learn from './pages/Learn';
import Blogs from './pages/Blogs';
import Resources from './pages/Resources';
import Tools from './pages/Tools';
import Calculators from './pages/Calculators';
import Ebooks from './pages/Ebooks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';
import RiskDisclaimer from './pages/RiskDisclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CookiesPolicy from "./pages/CookiesPolicy";
import LearnCategories from "./pages/LearnCategories";
import LearnCategory from "./pages/LearnCategory";
import NotFound from './pages/NotFound';

import BlogsDetail from './pages/details/BlogsDetail';
import LearnDetail from './pages/details/LearnDetail';
import CalculatorsDetail from './pages/details/CalculatorsDetail';
import ToolsDetail from './pages/details/ToolsDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-navy-950 dark:text-slate-100">
      <ScrollToTop />
      <Navbar />
      <BreadcrumbSchema />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:slug" element={<LearnDetail />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogsDetail />} />

        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:slug" element={<ToolsDetail />} />

        <Route path="/calculators" element={<Calculators />} />
        <Route path="/calculators/:slug" element={<CalculatorsDetail />} />

        <Route path="/learn/categories" element={<LearnCategories />} />
        <Route path="/learn/category/:category" element={<LearnCategory />} />

        <Route path="/resources" element={<Resources />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}