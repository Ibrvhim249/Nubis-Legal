import { useState, useMemo } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from "react-icons/lu";

// Assets
import backgroundImage from '../img/loading.png';
import svg1 from '../img/assets/Home/Contract Drafting and Review mac.svg'
import svg2 from '../img/assets/Home/Legal Consultation mac.svg'
import svg3 from '../img/assets/Home/Company Formation and Registration mac.svg'
import svg4 from '../img/assets/Home/Trademark and Intellectual Property Registration mac.svg'
import svg5 from '../img/assets/Home/Company Formation and Registration mac.svg'
import svg6 from '../img/assets/Home/Debt Collection mac.svg'
import svg7 from '../img/assets/Home/Litigation and Court Documents mac .svg'
import svg8 from '../img/assets/Home/Dispute Resolution mac .svg'
import svg9 from '../img/assets/Home/Contract Review and Analysis mac.svg'
import svg10 from '../img/assets/Home/Real Estate Legal Support mac .svg'
import svg11 from '../img/assets/Home/Tax and Financial Legal Services mac.svg'
import svg12 from '../img/assets/Home/Regulatory and Legal Compliance mac.svg'

const SERVICES_DATA = [
  {
    id: 1,
    title: "Contract Drafting and Review",
    path: "./ServicesPages/ContractDraftingandReview.jsx",
    description: "Clear, Strong, and Legally Sound Contracts for Your Business, Maximize business value from contracts.",
    text: " with experts in strategy, implementation, and operational support.",
    icon: svg1
  },
  {
    id: 2,
    title: "Legal Consultation",
    path: "./ServicesPages/LegalConsultation.jsx",
    description: "Expert Legal Advice, Personalized for You",
    text: ' and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg2
  },
  {
                  id: 3,
                  title: "Company Formation and Registration",
                  path: "./ServicesPages/CompanyFormationandRegistration.jsx",
                  description: "Start Your Business the Right Way",
                  text:'Take advantage of well-deployed technology and work with the experts at Nubis.',
                  icon: svg3
                },
                {
                  id: 4,
                  title: "Trademark and Intellectual Property Registration",
                  path: "./ServicesPages/TrademarkandIntellectualPropertyRegistration.jsx",
                  description: "Protect Your Brand and Innovations",
                  text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                  icon: svg4
                },
                {
                  id: 5,
                  title: "Legal Document Preparation",
                  path: "./ServicesPages/LegalDocumentPreparation.jsx",
                  description: "Protect your digital assets with enterprise-grade security",
                  text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                  icon: svg5
                },
                {
                  id: 6,
                  title: "Debt Collection",
                  path: "./ServicesPages/DebtCollection.jsx",
                  description: "Transform your business with data-driven decisions",
                  text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                  icon: svg6
                },
                {
                  id: 7,
                  title: "Litigation and Court Documents",
                  path: "./ServicesPages/LitigationandCourtDocuments.jsx",
                  description: "Full-stack technical support and maintenance",
                  text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                  icon: svg7
                },
                {
                  id: 8,
                  title: "Dispute Resolution",
                  path: "./ServicesPages/DisputeResolution.jsx",
                  description: "Protect your digital assets with enterprise-grade security",
                  text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                  icon: svg8
                },
                {
                  id: 9,
                  title: "Contract Review and Analysis",
                  path: "./ServicesPages/ContractReviewandAnalysis.jsx",
                  description: "Transform your business with data-driven decisions",
                  text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                  icon: svg9
                },
                {
                  id: 10,
                  title: "Real Estate Legal Support",
                  path: "./ServicesPages/RealEstateLegalSupport.jsx",
                  description: "Full-stack technical support and maintenance",
                  text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                  icon: svg10
                },
                {
                  id: 11,
                  title: "Tax and Financial Legal Services",
                  path: "./ServicesPages/TaxandFinancialLegalServices.jsx",
                  description: "Protect your digital assets with enterprise-grade security",
                  text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                  icon: svg11
                },
              
              {
                 id: 12,
                 title: "Regulatory and Legal Compliance",
                 path: "./ServicesPages/RegulatoryandLegalCompliance.jsx",
                 description: "Protect your digital assets with enterprise-grade security",
                 text: 'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                 icon: svg12
               }
];

function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const { currentServices, totalPages } = useMemo(() => {
    const totalPages = Math.ceil(SERVICES_DATA.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {
      currentServices: SERVICES_DATA.slice(startIndex, endIndex),
      totalPages
    };
  }, [currentPage]);

  const PaginationControls = () => (
    <nav aria-label="Services pagination" className="pagination-container">
      <div className="pagination-dots">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`dot ${currentPage === index + 1 ? 'active' : ''}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </nav>
  );
  

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src={backgroundImage} 
            alt="Decorative background" 
            className="hero-bg"
            role="presentation"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">
            <span className="highlight">NUBIS LEGAL CONSULTANCY SERVICES.<br />YOUR TRUSTED LEGAL PARTNER.</span>
          </h1>
          <p className="hero-subtitle">
            Where Innovation Meets Expertise <br />Delivering Smarter Legal Solutions
          </p>
          <div className="hero-cta">
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </section>

       {/* Services Section */}
       <section className="service-page" id="services">
        <div className="container mx-auto px-4 py-16">
          <header className="service-page-header flex items-center mb-12">
            <span className="w-1 h-10 bg-gray-400 mr-3" aria-hidden="true"></span>
            <h2 className="service-page-title">Our Services</h2>
          </header>

          <div className="service-page-grid" role="list">
            {currentServices.map((service) => (
              <article 
                key={service.id}
                className="service-page-item bg-gray-200 p-6 rounded-xl relative shadow-md hover:shadow-lg transition-transform duration-300 mx-2"
                role="listitem"
              >
                <div className="service-page-icon flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-lg mb-4">
                  <img 
                    src={service.icon} 
                    alt={`Icon for ${service.title}`}
                    className="w-full h-full p-2 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{service.description}</p>
                <p className="text-base text-gray-700 leading-relaxed">{service.text}</p>
                <Link 
                  to={`/services/${service.path}`}
                  className="service-page-link"
                  aria-label={`View details for ${service.title}`}
                >
                  <LuArrowUpRight />
                </Link>
              </article>
            ))}
          </div>

          <PaginationControls />
        </div>
      </section>
    </>
  );
}
  export default Services;