import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L17 from "../../img/assets/Servicepages/Settlement Agreement Drafting/pexels-a-darmel-7641842.jpg";
import s17 from "../../img/assets/Servicepages/Settlement Agreement Drafting/pexels-pavel-danilyuk-8112172.jpg";
import m17 from "../../img/assets/Servicepages/Settlement Agreement Drafting/pexels-tima-miroshnichenko-7567600.jpg";
import { IoIosArrowDropdown } from 'react-icons/io';




function SettlementAgreement() {

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What disputes can your settlement agreements resolve?",
    answer: "Business conflicts, employment issues, personal disputes, and breach of contract cases."
  },
  {
    question: "How do you ensure the agreement is enforceable?",
    answer: "We align terms with state laws, include dispute-resolution clauses, and clarify obligations."
  },
  {
    question: "Can you negotiate on my behalf?",
    answer: "Yes, we mediate between parties to reach fair terms efficiently."
  },
  {
    question: "What if the other party violates the agreement?",
    answer: "We draft breach clauses and outline legal remedies upfront."
  },
  {
    question: "How long does drafting take?",
    answer: "Typically [X] days, but we expedite urgent cases."
  },
  {
    question: "Do you handle confidential settlements?",
    answer: "Yes, we include NDAs and privacy terms as needed."
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
                  role="presentation" // For screen readers (since it's decorative)
                />
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content">
                <h1 className="hero-title">
                  <span>Clear, Strong, and Legally Sound Agreements</span>
                
                  
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
            <h2 className="service-description-title">Settlement Agreement Drafting</h2>

              <p>We offer expert drafting services for settlement agreements, ensuring that the terms of resolution are clearly defined and legally enforceable. Our team works with you to understand the full scope of the dispute, tailoring each agreement to meet the specific needs of the situation. We aim to resolve conflicts quickly and fairly, providing solutions that protect your interests and avoid lengthy litigation. Whether the issue is business-related, contractual, or personal, we create agreements that offer both legal protection and peace of mind.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L17} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
            <section className="main-point">
              <div className="main-point-container">
                <div className="main-point-content">
                  {/* Left Image Blocks */}
                  <div className="main-point-blocks">
                    <img src={m17} alt="About Us 2" />
                  </div>
      
                  {/* Right Text Section */}
                  <div className="main-point-text">
                    <h2 className="main-point-title">Main points</h2>
                    
                    {/* Accordion 1 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <span>Clear and Enforceable Agreements</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                        <p>We specialize in drafting settlement agreements that are clear, concise, and legally binding, ensuring that all parties involved fully understand their obligations and rights. Our focus is on creating agreements that can withstand legal scrutiny, offering you peace of mind that your resolution is secure.</p>
                      </div>
                    </div>
      
                    {/* Accordion 2 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <span>Customized Solutions for Dispute Resolution</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                        <p>We tailor each settlement agreement to fit the unique circumstances of your dispute, whether it involves business, personal, or contractual issues. By understanding your goals and the specifics of the case, we craft a solution that resolves conflicts efficiently and fairly, helping all parties move forward with minimal disruption.</p>
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
        <img src={s17} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Clear, Binding Terms – Enforceable agreements for disputes.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Customized Solutions – Tailored to business/personal conflicts.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Negotiation Support – Mediation between parties.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Breach Protection – Remedies for violations outlined.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Fast Turnaround – Drafts in [X] days (rush options).</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Confidentiality – NDAs included upon request.</p>
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

export default SettlementAgreement;