import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L19 from "../../img/assets/Servicepages/Property Due Diligence/1.png";
import s19 from "../../img/assets/Servicepages/Property Due Diligence/6.png";
import m19 from "../../img/assets/Servicepages/Property Due Diligence/7.png";
import { IoIosArrowDropdown } from 'react-icons/io';




function PropertyDueDiligence() {

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
    question: "Why is due diligence important before buying property?",
    answer: "It uncovers hidden liens, zoning issues, or legal disputes that could cost you later."
  },
  {
    question: "How do you verify property ownership?",
    answer: "We review title deeds, court records, and historical transfers for clarity."
  },
  {
    question: "What zoning issues should I worry about?",
    answer: "We check if the property’s use (e.g., commercial/residential) complies with local laws."
  },
  {
    question: "Can due diligence uncover environmental risks?",
    answer: "Yes, we identify hazards like soil contamination or flood zones."
  },
  {
    question: "How long does the process take?",
    answer: "Typically [3] weeks, depending on record complexity."
  },
  {
    question: "What if issues are found?",
    answer: "We advise on solutions—renegotiating price, requesting seller fixes, or walking away."
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
            <h2 className="service-description-title">Property Due Diligence</h2>

              <p>Our property due diligence services are designed to provide you with a comprehensive analysis of a property before making a purchase. We verify the legal ownership and title, ensuring that no hidden claims or disputes will interfere with your transaction. In addition, we thoroughly examine zoning laws, land-use restrictions, and local regulations to confirm that the property meets your needs and complies with all legal requirements. We also conduct a detailed risk assessment, identifying potential issues such as environmental concerns, outstanding liens, or unresolved legal disputes that could impact the property’s value or your intended use.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L19} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
            <section className="main-point">
              <div className="main-point-container">
                <div className="main-point-content">
                  {/* Left Image Blocks */}
                  <div className="main-point-blocks">
                    <img src={m19} alt="About Us 2" />
                  </div>
      
                  {/* Right Text Section */}
                  <div className="main-point-text">
                    <h2 className="main-point-title">Main points</h2>
                    
                    {/* Accordion 1 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <span>A-	Thorough Verification of Ownership and Title</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                        <p>We conduct in-depth research to verify the ownership and title of the property you&apos;re considering, ensuring there are no disputes or claims that could affect your purchase. Our due diligence process provides peace of mind by confirming that the property is legally and clearly owned by the seller, without any encumbrances or legal issues.</p>
                      </div>
                    </div>
      
                    {/* Accordion 2 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <span>B-	Comprehensive Zoning and Risk Assessment</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                        <p>Our team evaluates the zoning laws and regulations applicable to the property, ensuring that the land can be used for your intended purpose. We also assess potential risks, including environmental hazards, pending litigation, and existing liens, to help you make an informed decision and avoid costly surprises after purchase.</p>
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
        <img src={s19} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Title Verification – Confirm ownership and clear liens.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Zoning Checks – Ensure intended use compliance.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Environmental Risks – Soil, flood, or hazard assessments.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Litigation Search – Uncover pending disputes.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Fast Turnaround – Reports in [X] weeks.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Post-Diligence Advice – Renegotiate or walk away if issues arise.</p>
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

export default PropertyDueDiligence;