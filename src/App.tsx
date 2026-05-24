import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LearnDetail from './pages/LearnDetail';
import Learn from './pages/Learn';
import Blogs from "./pages/Blogs";
import BlogsDetail from "./pages/BlogsDetail";
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Resources from './pages/Resources';
import RiskDisclaimer from './pages/RiskDisclaimer';
import Calculators from "./pages/Calculators";
import TradeSizeCalculator from "./pages/calculators/TradeSizeCalculator";
import RiskRewardCalculator from "./pages/calculators/RiskRewardCalculator";
import ProfitCalculator from "./pages/calculators/ProfitCalculator";
import CompoundGrowthCalculator from "./pages/calculators/CompoundGrowthCalculator";
import BreakEvenCalculator from "./pages/calculators/BreakEvenCalculator";
import Calculator from "./pages/calculators/Calculator";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import RiskManagementChecklist from "./pages/tools/RiskManagementChecklist";
import TradingJournalTemplate from "./pages/tools/TradingJournalTemplate";
import Ebooks from "./pages/Ebooks";
import Tools from "./pages/Tools";
import TradingMistakeAnalyzer from './pages/tools/TradingMistakeAnalyzer';
import DCAPlanner from './pages/tools/DCAPlanner';

export default function App() {
  return (
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-navy-950 dark:text-slate-100">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogsDetail />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:slug" element={<LearnDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/calculators/trade-size" element={<TradeSizeCalculator />} />
        <Route path="/calculators/risk-reward" element={<RiskRewardCalculator />} />
        <Route path="/calculators/profit" element={<ProfitCalculator />} />
        <Route path="/calculators/compound-growth" element={<CompoundGrowthCalculator />} />
        <Route path="/calculators/break-even" element={<BreakEvenCalculator />} />
        <Route path="/calculators/calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/tools/risk-management-checklist" element={<RiskManagementChecklist />} />
        <Route path="/tools/trading-journal-template" element={<TradingJournalTemplate />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/trading-mistake-analyzer" element={<TradingMistakeAnalyzer />} />
        <Route path="/tools/dca-planner" element={<DCAPlanner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
