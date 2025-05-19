import "./ServicesPages.css"
import { useState, useEffect, useRef } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L8 from "../../img/assets/final media/services IMAGE/L  8.png";
import s8 from "../../img/assets/final media/services IMAGE/s 8.png";
import svg1 from "../../img/assets/Servicepages/dispute/Group 46.svg";
import svg2 from "../../img/assets/Servicepages/dispute/Group 48.svg";
import svg3 from "../../img/assets/Servicepages/dispute/Group 50.svg";
import svg4 from "../../img/assets/Servicepages/dispute/Group 52.svg";
import svg5 from "../../img/assets/Servicepages/dispute/Group 54.svg";
import svg6 from "../../img/assets/Servicepages/dispute/Group 55.svg";
import svg7 from "../../img/assets/Servicepages/dispute/Group 57.svg";
import svg8 from "../../img/assets/Servicepages/dispute/Group 58.svg";


const mainPoints = [
    {
      title: "Negotiation Services",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "We provide expert negotiation support, assisting parties in reaching mutually acceptable agreements. Our approach aims to ensure that all stakeholders' interests are considered, helping to achieve swift, fair, and lasting solutions."
    },
    {
      title: "Mediation Services",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "We offer mediation as a neutral, third-party service to facilitate dispute resolution. Our mediators help reduce tensions, fostering open communication between parties. This process is designed to be a cost-effective alternative to litigation, enabling parties to settle disagreements amicably and avoid lengthy legal procedures."
    },
       {
      title: "Arbitration Representation",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "We represent clients before arbitration panels, whether in domestic or international proceedings. Our team has extensive experience in handling arbitration cases, ensuring that our clients’ interests are well-protected throughout the process. We provide guidance on the arbitration procedure, prepare necessary legal documents, and advocate on behalf of clients to ensure the best possible outcomes."
        },
    {
      title: "Legal Strategy and Case Planning",
      icon: <img src={svg4} alt="svg2" className="point-icon" />,
      description: "We develop precise legal strategies for dispute resolution, starting from case inception through to final judgment. We assist clients in establishing and executing clear, step-by-step plans for managing the litigation process, ensuring the effective presentation of their case at every stage. We monitor the progress of cases and advise clients on how best to adjust their strategy based on the developments in the dispute."
    },
    {
      title: "Representation in Arbitration",
      icon: <img src={svg5} alt="svg2" className="point-icon" />,
      description: "Our team handles full representation of clients in front of arbitration tribunals, including the preparation of submissions, statements, and evidence. We work with experts in various sectors to ensure a comprehensive presentation of our clients' case."
    },
    {
      title: "Litigation and Arbitration Support",
      icon: <img src={svg6} alt="svg2" className="point-icon" />,
      description: "We provide litigation support and guidance throughout the entire process, ensuring that our clients understand the steps and stages of their dispute, whether in court or arbitration. We help clients develop effective strategies for both litigation and alternative dispute resolution (ADR) mechanisms, such as arbitration and mediation."
    },
     
    {
      title: "Settlement Negotiations",
      icon: <img src={svg7} alt="svg2" className="point-icon" />,
      description: "In addition to traditional negotiation, we facilitate settlement negotiations aimed at avoiding court proceedings or final arbitration awards. Our team works with clients to ensure that any settlement reached is comprehensive, protecting their rights and interests."
    },
    {
      title: "Enforcement of Arbitration Awards",
      icon: <img src={svg8} alt="svg2" className="point-icon" />,
      description: "We assist in the enforcement of arbitral awards in jurisdictions where required, ensuring that clients' rights are upheld and any financial or other obligations are enforced in compliance with international legal frameworks."
    },
    {
      title: "Drafting and Review of Settlement Agreements",
      icon: <img src={svg7} alt="svg2" className="point-icon" />,
      description: "We provide expert services in drafting and reviewing settlement agreements, ensuring that they are legally binding and protect our clients’ interests. These agreements can resolve disputes without the need for lengthy litigation or arbitration, ensuring an efficient resolution."
    },
    
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
              src={L8}
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


function DisputeResolution() {



// ===============================================
const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What types of disputes can you help resolve?",
    answer: "We handle business, personal, property, and employment disputes through mediation or arbitration."
  },
  {
    question: "How is dispute resolution different from litigation?",
    answer: "It’s typically faster, less expensive, and more collaborative, helping preserve relationships."
  },
  {
    question: "What’s the first step in starting dispute resolution?",
    answer: "We begin with a consultation to understand the issue and recommend the best resolution method."
  },
  {
    question: "Who leads the mediation or arbitration process?",
    answer: "A neutral third-party facilitator or arbitrator, often a trained legal professional, manages the process."
  },
  {
    question: "Is the outcome legally binding?",
    answer: "Mediation outcomes may be made binding by agreement; arbitration outcomes are usually binding by default."
  },
  {
    question: "What if the other party refuses to cooperate?",
    answer: "We’ll assess the situation and recommend whether to escalate the matter to formal litigation if necessary."
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
                  <span>Resolving Conflicts While Protecting Interests</span>
                
                  
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
            <h2 className="service-description-title">Dispute Resolution</h2>

              <p>At Nubis Legal Consultancy, we specialize in helping clients navigate and resolve disputes through tailored, strategic approaches designed to achieve the most effective and efficient solutions. Recognizing that litigation can be time-consuming and costly, we prioritize alternative dispute resolution methods such as negotiation, mediation, and arbitration to help preserve relationships and reduce conflict.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L8} alt="About Us 2" />
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
        <img src={s8} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Expert Legal Consultation: Our team provides comprehensive legal advice tailored to your specific business needs.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Contract Management: We draft, review, and negotiate contracts to protect your organization&apos;s interests.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Dispute Resolution: Professional mediation and litigation services to resolve commercial conflicts efficiently.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Regulatory Compliance: Ensure your operations meet all legal requirements with our compliance audits.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Corporate Governance: Strategic guidance for board management and shareholder relations.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>International Law: Cross-border legal support for global business operations and expansions.</p>
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

export default DisputeResolution;