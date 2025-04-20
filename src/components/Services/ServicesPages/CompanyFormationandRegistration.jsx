import "./ServicesPages.css"
import { useState } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L3 from "../../img/assets/final media/services IMAGE/L  3.png";
import s3 from "../../img/assets/final media/services IMAGE/s 3.png";
import { IoIosArrowDropdown } from 'react-icons/io';


function CompanyFormationandRegistration() {


  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);};
    

// ===============================================
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
            <span>Start Your Business the Right Way</span>
          
            
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
            <h2 className="service-description-title">Business Management & Corporate Support</h2>
            <p>Starting a business requires the right legal structure to ensure long-term success. We handle the complexities of company formation and registration, making sure you comply with all local laws and regulations. From selecting the right business type to filing necessary documents, we streamline the entire process. Our expert team ensures that your business is set up correctly from the start, so you can focus on growth and operations. With our support, you can confidently take the first step toward building your business.</p>
          </div>
          <div className="service-description-blocks">
            <img src={L3} alt="Business formation" />
          </div>
        </div>
      </section>

      {/* -- Main Point Section -- */}
      <section className="main-point">
        <div className="main-point-container">
          <div className="main-point-content">
            {/* Left Image Blocks */}
            <div className="main-point-blocks">
              <img src={L3} alt="About Us 2" />
            </div>

            {/* Right Text Section */}
            <div className="main-point-text">
              <h2 className="main-point-title">Main points</h2>
              
              {/* Accordion 1 */}
              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                  <span>Expert Guidance on Choosing the Right Business Structure</span>
                  <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                </button>
                <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                  <p>Choosing the correct legal structure—whether it’s a sole proprietorship, partnership, LLC, or corporation—is critical to your business’s success. We guide you through the decision-making process based on your goals, liability concerns, and tax implications. Our legal team ensures you understand the pros and cons of each option so your business starts off on a strong, legally sound foundation.</p>
                </div>
              </div>

              {/* Accordion 2 */}
              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                  <span>Hassle-Free Company Registration and Compliance</span>
                  <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                </button>
                <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                  <p>We take the guesswork out of registering your business. From preparing and filing the necessary documents to securing the required licenses and approvals, we handle every step with precision. Our team ensures your new company meets all regulatory and compliance requirements, so you can focus on launching and growing your business without legal roadblocks.</p>
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
        <img src={s3} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Company registration & legal documentation.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Tax and regulatory compliance setup.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Faster, hassle-free registration process.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Initial assessment of your business needs.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Preparation and submission of registration documents.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Ongoing support for compliance and licensing.</p>
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

export default CompanyFormationandRegistration  ;