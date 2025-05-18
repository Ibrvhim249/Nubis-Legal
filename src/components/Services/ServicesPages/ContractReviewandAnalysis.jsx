import "./ServicesPages.css"
import { useState, useEffect, useRef } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L9 from "../../img/assets/final media/services IMAGE/L  9.png";
import s9 from "../../img/assets/final media/services IMAGE/s 9.png";
import svg1 from "../../img/assets/Servicepages/contract/Group 6.svg";
import svg2 from "../../img/assets/Servicepages/contract/Subtract (3).svg";
import svg3 from "../../img/assets/Servicepages/contract/Subtract (2).svg";
import svg4 from "../../img/assets/Servicepages/contract/fa6-solid_file-contract.svg";
import svg5 from "../../img/assets/Servicepages/contract/Subtract (1).svg";
import svg6 from "../../img/assets/Servicepages/contract/Exclude.svg";
import svg7 from "../../img/assets/Servicepages/contract/Subtract.svg";

 const mainPoints = [
    {
      title: "Commercial Contracts",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "Drafting and reviewing contracts for business dealings, including sales agreements, supplier contracts, distribution agreements, and service agreements. We focus on clear, enforceable terms that address obligations, payment terms, and liabilities to protect all parties."
    },
    {
      title: "Investment Agreements",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "Specializing in the preparation of investment contracts, including partnership agreements, joint ventures, shareholder agreements, and other arrangements that facilitate investment. Our services ensure terms are transparent, secure, and tailored to meet financial goals."
    },
       {
      title: "Lease Agreements",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "Our team drafts and reviews lease contracts for residential, commercial, and industrial properties, ensuring that terms are legally sound and clear. We also handle specialized leasing agreements such as usufruct contracts."
        },
    {
      title: "Employment Contracts",
      icon: <img src={svg4} alt="svg2" className="point-icon" />,
      description: "Preparation and review of employment agreements, ensuring compliance with labor laws and clarity on terms such as roles, responsibilities, compensation, and termination clauses to protect employer-employee relationships."
    },
    {
      title: "Partnership and Joint Venture Agreements",
      icon: <img src={svg5} alt="svg2" className="point-icon" />,
      description: "Drafting and reviewing agreements to establish or formalize partnerships, joint ventures, and other cooperative arrangements. These contracts address profit-sharing, responsibilities, and dispute resolution to support successful collaborations."
    },
    {
      title: "Non-Disclosure Agreements (NDAs)",
      icon: <img src={svg6} alt="svg2" className="point-icon" />,
      description: "We prepare NDAs that protect confidential information in business relationships, ensuring clear language around obligations and consequences of breach."
    },
     
    {
      title: "Commission and Brokerage Contracts",
      icon: <img src={svg7} alt="svg2" className="point-icon" />,
      description: "Drafting and reviewing contracts that govern commission-based relationships, including those for sales agents, brokers, and intermediaries. These agreements clarify expectations, payment terms, and performance requirements."
    },
    {
      title: "Contract Drafting",
      icon: <img src={svg7} alt="svg2" className="point-icon" />,
      description: ": Our team ensures that all terms are precise and comprehensive, creating documents that prevent ambiguities and secure the interests of all parties involved."
    },
    {
      title: "Contract Review",
      icon: <img src={svg7} alt="svg2" className="point-icon" />,
      description: "A thorough examination of contracts to enhance clarity, mitigate potential risks, and ensure all obligations are transparent and in compliance with legal requirements."
    },
    {
      title: "Contract Analysis",
      icon: <img src={svg7} alt="svg2" className="point-icon" />,
      description: "In-depth legal and financial analysis of contractual terms to empower clients with the information they need for strategic decision-making. This includes examining potential liabilities, regulatory implications, and financial impacts."
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
              src={L9}
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
function ContractReviewandAnalysis() {



// ===============================================
const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What’s included in your contract review service?",
    answer: "We examine the terms, identify risks, suggest improvements, and provide a detailed report with recommendations."
  },
  {
    question: "How does your review help me?",
    answer: "It protects you from hidden risks, unfavorable clauses, and ensures that your interests are clearly represented."
  },
  {
    question: "What types of contracts do you analyze?",
    answer: "We analyze business agreements, leases, employment contracts, partnership agreements, and more."
  },
  {
    question: "Can you review contracts I’ve already signed?",
    answer: "Yes. Reviewing signed contracts can help prepare you for possible disputes or future renegotiations."
  },
  {
    question: "Do you provide written feedback or a meeting summary?",
    answer: "Yes. You’ll receive a written report outlining concerns, suggested changes, and follow-up steps."
  },
  {
    question: "How quickly can I get a contract review?",
    answer: "Most reviews are completed within 2–3 business days. Urgent reviews are available upon request."
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
                      <span>Spot Risks Before They Become Problems</span>
                    
                      
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
             <h2 className="service-description-title">Preparation, Review, and Analysis of Contracts</h2>
 
               <p>Our firm offers a full suite of services dedicated to the preparation, review, and analysis of contracts, designed to ensure transparency and robust protection of our clients’ interests. We understand that contracts are the foundation of successful business relationships and personal agreements, so our meticulous approach helps you avoid potential pitfalls and costly disputes.</p>
             </div>
           
           <div className="service-description-blocks">
             <img src={L9} alt="About Us 2" />
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
            <img src={s9} alt="About Us 2" />
          </div>
    
          {/* Right Text Section */}
          <div className="service-data-text">
            {/* Item 1 */}
            <div className="service-data-item">
              <span className="service-number">1</span>
              <p>Identification of potential risks and loopholes.</p>
            </div>
    
            {/* Item 2 */}
            <div className="service-data-item">
              <span className="service-number">2</span>
              <p>Clear, actionable recommendations.</p>
            </div>
    
            {/* Item 3 */}
            <div className="service-data-item">
              <span className="service-number">3</span>
              <p>Confidence in your contractual agreements.</p>
            </div>
    
            {/* Item 4 */}
            <div className="service-data-item">
              <span className="service-number">4</span>
              <p>Detailed review of the contract.</p>
            </div>
    
            {/* Item 5 */}
            <div className="service-data-item">
              <span className="service-number">5</span>
              <p>Identification of risks and areas for improvement.</p>
            </div>
    
            {/* Item 6 */}
            <div className="service-data-item">
              <span className="service-number">6</span>
              <p>Provision of a comprehensive report and recommendations.</p>
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

export default ContractReviewandAnalysis;