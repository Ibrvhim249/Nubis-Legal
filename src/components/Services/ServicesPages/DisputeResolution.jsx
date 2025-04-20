import "./ServicesPages.css"
import { useState } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L8 from "../../img/assets/final media/services IMAGE/L  8.png";
import s8 from "../../img/assets/final media/services IMAGE/s 8.png";
import { IoIosArrowDropdown } from 'react-icons/io';


function DisputeResolution() {

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

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
            <h2 className="service-description-title">DisputeResolution</h2>

              <p>From mediation to arbitration, we provide efficient and cost-effective dispute resolution services tailored to your needs. Our team works to resolve conflicts swiftly while preserving relationships, whether for individuals or businesses. We focus on finding mutually beneficial solutions that avoid lengthy litigation, saving you time and money. With our expert guidance, you’ll navigate disputes smoothly and achieve positive outcomes. Let us help you resolve conflicts in a way that maintains trust and minimizes disruption.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L8} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
                         <section className="main-point">
                           <div className="main-point-container">
                             <div className="main-point-content">
                               {/* Left Image Blocks */}
                               <div className="main-point-blocks">
                                 <img src={L8} alt="About Us 2" />
                               </div>
                   
                               {/* Right Text Section */}
                               <div className="main-point-text">
                                 <h2 className="main-point-title">Main points</h2>
                                 
                                 {/* Accordion 1 */}
                                 <div className="accordion-item">
                                   <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                                     <span>Effective Conflict Resolution Without Going to Court</span>
                                     <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                                   </button>
                                   <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                                     <p>Not every dispute needs to end in litigation. We specialize in alternative dispute resolution methods like mediation and arbitration that save you time, money, and stress. Our approach focuses on understanding both sides, facilitating productive dialogue, and finding fair solutions that protect your interests while avoiding the delays and costs of courtroom battles.</p>
                                   </div>
                                 </div>
                   
                                 {/* Accordion 2 */}
                                 <div className="accordion-item">
                                   <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                                     <span>Preserving Business and Personal Relationships</span>
                                     <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                                   </button>
                                   <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                                     <p>Disputes don’t have to damage valuable relationships. Whether it’s a business disagreement, partnership conflict, or personal matter, we aim to resolve issues with diplomacy and professionalism. Our goal is to help you reach an agreement that works — while maintaining respect, communication, and trust between the parties involved.</p>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </section>

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