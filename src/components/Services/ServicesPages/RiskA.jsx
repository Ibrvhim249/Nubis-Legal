import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L14 from "../../img/assets/Servicepages/Risk Assessment & Legal Strategy Planning/pexels-kindelmedia-7054380.jpg";
import s14 from "../../img/assets/Servicepages/Risk Assessment & Legal Strategy Planning/pexels-rdne-7947669.jpg";
import m14 from "../../img/assets/Servicepages/Risk Assessment & Legal Strategy Planning/pexels-rdne-8068691.jpg";
import { IoIosArrowDropdown } from 'react-icons/io';




function RiskA () {

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
    question: "What does your risk assessment process involve?",
    answer: "We analyze evidence, legal precedents, and potential challenges to identify vulnerabilities and strengths in your case."
  },
  {
    question: "How can a legal strategy improve my case outcome?",
    answer: "Tailored strategies mitigate risks, anticipate opposition moves, and position your case for the best possible resolution."
  },
  {
    question: "Do you work with businesses or individuals?",
    answer: "Both! We assess risks for litigation, contracts, disputes, and business decisions."
  },
  {
    question: "How often should I update my legal strategy?",
    answer: "We recommend updates whenever new evidence, laws, or case developments arise."
  },
  {
    question: "Can you help with settlement decisions?",
    answer: "Yes, we weigh risks vs. benefits to advise whether to settle or proceed to trial."
  },
  {
    question: "What if my opponent changes tactics?",
    answer: "We adapt your strategy dynamically to counter new challenges."
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
            <h2 className="service-description-title">Risk Assessment & Legal Strategy Planning</h2>

              <p>We conduct comprehensive risk assessments to identify potential legal challenges and vulnerabilities in your case. Our team thoroughly analyzes every aspect of your situation, from factual evidence to legal precedents, to assess the strengths and weaknesses of your position. Based on this assessment, we develop tailored legal strategies that aim to minimize risks and maximize your chances of success. Our approach is proactive, ensuring we anticipate challenges before they arise. We guide you through the decision-making process, providing clear recommendations and actionable steps to strengthen your case.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L14} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
            <section className="main-point">
              <div className="main-point-container">
                <div className="main-point-content">
                  {/* Left Image Blocks */}
                  <div className="main-point-blocks">
                    <img src={m14} alt="About Us 2" />
                  </div>
      
                  {/* Right Text Section */}
                  <div className="main-point-text">
                    <h2 className="main-point-title">Main points</h2>
                    
                    {/* Accordion 1 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <span>Comprehensive Risk Evaluation</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                        <p>We conduct a thorough evaluation of potential risks and legal obstacles, identifying key vulnerabilities that may impact your case. Our detailed analysis helps you understand the possible outcomes and make informed decisions, ensuring you’re prepared for any challenges ahead.</p>
                      </div>
                    </div>
      
                    {/* Accordion 2 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <span>Tailored Legal Strategy Development</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                        <p>Based on the risk assessment, we create customized legal strategies aimed at mitigating risks and optimizing the chances of success. Our strategies are designed to be flexible, adapting to changes in the case while ensuring you stay on track towards achieving your legal goals.</p>
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
        <img src={s14} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Comprehensive Risk Analysis – Identify case vulnerabilities and strengths.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Customized Strategies – Proactive plans to counter legal challenges.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Litigation/Settlement Advice – Data-driven recommendations for resolution.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Dynamic Updates – Adjust strategies as cases evolve.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Business & Individual Focus – Tailored for all client types.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Clear Reporting – Documented risks and action steps.</p>
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

export default RiskA ;