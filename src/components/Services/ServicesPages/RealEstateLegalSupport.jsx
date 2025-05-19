import "./ServicesPages.css"
import { useState, useEffect, useRef } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L10 from "../../img/assets/final media/services IMAGE/L  10.png";
import s10 from "../../img/assets/final media/services IMAGE/s 10.png";

import svg1 from "../../img/assets/Servicepages/notary/Group 90.svg";
import svg2 from "../../img/assets/Servicepages/notary/Group 91.svg";
import svg3 from "../../img/assets/Servicepages/notary/Group 92.svg";
import svg4 from "../../img/assets/Servicepages/notary/Exclude.svg";

import svg6 from "../../img/assets/Servicepages/notary/Group 93.svg";
import svg7 from "../../img/assets/Servicepages/notary/Group 94.svg";


const mainPoints = [
    {
      title: "Power of Attorney (POA) Attestation",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "WWe assist clients in the drafting and attestation of Power of Attorney documents, ensuring they are legally recognized for various purposes such as business representation, property transactions, or personal matters. We ensure that the POA complies with local laws and is duly notarized for validity."
    },
    {
      title: "Legal Notices",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Our team prepares and notarizes legal notices for clients, which are often required in formal communications with third parties or in cases where a legal obligation must be formally asserted. These notices are crafted to meet legal standards and ensure that the recipient is properly notified of their rights or obligations."
    },
       {
      title: "Declarations",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "We provide notary services for the attestation of various types of declarations, including sworn statements, affidavits, and self-certifications. These declarations are prepared and notarized to give them legal weight in various proceedings, such as court cases, administrative matters, or contractual obligations."
        },
    {
      title: "Debit Declarations",
      icon: <img src={svg4} alt="svg2" className="point-icon" />,
      description: "We assist clients with notarizing debit declarations, which are often required in financial matters or debt recovery processes. These documents are prepared with the necessary legal formalities to ensure that any claims or acknowledgments regarding financial obligations are properly authenticated."
    },
    {
      title: "Venture Agreements Notarization",
      icon: <img src={svg7} alt="svg2" className="point-icon" />,
      description: "For entrepreneurs and businesses, we offer notary services for the attestation of venture agreements, including joint ventures, partnerships, and other collaborative business arrangements. This ensures that the agreements are legally binding and provide protection for all parties involved."
    },
    {
      title: "Additional Notary Services",
      icon: <img src={svg6} alt="svg2" className="point-icon" />,
      description: "We provide notary services for various other legal documents as required by the client, such as contracts, acknowledgments, certifications, and other documents that need formal notarization to ensure authenticity and compliance with legal standards. Whether it's for personal or business purposes, our team ensures that all documents are prepared and notarized in accordance with applicable laws and regulations."
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
              src={L10}
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


function RealEstateLegalSupport() {


  // ===============================================
const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What real estate matters do you handle?",
    answer: "We handle purchases, leases, property transfers, title verification, and real estate disputes."
  },
  {
    question: "Do you represent buyers, sellers, and landlords?",
    answer: "Yes. Our legal support is available for all parties involved in a property transaction or dispute."
  },
  {
    question: "Can you help review and draft lease agreements?",
    answer: "Absolutely. We ensure that lease terms are fair, clear, and legally sound."
  },
  {
    question: "What is involved in a property title review?",
    answer: "We check ownership, legal claims, liens, encumbrances, and confirm that the title is clear and transferable."
  },
  {
    question: "Do you handle disputes over property boundaries or usage?",
    answer: "Yes. We offer mediation or litigation services to resolve property-related conflicts."
  },
  {
    question: "How can I avoid legal issues in real estate transactions?",
    answer: "By involving us early to review documents, verify ownership, and ensure full compliance with real estate laws."
  },
  // Add more FAQ items as needed
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
                  role="presentation" // For screen readers (since it's decorative)
                />
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content">
                <h1 className="hero-title">
                  <span>Your Partner in Real Estate Transactions</span>
                
                  
                </h1>
                <p className="hero-subtitle">
                Leveraging Modern Legal Expertise and Innovative Approaches to Simplify Complex Challenges and Achieve Your Goals
                </p>
                {/* <div className="hero-cta">
                  <button className="cta-button">Get Started</button>
                </div> */}
              </div>
            </section>

{/* -- service-description Section -- */}
      <section className="service-description">
        <div className="service-description-container">
          
            <div className="service-description-text">
            <h2 className="service-description-title">Notary Services</h2>

              <p>At Nubis Legal Consultancy, we provide a comprehensive range of notary services to ensure the legal validity and authenticity of various documents. Our expert notaries are committed to delivering reliable and legally binding certifications with the utmost professionalism and integrity.Whether you need affidavits, powers of attorney, contracts, or other important documents notarized, we ensure all procedures comply with applicable laws and regulations.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L10} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
      <MainPointsSection />

      {/* -- Service Data Section -- */}

      <section className="service-data" id="service-data">
  <div className="service-data-container">
    <div className="service-data-content">
      {/* Left Image Block */}
      <div className="service-data-blocks">
        <img src={s10} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Expert guidance on real estate transactions.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Protection against legal pitfalls.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Peace of mind throughout the process.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Initial consultation to understand your needs.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Review of property documents and agreements.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Negotiation and finalization of terms.</p>
        </div>
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

export default RealEstateLegalSupport;