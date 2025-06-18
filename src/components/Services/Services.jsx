import { useState, useMemo } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { LuChevronRight } from "react-icons/lu";
import PropTypes from 'prop-types';

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  bgImage: PropTypes.string,
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

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

// all background images 
import bg1 from '../img/assets/Service/Regulatory and Legal Compliance.jpg';
import bg2 from '../img/assets/Service/Legal Consulting.jpg';
import bg3 from '../img/assets/Service/Company Formation and Registration.jpg';
import bg4 from '../img/assets/Service/Trademark Registration and Intellectual Property.jpg';
import bg5 from '../img/assets/Service/Preparation of Legal Documents.jpg';
import bg6 from '../img/assets/Service/Debt Collection.jpg';
import bg7 from '../img/assets/Service/Litigation and Preparation of Court Documents.jpg';
import bg8 from '../img/assets/Service/Dispute Resolution.jpg';
import bg9 from '../img/assets/Service/Preparation, Review, and Analysis of Contracts.jpg';
import bg10 from '../img/assets/Service/Notary Services.jpg';



const SERVICES_DATA = [
  {
    title: "Legal Consulting",
    bgImage: bg2,
    path: "/services/legal-consultation",
    icon: svg2
  },
  {
    title: "Preparation, Review, and Analysis of Contracts",
    bgImage: bg9,
    path: "/services/contract-review",
    icon: svg9
  },
  {
    title: "Preparation of Legal Documents",
    bgImage: bg5,
    path: "/services/document-preparation",
    icon: svg5
  },
  {
    title: "Company Formation and Registration",
    bgImage: bg3,
    path: "/services/companyformation",
    icon: svg3
  },
  {
  title: "Trademark Registration and Intellectual Property",
  path: "/services/trademark-registration",
  bgImage: bg4,
  icon: svg4
},
{
  title: "Litigation and Preparation of Court Documents",
  bgImage: bg7,
  path: "/services/litigation",
  icon: svg7
},
{
  title: "Dispute Resolution",
  bgImage: bg8,
  path: "/services/dispute-resolution",
  icon: svg8
},
{
  title: "Debt Collection",
  bgImage: bg6,
  path: "/services/debt-collection",
  icon: svg6
},
  {
    title: "Regulatory and Legal Compliance",
      path: "/services/compliance",
      bgImage: bg1,
      icon: svg1
    },
    
    {
      title: "Notary Services",
      bgImage: bg10,
      path: "/services/real-estate",
      icon: svg10
    }
  ];

function ServiceItem({ title, path, icon, bgImage }) {
  return (
    <div className="service-item-card">
      <div className="service-image-container">
        {/* Use the passed bgImage */}
        <img 
          src={bgImage} 
          alt={`${title} background`} 
          className="service-image"
        />
      </div>
      
      <div className="service-content">
        <div className="service-icon-title">
          <div className="service-icon-circle">
            <img src={icon} alt={title} className="pservice-icon" />
          </div>
          <h3 className="service-title">{title}</h3>
        </div>
        
        <Link to={path} className="service-arrow-circle">
          <LuChevronRight className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
}


function Services() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const { currentServices, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return {
      currentServices: SERVICES_DATA.slice(startIndex, endIndex),
      totalPages: Math.ceil(SERVICES_DATA.length / itemsPerPage)
    };
  }, [currentPage]);

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
      <div className="sscontainer">
        <header className="service-page-header">
          <span className="header-divider"></span>
          <h2>Services</h2>
        </header>

        <div className="service-page-grid" role="list">
          {currentServices.map((service) => (
            <ServiceItem
              key={service.title}
              title={service.title}
              path={service.path}
              icon={service.icon}
              bgImage={service.bgImage}  // Pass background image
            />
          ))}
        </div>

        <PaginationControls />
      </div>
    </section>
    </>
  );
}

export default Services;