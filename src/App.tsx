import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

import BreadcrumbSchema from "./schemas/BreadcrumbSchema";
import SiteBackground from "./layouts/SiteBackground";
import PageLayout from "./layouts/PageLayout";

import Home from "./pages/Home";

import Learn from "./pages/Learn";
import LearnCategories from "./pages/LearnCategories";
import LearnCategory from "./pages/LearnCategory";
import ArticlePage from "./pages/ArticlePage";

import Discover from "./pages/Discover";
import DiscoverPage from "./pages/DiscoverPage";

import DiscoverExchanges from "./pages/discover/DiscoverExchanges";
import DiscoverExchangePage from "./pages/discover/DiscoverExchangePage";

import DiscoverBooks from "./pages/discover/DiscoverBooks";
import DiscoverBookPage from "./pages/discover/DiscoverBookPage";

import DiscoverAnalysisWebsites from "./pages/discover/DiscoverAnalysisWebsites";
import DiscoverAnalysisWebsitePage from "./pages/discover/DiscoverAnalysisWebsitePage";

import CalculatorsPage from "./pages/calculators/CalculatorsPage";
import CalculatorDetailPage from "./pages/calculators/CalculatorDetailPage";

import ToolsPage from "./pages/tools/ToolsPage";
import ToolDetailPage from "./pages/tools/ToolDetailPage";

import Ebooks from "./pages/Ebooks";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Start from "./pages/Start";

import Sources from "./pages/Sources";
import EditorialPolicy from "./pages/EditorialPolicy";
import RiskDisclaimer from "./pages/RiskDisclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiesPolicy from "./pages/CookiesPolicy";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <SiteBackground />

      <ScrollToTop />
      <Navbar />
      <BreadcrumbSchema />
      <CookieConsent />

      <Routes>
        <Route element={<PageLayout />}>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* LEARN */}
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/categories" element={<LearnCategories />} />
          <Route path="/learn/:category" element={<LearnCategory />} />
          <Route path="/learn/:category/:slug" element={<ArticlePage />} />

          {/* DISCOVER */}
          <Route path="/discover" element={<Discover />} />
          <Route path="/discover/:slug" element={<DiscoverPage />} />

          <Route
            path="/discover/exchanges"
            element={<DiscoverExchanges />}
          />

          <Route
            path="/discover/exchanges/:slug"
            element={<DiscoverExchangePage />}
          />

          <Route
            path="/discover/books"
            element={<DiscoverBooks />}
          />

          <Route
            path="/discover/books/:slug"
            element={<DiscoverBookPage />}
          />

          <Route
            path="/discover/analysis-websites"
            element={<DiscoverAnalysisWebsites />}
          />

          <Route
            path="/discover/analysis-websites/:slug"
            element={<DiscoverAnalysisWebsitePage />}
          />

          <Route path="/calculators" element={<CalculatorsPage />} />
          <Route path="/calculators/:slug" element={<CalculatorDetailPage />} />

          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/:slug" element={<ToolDetailPage />} />

          {/* OTHER PAGES */}
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/start-here" element={<Start />} />

          <Route path="/sources" element={<Sources />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />

          <Route
            path="/cookies-policy"
            element={<CookiesPolicy />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}