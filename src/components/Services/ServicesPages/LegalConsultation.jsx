import "./ServicesPages.css"
import { useState } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L2 from "../../img/assets/final media/services IMAGE/L  2.png";
import s2 from "../../img/assets/final media/services IMAGE/s 2.png";
import { IoIosArrowDropdown } from 'react-icons/io';


function LegalConsultation() {

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
    question: "What topics can I discuss in a consultation?",
    answer: "Business law, disputes, compliance, personal legal matters, and strategy planning."
  },
  {
    question: "How long is a typical session?",
    answer: "Sessions are [X] minutes/hourly, with flexible scheduling."
  },
  {
    question: "Do you offer ongoing advisory support?",
    answer: "Yes, we provide follow-ups and action plans."
  },
  {
    question: "Can you help me understand a legal notice I received?",
    answer: "Yes, we’ll explain implications and next steps."
  },
  {
    question: "Are consultations confidential?",
    answer: "100%—attorney-client privilege applies."
  },
  {
    question: "How do I prepare for a consultation?",
    answer: "Bring relevant documents (contracts, notices, etc.) and a list of questions."
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
                  <span>Expert Legal Advice, Personalized for You</span>
                
                  
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
            <h2 className="service-description-title">Legal Consultation</h2>

              <p>Our legal consultations provide clarity and actionable solutions for your legal challenges. Whether you’re a business owner or an individual, we’re here to guide you every step of the way. We take the time to truly understand your situation by listening to your concerns and assessing all aspects of your case. After a thorough analysis, we offer clear, practical, and customized solutions designed to protect your rights, secure your interests, and ensure that you make informed decisions. From legal advice to strategic planning, you can rely on us for sound guidance that leads to positive outcomes.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L2} alt="About Us 2" />
          </div>
          </div>
        
      </section>

      {/* -- Main Point Section -- */}
                         <section className="main-point">
                           <div className="main-point-container">
                             <div className="main-point-content">
                               {/* Left Image Blocks */}
                               <div className="main-point-blocks">
                                 <img src={L2} alt="About Us 2" />
                               </div>
                   
                               {/* Right Text Section */}
                               <div className="main-point-text">
                                 <h2 className="main-point-title">Main points</h2>
                                 
                                 {/* Accordion 1 */}
                                 <div className="accordion-item">
                                   <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                                     <span>Personalized Legal Guidance Tailored to Your Needs</span>
                                     <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                                   </button>
                                   <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                                     <p>We understand that every legal situation is unique, which is why our consultations are never one-size-fits-all. Whether you’re facing a business dispute, navigating personal legal matters, or just need guidance on the next steps, we take the time to understand your specific concerns. Our expert team listens closely, asks the right questions, and offers strategic advice that’s directly aligned with your goals — all in plain, understandable language.</p>
                                   </div>
                                 </div>
                   
                                 {/* Accordion 2 */}
                                 <div className="accordion-item">
                                   <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                                     <span>Clear, Actionable Solutions You Can Rely On</span>
                                     <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                                   </button>
                                   <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                                     <p>Legal issues can be complex, but our job is to make them manageable. After carefully analyzing your situation, we provide straightforward recommendations you can act on immediately. We help you understand your options, assess potential risks, and make informed decisions that protect your rights and interests. Whether it’s preventative advice or urgent legal support, our consultations are designed to give you clarity and confidence moving forward.</p>
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
        <img src={s2} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>One-on-one consultations with experienced lawyers.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Business and personal legal advice.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Step-by-step legal guidance on complex matters.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Schedule a consultation at your convenience.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Discuss your legal issue with our experts.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Receive practical, actionable advice</p>
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

export default LegalConsultation;