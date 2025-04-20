import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L15 from "../../img/assets/Servicepages/Business Structure Consultation/pexels-alphatradezone-5833243.jpg";
import s15 from "../../img/assets/Servicepages/Business Structure Consultation/pexels-mart-production-7643743.jpg";
import m15 from "../../img/assets/Servicepages/Business Structure Consultation/pexels-mikhail-nilov-8729814.jpg";
import { IoIosArrowDropdown } from 'react-icons/io';




function BusinessConsultation () {

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
    question: "How do I choose between an LLC, corporation, or sole proprietorship?",
    answer: "We evaluate liability, tax implications, and growth goals to recommend the best structure for you."
  },
  {
    question: "What are the tax advantages of an LLC?",
    answer: "LLCs offer pass-through taxation, avoiding double taxation while protecting personal assets."
  },
  {
    question: "Can I change my business structure later?",
    answer: "Yes, but it may involve fees and paperwork—we’ll guide you through the process."
  },
  {
    question: "What compliance steps are required for corporations?",
    answer: "We help with filings, bylaws, shareholder agreements, and annual reporting."
  },
  {
    question: "How does a business structure affect fundraising?",
    answer: "Corporations (e.g., C-Corps) are ideal for investors, while LLCs suit small-business flexibility."
  },
  {
    question: "Do you assist with multi-state registration?",
    answer: "Yes, we ensure compliance if you operate or hire across state lines."
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
            <h2 className="service-description-title">Business Structure Consultation</h2>

              <p>We offer expert advice to help you choose the best legal structure for your business, ensuring that your choice aligns with your financial, operational, and liability goals. Our team evaluates your business’s needs and growth potential, recommending an entity type—such as LLC, corporation, partnership, or sole proprietorship—that maximizes benefits while minimizing risks. We guide you through each option&apos;s tax implications, legal requirements, and long-term advantages. By understanding the specific nuances of each structure, we help you make informed decisions that ensure your business is set up for success from the start.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L15} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
            <section className="main-point">
              <div className="main-point-container">
                <div className="main-point-content">
                  {/* Left Image Blocks */}
                  <div className="main-point-blocks">
                    <img src={m15} alt="About Us 2" />
                  </div>
      
                  {/* Right Text Section */}
                  <div className="main-point-text">
                    <h2 className="main-point-title">Main points</h2>
                    
                    {/* Accordion 1 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <span>Expert Guidance on Entity Selection</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                        <p>We provide professional advice to help you choose the right business entity, taking into account your specific needs and goals. Whether it’s a Limited Liability Company (LLC), corporation, partnership, or sole proprietorship, we consider factors like liability protection, taxation, and ownership structure. Our experts ensure that you select the optimal entity type to set your business up for success and minimize future legal complexities.</p>
                      </div>
                    </div>
      
                    {/* Accordion 2 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <span>Strategic Planning for Growth & Compliance</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                        <p>Selecting the right structure is just the beginning. We assist you in developing a comprehensive strategy that supports your business&apos;s growth while ensuring full compliance with all legal requirements. From filing necessary documents to maintaining your business’s compliance with state and federal regulations, we help you navigate the complexities of business law. Our goal is to provide a solid legal foundation that enables smooth operations and sustainable growth.</p>
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
        <img src={s15} alt="About Us 2"
        style={{aspectRatio:"1/1"}} />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Entity Selection – LLC, Corp, or Sole Proprietorship guidance.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Tax Optimization – Advice on liability and tax implications.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Compliance Setup – Registrations, bylaws, and annual filings.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Growth Planning – Scalable structures for future expansion.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Entity Conversions – Support for restructuring as needed.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Multi-State Compliance – Navigate interstate business laws.</p>
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

export default BusinessConsultation ;