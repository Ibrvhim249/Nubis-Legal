import "./ServicesPages.css";
import { useState, useRef, useEffect } from 'react';
import svg1 from '../../img/assets/Servicepages/compformation/Vector.svg';
import svg2 from '../../img/assets/Servicepages/compformation/Exclude.svg';



// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L3 from "../../img/assets/final media/services IMAGE/L  3.png";
import s3 from "../../img/assets/final media/services IMAGE/s 3.png";

  const mainPoints = [
    {
      title: "Free Zone Company Formation",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "Assisting clients with establishing companies in free zones, offering specialized legal support to ensure adherence to all regulations specific to each free zone, including licensing, permits, and operational requirements."
    },
    {
      title: "Mainland Company Formation",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Managing the entire registration and licensing process for companies outside of free zones, simplifying and overseeing all aspects of compliance and procedural requirements. Our team ensures a smooth setup process from the initial documentation to final registration, allowing clients to focus on their business strategy."
    },
       {
      title: "Drafting and Modifying Founding Documents",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
        },
    {
      title: "Founding Contracts and Amendments",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Drafting and amending founding contracts, including the Articles of Association, Memoranda, and appendices, to comply with current regulations."
    },
    {
      title: "Share Transfer Agreements",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "Preparing all necessary documentation for share transfers, ensuring compliance and legal clarity in ownership changes."
    },
    {
      title: "Merger and Acquisition Agreements",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Drafting and overseeing agreements related to mergers and acquisitions, providing clients with legally sound documentation for complex corporate restructuring and acquisition transactions."
    },
     
    {
      title: "Corporate Reorganization",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "Assisting with modifications of founding documents to address structural changes in the company, including ownership changes, shareholder amendments, and reorganization processes. This includes drafting relevant agreements for smooth transitions and adherence to legal standards."
    }
  ];

function MainPointsSection() {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const calculateMaxScroll = () => {
      setMaxScroll(scrollContainer.scrollHeight - scrollContainer.clientHeight);
    };

    const handleScroll = () => {
      setScrollPosition(scrollContainer.scrollTop);
    };

    calculateMaxScroll();
    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateMaxScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateMaxScroll);
    };
  }, []);

  const thumbPosition = maxScroll > 0 
    ? (scrollPosition / maxScroll) * (100 - (16 * 100) / 300)
    : 0;

  return (
  <section className="main-points-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="m-image-container">
            <img
              src={L3}
              alt="Corporate services"
              className="building-image"
            />
          </div>

          <div className="text-content">
            <h2>Main Points</h2>
            
            <div className="scroll-wrapper">
              <div ref={scrollContainerRef} className="scroll-container">
                {mainPoints.map((point, index) => (
                  <div key={index} className="point-item">
                    <div className="point-header">
                      {point.icon}
                      <h3 className="point-title">{point.title}</h3>
                    </div>
                    <p className="point-description">{point.description}</p>
                  </div>
                ))}
              </div>
              <div className="fade-effect" />
            </div>


            <div className="custom-scrollbar">
              <div className="scroll-track">
                <div 
                  className="scroll-thumb"
                  style={{ top: `${thumbPosition}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyFormationandRegistration() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What business structures do you recommend?",
      answer: "LLCs, corporations, sole proprietorships—based on liability, tax, and growth needs."
    },
    {
      question: "How long does registration take?",
      answer: "[X] days/weeks, depending on jurisdiction and entity type."
    },
    {
      question: "What documents are required?",
      answer: "Articles of Incorporation/Organization, EIN, bylaws (we handle filings)."
    },
    {
      question: "Can you register my business in multiple states?",
      answer: "Yes, we ensure compliance with interstate requirements."
    },
    {
      question: "Do you provide registered agent services?",
      answer: "Yes, we can act as your agent for legal notices."
    },
    {
      question: "What ongoing compliance is needed?",
      answer: "Annual reports, tax filings, and license renewals (we offer reminders/services)."
    },
  ];

  return (
    <>
      {/* -- Hero Section -- */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src={servicepagesHero} 
            alt="Decorative background" 
            className="hero-bg"
            role="presentation"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Start Your Business the Right Way</span>
          </h1>
          <p className="hero-subtitle">
            Leveraging Modern Legal Expertise and Innovative Approaches to Simplify Complex Challenges and Achieve Your Goals
          </p>
        </div>
      </section>

      {/* -- service-description Section -- */}
      <section className="service-description">
        <div className="service-description-container">
          <div className="service-description-text">
            <h2 className="service-description-title">Company Formation and Registration</h2>
            <p>Our firm provides comprehensive support for establishing and registering new companies, offering tailored solutions designed to ensure full legal compliance while streamlining the setup process. Whether you’re starting a small business, forming a partnership, or launching a corporation, we guide you through every step with expert knowledge and personalized service..</p>
          </div>
          <div className="service-description-blocks">
            <img src={L3} alt="Business formation" />
          </div>
        </div>
      </section>

      {/* -- Main Point Section -- */}
      <MainPointsSection />

      {/* -- service-data Section -- */}
      <section className="service-data" id="service-data">
        <div className="service-data-container">
          <div className="service-data-content">
            <div className="service-data-blocks">
              <img src={s3} alt="About Us 2" />
            </div>
            <div className="service-data-text">
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <div key={number} className="service-data-item">
                  <span className="service-number">{number}</span>
                  <p>
                    {[
                      "Company registration & legal documentation.",
                      "Tax and regulatory compliance setup.",
                      "Faster, hassle-free registration process.",
                      "Initial assessment of your business needs.",
                      "Preparation and submission of registration documents.",
                      "Ongoing support for compliance and licensing."
                    ][number - 1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="faqs">
        <div className="faq-container">
          <h1 className="faq-header">Your Question Answered</h1>
          <h2 className="faq-subheader">Explore Our FAQ’s For Our Services<br />To learn more</h2>
          {faqItems.map((item, index) => (
            <div 
              className={`faq-item ${activeFaq === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span>
                  <span className="faq-number">{String(index + 1).padStart(2, 'Q')}</span>
                  {item.question}
                </span>
                <svg className="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="faq-content">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CompanyFormationandRegistration;