import { useState, useMemo } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from "react-icons/lu";
import PropTypes from 'prop-types';

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
import servicecardbg from '../img/assets/Home/pexels-sora-shimazaki-5668882.png';

const SERVICES_DATA = [
    {
      title: "Regulatory and Legal Compliance",
      description: "At Nubis Legal Consultancy, we offer specialized services to help businesses ensure compliance with relevant laws, regulations, and industry standards. Our goal is to reduce legal risks, minimize penalties, and promote responsible business practices.",
      path: "/services/compliance",
      
      icon: svg1
    },
    {
      title: "Legal Consulting",
      description: "We provide comprehensive legal consulting services tailored to the needs of individuals and businesses, with a focus on delivering customized and precise solutions.",

      path: "/services/legal-consultation",
      icon: svg2
    },
    {
      title: "Company Formation and Registration",
      description: "Our firm provides comprehensive support for establishing and registering new companies, offering tailored solutions that ensure full legal compliance and streamline the setup process. ",
   
      path: "/services/companyformation",
      icon: svg3
    },
    {
      title: "Trademark Registration and Intellectual Property",
      description: "We offer a full range of intellectual property services to help clients secure, protect, and leverage their trademarks, copyrights, and other intellectual assets. ",
      path: "/services/trademark-registration",
      icon: svg4
    },
    {
      title: "Preparation of Legal Documents",
      description: "Our legal document preparation services ensure compliance with all legal requirements with precision and professionalism.",

      path: "/services/document-preparation",
      icon: svg5
    },
    {
      title: "Debt Collection",
      description: "At Nubis Legal Consultancy, we provide comprehensive debt collection services to help our clients recover unpaid debts efficiently and effectively. Our team leverages legal expertise and strategic solutions to ensure the timely recovery of outstanding financial claims.",

      path: "/services/debt-collection",
      icon: svg6
    },
    {
      title: "Litigation and Preparation of Court Documents",

      description: "We provide a wide range of litigation services designed to guide and support our clients through every stage of the legal process. ",
      path: "/services/litigation",
      icon: svg7
    },
    {
      title: "Dispute Resolution",
      description: "At Nubis Legal Consultancy, we specialize in helping clients navigate and resolve disputes through tailored, strategic approaches, ensuring that they achieve the most effective and efficient solutions.",

      path: "/services/dispute-resolution",
      icon: svg8
    },
    {
      title: "Preparation, Review, and Analysis of Contracts",
      description: "Our firm provides a full suite of services for contract preparation, review, and analysis, ensuring transparency and safeguarding our clients' interests. ",
    
      path: "/services/contract-review",
      icon: svg9
    },
    {
      title: "",
      description: "At Nubis Legal Consultancy, we provide a range of notary services to ensure the legal validity and authenticity of various documents. Our expert notaries are committed to delivering reliable and legally binding certifications. ",

      path: "/services/real-estate",
      icon: svg10
    }
  ];

 function ServiceItem({ title, description, path, icon }) {
  const [isHovered, setIsHovered] = useState(false);
   return (
      <div
        className="service-item"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ backgroundImage: `url(${servicecardbg})` }}
      >
        <div className="service-image-overlay"></div>
        <div className="service-content">
          <div className="service-icon">
            <img src={icon} alt={title} className="service-icon-img" />
          </div>
          
          <div className="service-text">
            <h3>{title}</h3>
            <div className={`service-details ${isHovered ? 'visible' : ''}`}>
              <p>{description}</p>
              
            </div>
          </div>
  
          <Link className="services-section-link" to={path}>
            <LuArrowUpRight className={`arrow-icon ${isHovered ? 'hovered' : ''}`} />
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
        <div className="container">
          <header className="service-page-header">
            <span className="header-divider"></span>
            <h2>Services</h2>
          </header>

          <div className="service-page-grid" role="list">
            {currentServices.map((service) => (
              <ServiceItem
                key={service.title}
                title={service.title}
                description={service.description}
                path={service.path}
                icon={service.icon}
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