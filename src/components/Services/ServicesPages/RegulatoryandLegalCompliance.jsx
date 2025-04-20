import "./ServicesPages.css"
import { useState } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L12 from "../../img/assets/final media/services IMAGE/L  9.png";
import s12 from "../../img/assets/final media/services IMAGE/s 9.png";
import { IoIosArrowDropdown } from 'react-icons/io';

function RegulatoryandLegalCompliance() {
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
    question: ". Why is legal compliance important for businesses?",
    answer: "It helps avoid fines, lawsuits, and reputational harm while ensuring your business operates legally."
  },
  {
    question: "What areas of compliance do you cover?",
    answer: "We cover industry-specific regulations, employment law, data protection, health and safety, and more."
  },
  {
    question: "Can you help with licensing and permits?",
    answer: "Yes. We assist with applications, renewals, and ensuring your operations meet all licensing conditions."
  },
  {
    question: "Do you offer compliance audits?",
    answer: "Yes. We conduct audits to identify gaps, improve policies, and avoid regulatory risks."
  },
  {
    question: "How often should I update my compliance policies?",
    answer: "Policies should be reviewed annually or whenever there’s a major legal or business change."
  },
  {
    question: "Do you provide employee training for compliance?",
    answer: "Yes. We offer workshops and materials to train your staff on legal responsibilities and best practices."
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
                  <span>Stay Compliant, Stay Ahead</span>
                
                  
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
            <h2 className="service-description-title">Regulatory and Legal Compliance</h2>

              <p>Keeping up with regulations is critical for businesses to avoid costly penalties and maintain smooth operations. We help businesses navigate complex regulatory landscapes, ensuring full compliance with local, state, and federal laws. Our team provides proactive advice, helping you understand and implement necessary changes to stay ahead of evolving regulations. Whether you&apos;re dealing with industry-specific rules or general legal requirements, we offer the expertise to keep your business compliant and minimize legal risks.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L12} alt="About Us 2" />
          </div>
          </div>
        
      </section>


{/* -- Main Point Section -- */}
                   <section className="main-point">
                     <div className="main-point-container">
                       <div className="main-point-content">
                         {/* Left Image Blocks */}
                         <div className="main-point-blocks">
                           <img src={L12} alt="About Us 2" />
                         </div>
             
                         {/* Right Text Section */}
                         <div className="main-point-text">
                           <h2 className="main-point-title">Main points</h2>
                           
                           {/* Accordion 1 */}
                           <div className="accordion-item">
                             <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                               <span>Proactive Strategies to Avoid Penalties and Liabilities</span>
                               <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                             </button>
                             <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                               <p>Staying compliant isn’t just about meeting the bare minimum — it’s about proactively managing compliance to avoid potential penalties, lawsuits, or reputational damage. We help businesses implement effective compliance strategies, conduct regular audits, and keep all documentation up-to-date. By addressing issues before they become problems, we help you avoid costly fines and legal setbacks, allowing your business to thrive without unnecessary interruptions.</p>
                             </div>
                           </div>
             
                           {/* Accordion 2 */}
                           <div className="accordion-item">
                             <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                               <span>Expert Navigation of Complex Regulatory Environments</span>
                               <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                             </button>
                             <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                               <p>Regulatory compliance can be a moving target, especially with constantly evolving laws and industry standards. Our team stays on top of the latest regulations to help your business remain compliant. Whether it’s local, national, or international regulations, we provide tailored advice on meeting your legal obligations, reducing risk, and ensuring your operations are legally sound.</p>
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
        <img src={s12} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Industry-specific compliance strategies.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Risk assessments and policy development.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Legal audits and regulatory updates</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Drafting and reviewing internal policies and procedures.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Licensing and permit applications.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Training employees on regulatory compliance.</p>
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

export default RegulatoryandLegalCompliance;