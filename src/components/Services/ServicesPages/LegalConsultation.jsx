import "./ServicesPages.css"
import { useState, useEffect, useRef } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L2 from "../../img/assets/final media/services IMAGE/L  2.png";
import s2 from "../../img/assets/final media/services IMAGE/s 2.png";
import svg1 from "../../img/assets/Servicepages/legal consltation/Group 5.svg";
import svg2 from "../../img/assets/Servicepages/legal consltation/Vector.svg";
import svg3 from "../../img/assets/Servicepages/legal consltation/Subtract.svg";
import svg4 from "../../img/assets/Servicepages/legal consltation/Subtract (1).svg";



const mainPoints = [
    {
      title: "Business Consulting ",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "We offer accurate legal guidance to ensure that companies comply with local and international regulations, enhancing their competitive position while minimizing potential legal risks. We help our clients develop effective legal strategies that support growth and expansion."
    },
    {
      title: "Consulting for Individuals",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "We assist individuals in various legal matters, including family law, real estate, and personal disputes. Our team provides comprehensive support to secure their rights and interests through reliable legal advice."
    },
       {
      title: "Comprehensive Legal Consulting",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "Covering all civil, commercial, real estate cases, personal status issues, and trademarks. We aim to deliver extensive support aligned with our clients' needs, empowering them to make informed decisions."
        },
    {
      title: "Compliance Consulting",
      icon: <img src={svg4} alt="svg2" className="point-icon" />,
      description: "We assist companies in understanding and implementing regulatory compliance requirements, contributing to reduced legal risks and ensuring legal security."
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
              src={L2}
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


function LegalConsultation() {



// ===============================================
  const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What topics can I discuss in a consultation?",
    answer: "Business law, disputes, compliance, personal legal matters, and strategy planning."
  },
  {
    question: "How long is a typical session?",
    answer: "Sessions are [X] minutes/hourly, with flexible scheduling."
  },
  {
    question: "Do you offer ongoing advisory support?",
    answer: "Yes, we provide follow-ups and action plans."
  },
  {
    question: "Can you help me understand a legal notice I received?",
    answer: "Yes, we’ll explain implications and next steps."
  },
  {
    question: "Are consultations confidential?",
    answer: "100%—attorney-client privilege applies."
  },
  {
    question: "How do I prepare for a consultation?",
    answer: "Bring relevant documents (contracts, notices, etc.) and a list of questions."
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
                  <span>Expert Legal Advice, Personalized for You</span>
                
                  
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
            <h2 className="service-description-title">Legal Consultation</h2>

              <p>We provide comprehensive legal consulting services tailored to the unique needs of both individuals and businesses. Our approach focuses on delivering customized, precise solutions that address your specific legal challenges and objectives. Whether you require guidance on regulatory compliance, risk management, contract negotiation, or strategic legal planning, our experienced consultants work closely with you to understand your goals and provide actionable advice.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L2} alt="About Us 2" />
          </div>
          </div>
        
      </section>

      {/* -- Main Point Section -- */}
      <MainPointsSection />

      <section className="service-data" id="service-data">
  <div className="service-data-container">
    <div className="service-data-content">
      {/* Left Image Block */}
      <div className="service-data-blocks">
        <img src={s2} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>One-on-one consultations with experienced lawyers.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Business and personal legal advice.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Step-by-step legal guidance on complex matters.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Schedule a consultation at your convenience.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Discuss your legal issue with our experts.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Receive practical, actionable advice</p>
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

export default LegalConsultation;