import "./ServicesPages.css"
import { useState } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L4 from "../../img/assets/final media/services IMAGE/L  4.png"
import s4 from "../../img/assets/final media/services IMAGE/s 4.png"
import { IoIosArrowDropdown } from 'react-icons/io';


function TrademarkandIntellectualPropertyRegistration() {
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
    question: "What IP can you register?",
    answer: "What IP can you register."
  },
  {
    question: "How long does trademark registration take?",
    answer: "6–12 months (we expedite where possible)."
  },
  {
    question: "What’s the cost?",
    answer: "Fees vary by type/country—we provide transparent pricing upfront."
  },
  {
    question: "Can you handle international IP registration?",
    answer: "Yes, via the Madrid Protocol or country-specific filings."
  },
  {
    question: "What if my trademark is challenged?",
    answer: "We defend your rights through oppositions or litigation."
  },
  {
    question: "Do you offer IP infringement monitoring?",
    answer: "Yes, we track unauthorized use and send cease-and-desist letters."
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
                  <span>Protect Your Brand and Innovations</span>
                
                  
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
            <h2 className="service-description-title">Trademark and Intellectual Property Registration</h2>

              <p>Safeguard your intellectual property with our streamlined trademark and IP registration services. We help protect your brand, innovations, and creative works by ensuring that your intellectual property is properly registered. From trademarks to patents and copyrights, we guide you through the entire registration process. Our expert team ensures that your ideas and creations are legally protected, allowing you to focus on growing your brand with peace of mind. Trust us to secure your intellectual property and strengthen your competitive advantage.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L4} alt="About Us 2" />
          </div>
          </div>
        
      </section>

      {/* -- Main Point Section -- */}
                         <section className="main-point">
                           <div className="main-point-container">
                             <div className="main-point-content">
                               {/* Left Image Blocks */}
                               <div className="main-point-blocks">
                                 <img src={L4} alt="About Us 2" />
                               </div>
                   
                               {/* Right Text Section */}
                               <div className="main-point-text">
                                 <h2 className="main-point-title">Main points</h2>
                                 
                                 {/* Accordion 1 */}
                                 <div className="accordion-item">
                                   <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                                     <span>Secure Your Brand with Professional Trademark Registration</span>
                                     <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                                   </button>
                                   <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                                     <p>Your brand is one of your most valuable assets — and protecting it starts with proper trademark registration. We guide you through every step, from name and logo searches to filing applications and responding to trademark office actions. Our team ensures your trademark is registered correctly and strategically, giving you exclusive rights and legal protection against infringement.</p>
                                   </div>
                                 </div>
                   
                                 {/* Accordion 2 */}
                                 <div className="accordion-item">
                                   <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                                     <span>Comprehensive Intellectual Property Protection</span>
                                     <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                                   </button>
                                   <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                                     <p>Beyond trademarks, we help protect your innovations, creative works, and proprietary processes through copyrights, patents, and design registrations. Whether you’re an entrepreneur, artist, or inventor, we tailor our IP services to your unique needs. Our goal is to secure your intellectual property rights and help you maintain a competitive edge in your industry.</p>
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
        <img src={s4} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Exclusive rights to your brand and creations.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Protection against unauthorized use.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Expert guidance on IP strategy.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Trademark searches & application filing.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Copyright and patent registration.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Defending against infringement claims</p>
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

export default TrademarkandIntellectualPropertyRegistration;