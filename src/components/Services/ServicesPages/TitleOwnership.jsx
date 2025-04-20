import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L20 from "../../img/assets/Servicepages/Title & Ownership Dispute Resolution/1.png";
import s20 from "../../img/assets/Servicepages/Title & Ownership Dispute Resolution/pexels-a-darmel-7642004.jpg";
import m20 from "../../img/assets/Servicepages/Title & Ownership Dispute Resolution/pexels-freestockpro-12955837.jpg";
import { IoIosArrowDropdown } from 'react-icons/io';




function TitleOwnership() {

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
    question: "What causes title disputes?",
    answer: "Inheritance conflicts, fraud, boundary errors, or unclear deeds."
  },
  {
    question: "How do you resolve inheritance-related ownership issues?",
    answer: "We analyze wills, probate records, and heir claims to establish legal ownership."
  },
  {
    question: "Can you clear a clouded title?",
    answer: "Yes, we fix errors (e.g., missing signatures) via quiet title lawsuits or negotiations."
  },
  {
    question: "What if someone fraudulently claims my property?",
    answer: "We gather evidence (deeds, affidavits) to challenge fraudulent claims in court."
  },
  {
    question: "How long does dispute resolution take?",
    answer: "From weeks (negotiation) to months (litigation), depending on complexity."
  },
  {
    question: "Do you handle cross-border property disputes?",
    answer: "Yes, we collaborate with international experts for global cases."
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
            <h2 className="service-description-title">Title & Ownership Dispute Resolution</h2>

              <p>We offer comprehensive legal services to resolve title and ownership disputes, helping you navigate complex issues that may arise during property transactions or ownership. Our team provides expert guidance to resolve conflicts efficiently, whether the issue involves unclear title transfers, fraudulent claims, or inheritance disputes. We thoroughly review property records and legal documentation to identify the root cause of the conflict. Through strategic negotiations and legal remedies, we work towards a resolution that protects your rights and ensures a clear, uncontested title.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L20} alt="About Us 2" />
          </div>
          </div>
        
      </section>


      {/* -- Main Point Section -- */}
            <section className="main-point">
              <div className="main-point-container">
                <div className="main-point-content">
                  {/* Left Image Blocks */}
                  <div className="main-point-blocks">
                    <img src={m20} alt="About Us 2" />
                  </div>
      
                  {/* Right Text Section */}
                  <div className="main-point-text">
                    <h2 className="main-point-title">Main points</h2>
                    
                    {/* Accordion 1 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                        <span>Expert Legal Guidance for Title Conflicts</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                        <p>We provide expert legal assistance to resolve title disputes, ensuring that any conflicts regarding ownership are settled efficiently and effectively. Our team conducts thorough investigations into property records and documentation, working to clear any issues surrounding ownership and protect your rights as a property owner or buyer.</p>
                      </div>
                    </div>
      
                    {/* Accordion 2 */}
                    <div className="accordion-item">
                      <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                        <span>Resolution of Complex Ownership Issues</span>
                        <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                      </button>
                      <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                        <p>Whether it’s a dispute over inheritance, unclear title transfers, or contested claims by third parties, we handle complex ownership conflicts with strategic legal solutions. We negotiate on your behalf, aiming for fair and swift resolutions, while ensuring your property interests are safeguarded through legally binding agreements.</p>
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
        <img src={s20} alt="About Us 2"
        style={{aspectRatio:"1/1"}} />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Inheritance Clarity – Resolve heir claims/probate conflicts.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Clouded Title Fixes – Correct errors via quiet title actions.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Fraud Investigation – Challenge fraudulent claims.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Efficient Resolution – Negotiation or court representation.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Cross-Border Cases – International property disputes.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Documentation Review – Deeds, wills, and historical records.</p>
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

export default TitleOwnership;