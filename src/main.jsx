import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import IntroVideo from './components/intro/IntroVideo';

// Service components
import LegalConsultation from "./components/Services/ServicesPages/LegalConsultation";
import CompanyFormationandRegistration from "./components/Services/ServicesPages/CompanyFormationandRegistration";
import TrademarkandIntellectualPropertyRegistration from "./components/Services/ServicesPages/TrademarkandIntellectualPropertyRegistration";
import LegalDocumentPreparation from "./components/Services/ServicesPages/LegalDocumentPreparation";
import DebtCollection from "./components/Services/ServicesPages/DebtCollection";
import LitigationandCourtDocuments from "./components/Services/ServicesPages/LitigationandCourtDocuments";
import DisputeResolution from "./components/Services/ServicesPages/DisputeResolution";
import ContractReviewandAnalysis from "./components/Services/ServicesPages/ContractReviewandAnalysis";
import RealEstateLegalSupport from "./components/Services/ServicesPages/RealEstateLegalSupport";
import RegulatoryandLegalCompliance from "./components/Services/ServicesPages/RegulatoryandLegalCompliance";


// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const MainApp = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      {!showMainContent && <IntroVideo onFinish={() => setShowMainContent(true)} />}

      {showMainContent && (
        <Router>
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              
              {/* Service pages */}
              <Route path="/services/legal-consultation" element={<LegalConsultation />} />
              <Route path="/services/companyformation" element={<CompanyFormationandRegistration />} />
              <Route path="/services/trademark-registration" element={<TrademarkandIntellectualPropertyRegistration />} />
              <Route path="/services/document-preparation" element={<LegalDocumentPreparation />} />
              <Route path="/services/debt-collection" element={<DebtCollection />} />
              <Route path="/services/litigation" element={<LitigationandCourtDocuments />} />
              <Route path="/services/dispute-resolution" element={<DisputeResolution />} />
              <Route path="/services/contract-review" element={<ContractReviewandAnalysis />} />
              <Route path="/services/real-estate" element={<RealEstateLegalSupport />} />
              <Route path="/services/compliance" element={<RegulatoryandLegalCompliance />} />

              
              {/* Fallback route */}
              
            </Routes>
          </main>
          <Footer />
        </Router>
      )}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);