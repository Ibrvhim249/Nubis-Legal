import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L16 from "../../img/assets/Servicepages/Legal Subscription Plans for Startups/pexels-kampus-8441784.jpg";
import s16 from "../../img/assets/Servicepages/Legal Subscription Plans for Startups/pexels-karolina-grabowska-5387266.jpg";
import m16 from "../../img/assets/Servicepages/Legal Subscription Plans for Startups/pexels-rdne-7821913.jpg";
import { IoIosArrowDropdown } from 'react-icons/io';




function LegalSubscription() {

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
    question: "What’s included in your startup legal plans?",
    answer: "Contracts, IP protection, compliance, employment law, and ongoing advisory services."
  },
  {
    question: "How much do subscription plans cost?",
    answer: "Plans start at [customize with pricing tiers], scaling with your business needs."
  },
  {
    question: "Can I cancel or upgrade my plan?",
    answer: "Yes, plans are flexible—adjust as your startup grows."
  },
  {
    question: "Do you handle investor agreements?",
    answer: "Absolutely! We draft SAFE notes, term sheets, and equity agreements."
  },
  {
    question: "How fast do you respond to urgent legal questions?",
    answer: "Priority support ensures responses within [X] hours for critical issues."
  },
  {
    question: "Are trademark filings included?",
    answer: "Higher-tier plans cover IP filings—we’ll recommend the right option."
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
            <h2 className="service-description-title">Legal Subscription Plans for Startups</h2>

              <p>We offer affordable, ongoing legal coverage designed specifically for startups, ensuring that your business has reliable legal support as it scales. Our subscription plans are ideal for growing companies that need consistent access to legal services without breaking the bank. From contract drafting and employment law to intellectual property protection and compliance, our services cover all essential areas of business law. Each plan is flexible and can be adjusted as your business needs evolve. With our subscription, you get proactive legal guidance to help you navigate challenges and avoid costly mistakes.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L16} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
            <section className="main-point">
              <div className="main-point-container">
                <div className="main-point-content">
                  {/* Left Image Blocks */}
                  <div className="main-point-blocks">
                    <img src={m16} alt="About Us 2" />
                  </div>
      
                  {/* Right Text Section */}
                  <div className="main-point-text">
                    <h2 className="main-point-title">Main points</h2>
                    
                    {/* Accordion 1 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <span>Affordable Ongoing Legal Support</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                        <p>Our subscription plans offer startups continuous, budget-friendly access to legal services. This ensures that your business has expert legal support as it grows, without the high costs typically associated with hiring a full-time attorney. With our plans, you receive the peace of mind that your legal needs are consistently covered.</p>
                      </div>
                    </div>
      
                    {/* Accordion 2 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <span>Customized Legal Solutions for Growth</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                        <p>Each plan is tailored to meet the unique needs of your startup, addressing specific challenges as your business evolves. From contract drafting and intellectual property protection to compliance advice and dispute resolution, we provide flexible legal solutions that adapt to your changing requirements.</p>
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
        <img src={s16} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Affordable Access – Budget-friendly monthly/quarterly plans.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Core Services Included – Contracts, IP, compliance, and employment law.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Flexible Upgrades – Scale services as your startup grows.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Priority Support – Fast responses for urgent queries.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Investor-Ready Docs – SAFE notes, term sheets, and equity agreements.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>IP Protection – Trademark/copyright filings (premium plans).</p>
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

export default LegalSubscription;