import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L18 from "../../img/assets/Servicepages/Lease Agreement Drafting & Negotiation/pexels-ivan-samkov-8962685.jpg";
import s18 from "../../img/assets/Servicepages/Lease Agreement Drafting & Negotiation/pexels-rdne-7841414.jpg";
import m18 from "../../img/assets/Servicepages/Lease Agreement Drafting & Negotiation/pexels-sora-shimazaki-5673488.jpg";
import { IoIosArrowDropdown } from 'react-icons/io';




function LeaseAgreement() {

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
    question: "Do you work with landlords or tenants?",
    answer: "Both! We protect your interests, whether you’re leasing or renting property."
  },
  {
    question: "What key terms should a lease include?",
    answer: "Rent details, maintenance duties, renewal options, subletting rules, and exit clauses."
  },
  {
    question: "Can you help negotiate rent or deposits?",
    answer: "Yes, we advocate for terms that align with your budget and goals."
  },
  {
    question: "What’s the difference between commercial/residential leases?",
    answer: "Commercial leases are longer, complex, and negotiable; residential leases have tenant-protection laws."
  },
  {
    question: "How do you handle lease disputes?",
    answer: "We review terms, mediate, or represent you in court if needed."
  },
  {
    question: "Can I terminate a lease early?",
    answer: "We’ll draft exit clauses (e.g., buyout fees) to minimize penalties."
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
            <h2 className="service-description-title">Lease Agreement Drafting & Negotiation</h2>

              <p>We offer professional lease agreement drafting and negotiation services for both landlords and tenants, ensuring that all terms are clear, fair, and legally enforceable. Our team works with you to customize the lease to meet your unique requirements, addressing essential aspects like rental rates, property usage, maintenance obligations, and renewal terms. Whether you&lsquo;re entering a commercial or residential lease, we ensure your rights are safeguarded from the start.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L18} alt="About Us 2"
            style={{aspectRatio:"1/1"}} />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
            <section className="main-point">
              <div className="main-point-container">
                <div className="main-point-content">
                  {/* Left Image Blocks */}
                  <div className="main-point-blocks">
                    <img src={m18} alt="About Us 2" />
                  </div>
      
                  {/* Right Text Section */}
                  <div className="main-point-text">
                    <h2 className="main-point-title">Main points</h2>
                    
                    {/* Accordion 1 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <span>Comprehensive Lease Agreement Drafting</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                        <p>We provide expert drafting services to create lease agreements that protect your interests, whether you&apos;re a landlord or a tenant. Every agreement is tailored to meet your specific needs, ensuring clarity and fairness in all terms. We focus on key elements such as rental payments, maintenance responsibilities, and duration to make sure your rights are fully protected.</p>
                      </div>
                    </div>
      
                    {/* Accordion 2 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <span>Strategic Lease Negotiation</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                        <p>Our team assists in negotiating lease terms that are favorable to you. We work to ensure that the terms of the lease align with your goals and protect your interests throughout the agreement&apos;s lifecycle. Whether it&apos;s negotiating rent increases, renewal options, or property maintenance clauses, we provide strategic guidance to secure the best possible outcome.</p>
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
        <img src={s18} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Commercial vs. Residential – Expertise in both lease types.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Landlord/Tenant Focus – Fair terms for both parties.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Custom Clauses – Rent, maintenance, subletting, and exits.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Rent Negotiation – Advocate for favorable rates/deposits.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Dispute Resolution – Mediation or litigation support.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Renewal Flexibility – Options for extensions/terminations.</p>
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

export default LeaseAgreement;