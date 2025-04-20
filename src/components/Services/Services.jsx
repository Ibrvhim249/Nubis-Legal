import { useState, useMemo } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from "react-icons/lu";

// Assets
import servicepageHero from '../img/assets/Service/Services nubi.jpg';
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
import svg13 from '../img/assets/Home/icon 1.svg'
import svg14 from '../img/assets/Home/icons 2.svg'
import svg15 from '../img/assets/Home/icons 3.svg'
import svg16 from '../img/assets/Home/icons 4.svg'
import svg17 from '../img/assets/Home/icons 5.svg'
import svg18 from '../img/assets/Home/icons 6.svg'
import svg19 from '../img/assets/Home/icon 7.svg'
import svg20 from '../img/assets/Home/icon 8.svg'

const SERVICES_DATA = [
  {
    id: 1,
    title: "Contract Drafting and Review",
    category: "Contract and Document Services",
    path: "contract-drafting",
    description: "Clear, Strong, and Legally Sound Contracts for Your Business, Maximize business value from contracts.",
    text: " with experts in strategy, implementation, and operational support.",
    icon: svg1
  },
  {
    id: 2,
    title: "Legal Consultation",
    category: "Advisory and Consultation Services",
    path: "legal-consultation",
    description: "Expert Legal Advice, Personalized for You",
    text: ' and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg2
  },
  {
    id: 3,
    title: "Company Formation and Registration",
    category: "Business Formation and Protection",
    path: "companyformation",
    description: "Start Your Business the Right Way",
    text:'Take advantage of well-deployed technology and work with the experts at Nubis.',
    icon: svg3
  },
  {
    id: 4,
    title: "Trademark and Intellectual Property Registration",
    category: "Business Formation and Protection",
    path: "trademark-registration",
    description: "Protect Your Brand and Innovations",
    text:' help these teams execute their new strategies quickly and with ease.',
    icon: svg4
  },
  {
    id: 5,
    title: "Legal Document Preparation",
    category: "Contract and Document Services",
    path: "document-preparation",
    description: "Professional preparation of legal documents",
    text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg5
  },
  {
    id: 6,
    title: "Debt Collection",
    category: "Dispute and Debt Resolution",
    path: "debt-collection",
    description: "Effective debt recovery solutions",
    text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg6
  },
  {
    id: 7,
    title: "Litigation and Court Documents",
    category: "Dispute and Debt Resolution",
    path: "litigation",
    description: "Professional court document preparation",
    text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg7
  },
  {
    id: 8,
    title: "Dispute Resolution",
    category: "Dispute and Debt Resolution",
    path: "dispute-resolution",
    description: "Mediation and arbitration services",
    text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg8
  },
  {
    id: 9,
    title: "Contract Review and Analysis",
    category: "Contract and Document Services",
    path: "contract-review",
    description: "Detailed contract analysis and evaluation",
    text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg9
  },
  {
    id: 10,
    title: "Real Estate Legal Support",
    category: "Real Estate Legal Services",
    path: "real-estate",
    description: "Comprehensive real estate legal services",
    text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg10
  },
  {
    id: 11,
    title: "Tax and Financial Legal Services",
    category: "Advisory and Consultation Services",
    path: "tax-services",
    description: "Financial legal advisory services",
    text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg11
  },
  {
    id: 12,
    title: "Regulatory and Legal Compliance",
    category: "Advisory and Consultation Services",
    path: "compliance",
    description: "Compliance management solutions",
    text: 'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
    icon: svg12
  },
  {
    id: 13,
    title: "Court Document Filing & Motion Drafting",
    category: "Contract and Document Services",
    path: "CourtDocument",
    description: "Accurate preparation and filing of legal documents",
    text: 'We specialize in the meticulous preparation of legal pleadings and documents.',
    icon: svg13
  },
  {
    id: 14,
    title: "Risk Assessment & Legal Strategy Planning",
    category: "Advisory and Consultation Services",
    path: "RiskA",
    description: "Comprehensive risk assessments",
    text: '',
    icon: svg14
  },
  {
    id: 15,
    title: "Business Structure Consultation",
    category: "Business Formation and Protection",
    path: "BusinessConsultation",
    description: "Optimal business structure advice",
    text: 'ensuring that your choice aligns with your financial, operational, and liability goals.',
    icon: svg15
  },
  {
    id: 16,
    title: "Legal Subscription Plans for Startups",
    category: "Business Formation and Protection",
    path: "LegalSubscription",
    description: "Affordable legal coverage for startups",
    text: 'ensuring that your business has reliable legal support as it scales.',
    icon: svg16
  },
  {
    id: 17,
    title: "Settlement Agreement Drafting",
    category: "Dispute and Debt Resolution",
    path: "SettlementAgreement",
    description: "Professional settlement agreements",
    text: 'ensuring that the terms of resolution are clearly defined and legally enforceable.',
    icon: svg17
  },
  {
    id: 18,
    title: "Lease Agreement Drafting & Negotiation",
    category: "Real Estate Legal Services",
    path: "LeaseAgreement",
    description: "Professional lease agreements",
    text: 'ensuring that all terms are clear, fair, and legally enforceable.',
    icon: svg18
  },
  {
    id: 19,
    title: "Property Due Diligence",
    category: "Real Estate Legal Services",
    path: "PropertyDueDiligence",
    description: "Comprehensive property analysis",
    text: 'to provide you with a comprehensive analysis of a property before making a purchase.',
    icon: svg19
  },
  {
    id: 20,
    title: "Title & Ownership Dispute Resolution",
    category: "Real Estate Legal Services",
    path: "TitleOwnership",
    description: "Resolution for property disputes",
    text: 'helping you navigate complex issues that may arise during property transactions or ownership.',
    icon: svg20
  },
];
function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');
  const itemsPerPage = 4;

  const categories = [
    'All',
    'Business Formation and Protection',
    'Dispute and Debt Resolution',
     'Advisory and Consultation Services',
    'Contract and Document Services',
    'Real Estate Legal Services'
  ];

  const { currentServices, totalPages } = useMemo(() => {
    const filteredServices = activeCategory === 'All' 
      ? SERVICES_DATA 
      : SERVICES_DATA.filter(service => service.category === activeCategory);

    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return {
      currentServices: filteredServices.slice(startIndex, endIndex),
      totalPages
    };
  }, [currentPage, activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const CategoryTabs = () => (
    <div className="category-tabs">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={activeCategory === category ? 'active' : ''}
        >
          {category.replace(' Services', '')}
        </button>
      ))}
    </div>
  );

  const PaginationControls = () => (
    <nav className="pagination-container" aria-label="Services pagination">
      <div className="pagination-dots">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </nav>
  );

  return (
    <>
{/* -- Hero Section -- */}
<section className="hero">
  <div className="hero-image-container">
    <img 
      src={servicepageHero} 
      alt="Decorative background" 
      className="hero-bg"
      role="presentation" // For screen readers (since it's decorative)
    />
    <div className="hero-overlay"></div>
  </div>
  <div className="hero-content">
    <h1 className="hero-title">
      <span>Innovative Legal Services<br /> For Changing World</span>
    
      
    </h1>
    <p className="hero-subtitle">
    Leveraging Modern Legal Expertise and Innovative Approaches to Simplify Complex Challenges and Achieve Your Goals</p>
    
    {/* <div className="hero-cta">
      <button className="cta-button">Get Started</button>
    </div> */}
  </div>
</section>

      <section className="service-page" id="services">
        <div className="container">
          <header className="service-page-header">
            <span className="header-divider"></span>
            <h2>Services</h2>
          </header>

          <CategoryTabs />

          <div className="service-page-grid" role="list">
            {currentServices.map((service) => (
              <article 
                key={service.id}
                className="service-page-item"
                role="listitem"
              >
                <div className="service-page-icon">
                  <img 
                    src={service.icon} 
                    alt={`Icon for ${service.title}`}
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p>{service.text}</p>
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