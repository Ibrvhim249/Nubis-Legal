import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L1 from "../../img/assets/final media/services IMAGE/L  1.png";
import s1 from "../../img/assets/final media/services IMAGE/s 1.png";
import { IoIosArrowDropdown } from 'react-icons/io';




function ContractDraftingandReview() {

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
    question: "What types of contracts do you draft?",
    answer: "NDAs, employment agreements, commercial contracts, and more—all tailored to your industry and goals."
  },
  {
    question: "How do you ensure my contract is legally enforceable?",
    answer: "We align terms with current laws, eliminate ambiguities, and include dispute-resolution clauses."
  },
  {
    question: "Can you assist with contract negotiations?",
    answer: "Yes, we advise on terms and represent your interests during negotiations."
  },
  {
    question: "What’s your turnaround time for drafting?",
    answer: "Typically [X] business days (rush options available)."
  },
  {
    question: "Do you review contracts from other parties?",
    answer: "Absolutely—we identify risks and suggest edits to protect you."
  },
  {
    question: "What if a contract dispute arises later?",
    answer: "We provide enforcement support or help renegotiate terms."
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
            <h2 className="service-description-title">Contract Drafting and Review</h2>

              <p>We draft and review contracts that protect your interests, ensure legal compliance, and minimize risks. Whether it’s an NDA, employment agreement, or complex commercial contract, each document is tailored to fit your goals and industry. Our team ensures your contracts are clear, enforceable, and structured to prevent future disputes. We also offer support through negotiation and finalization, so you can sign with confidence.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L1} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
            <section className="main-point">
              <div className="main-point-container">
                <div className="main-point-content">
                  {/* Left Image Blocks */}
                  <div className="main-point-blocks">
                    <img src={L1} alt="About Us 2" />
                  </div>
      
                  {/* Right Text Section */}
                  <div className="main-point-text">
                    <h2 className="main-point-title">Main points</h2>
                    
                    {/* Accordion 1 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <span>Expert Contract Drafting and Review</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                        <p>Our team brings legal precision and business insight to every contract we handle. We don’t just write legal jargon — we create contracts that are clear, actionable, and aligned with your business goals. By anticipating potential legal pitfalls and addressing them proactively, we help you avoid costly disputes and confusion down the line. Every clause is tailored to your specific needs, ensuring your agreements are not just legally sound, but also practical and easy to understand.</p>
                      </div>
                    </div>
      
                    {/* Accordion 2 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <span>Comprehensive Legal Coverage</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                        <p>From confidentiality agreements (NDAs) that protect your proprietary information to employment agreements that define clear terms of engagement, we cover a broad spectrum of business contracts. We also handle commercial agreements, vendor contracts, partnership arrangements, and more. Our thorough review process ensures each contract is compliant with current laws and free of loopholes or risky clauses. We focus on enforceability and risk management, so you can move forward with confidence in every business transaction.</p>
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
        <img src={s1} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Drafting contracts tailored to your business needs.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Reviewing existing contracts for legal risks.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Negotiation support to protect your interests.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Initial consultation to understand your needs.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Drafting or reviewing the contract with attention to detail.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Finalizing the document and providing actionable advice.</p>
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

export default ContractDraftingandReview;