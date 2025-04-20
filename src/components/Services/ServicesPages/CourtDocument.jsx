import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L13 from "../../img/assets/Servicepages/Court Document Filing & Motion Drafting/pexels-matthiaszomer-618158.jpg";
import s13 from "../../img/assets/Servicepages/Court Document Filing & Motion Drafting/pexels-mikhail-nilov-8730975.jpg";
import m13 from "../../img/assets/Servicepages/Court Document Filing & Motion Drafting/pexels-ron-lach-9870220.jpg";

import { IoIosArrowDropdown } from 'react-icons/io';




function CourtDocument() {

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
    question: "What types of legal documents do you prepare and file?",
    answer: "We handle complaints, motions, petitions, affidavits, and other pleadings—all meticulously drafted to meet court standards and deadlines."
  },
  {
    question: "How do you ensure my documents comply with court requirements?",
    answer: "Our team is well-versed in jurisdictional rules, and we double-check formatting, content, and submission deadlines to avoid rejections."
  },
  {
    question: "Can you help with urgent filings?",
    answer: "Yes, we prioritize timely submissions and expedite urgent filings to meet strict court deadlines."
  },
  {
    question: "What makes your motion drafting service stand out?",
    answer: "We provide strategic legal analysis, tailor arguments to your case goals, and support motions with relevant precedents for stronger outcomes."
  },
  {
    question: "Do you file documents electronically or in person?",
    answer: "We file via the method required by the court (e-filing, mail, or in-person) and confirm receipt."
  },
  {
    question: "What if my filing is rejected?",
    answer: "We promptly address any issues, revise the document, and resubmit at no extra cost."
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
            <h2 className="service-description-title">Court Document Filing & Motion Drafting</h2>

              <p>Accurate preparation and filing of legal pleadings and court documents We specialize in the meticulous preparation of legal pleadings and documents, ensuring they are thoroughly reviewed and error-free. Our team works closely with clients to gather all relevant information, creating documents that are clear, precise, and in full alignment with legal standards. From complaints and motions to petitions and affidavits, we ensure that each document is drafted with the utmost attention to detail. We also handle the timely filing with the appropriate court, guaranteeing that every submission meets deadlines and procedural requirements.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L13} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
            <section className="main-point">
              <div className="main-point-container">
                <div className="main-point-content">
                  {/* Left Image Blocks */}
                  <div className="main-point-blocks">
                    <img src={m13} alt="About Us 2"
                    style={{aspectRatio:"1/1"}} />
                  </div>
      
                  {/* Right Text Section */}
                  <div className="main-point-text">
                    <h2 className="main-point-title">Main points</h2>
                    
                    {/* Accordion 1 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <span>Timely Submission & Court Compliance</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                        <p>We prioritize the timely submission of all legal documents, ensuring that every filing meet court deadlines. Our team is well-versed in court rules and regulations, so you can trust that all documents are in full compliance with the specific requirements of each jurisdiction, reducing the risk of delays or rejections.</p>
                      </div>
                    </div>
      
                    {/* Accordion 2 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <span>Comprehensive Motion Support</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                        <p>Our motion drafting service goes beyond basic documentation. We provide in-depth legal analysis, crafting tailored arguments that align with your case&apos;s goals. We ensure that each motion is strategically presented, clearly written, and supported by relevant legal precedents, boosting the likelihood of a favorable outcome in court.</p>
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
        <img src={s13} alt="About Us 2"
        style={{aspectRatio:"1/1"}} />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Error-Free Drafting – Meticulous preparation of pleadings, motions, and affidavits.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Deadline Compliance – Guaranteed on-time filing with court rules.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Jurisdictional Expertise – Knowledge of local court procedures to avoid rejections.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Strategic Motion Support – Tailored arguments backed by legal precedents.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Revisions Included – Free corrections if filings are challenged.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>E-Filing & Tracking – Electronic or physical submission with confirmation.</p>
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

export default CourtDocument;