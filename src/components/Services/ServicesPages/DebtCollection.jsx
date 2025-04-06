import "./ServicesPages.css"
import { useState } from 'react';
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L6 from "../../img/assets/final media/services IMAGE/L  6.png";
import s6 from "../../img/assets/final media/services IMAGE/s 6.png";
import { IoIosArrowDropdown } from 'react-icons/io';


function DebtCollection() {

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };


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
                  <span>Recover What’s Yours – Efficiently and Legally</span>
                
                  
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
            <h2 className="service-description-title">Debt Collection</h2>

              <p>Unpaid debts can hurt your business. We provide professional debt collection services, ensuring you recover your funds while staying legally compliant</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L6} alt="About Us 2" />
          </div>
          </div>
        
      </section>


{/* -- Main Point Section -- */}
                   <section className="main-point">
                     <div className="main-point-container">
                       <div className="main-point-content">
                         {/* Left Image Blocks */}
                         <div className="main-point-blocks">
                           <img src={L6} alt="About Us 2" />
                         </div>
             
                         {/* Right Text Section */}
                         <div className="main-point-text">
                           <h2 className="main-point-title">Main points</h2>
                           
                           {/* Accordion 1 */}
                           <div className="accordion-item">
                             <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                               <span>Strategic and Professional Debt Recovery</span>
                               <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                             </button>
                             <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                               <p>We understand that unpaid debts can strain your cash flow and business operations. Our team takes a strategic and respectful approach to debt collection, combining persistence with professionalism. Whether it’s an overdue invoice or a long-standing delinquent account, we work to recover what you’re owed swiftly while maintaining your reputation and client relationships.</p>
                             </div>
                           </div>
             
                           {/* Accordion 2 */}
                           <div className="accordion-item">
                             <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                               <span>Legally Compliant and Risk-Free Process</span>
                               <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                             </button>
                             <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                               <p>Debt recovery isn’t just about results — it’s about doing it right. We ensure that every step of the collection process adheres strictly to legal standards and regulations. From sending formal demand letters to initiating legal action if necessary, we protect your business from liability while maximizing the chances of successful recovery.</p>
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
        <img src={s6} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Legal demand letters & negotiation.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Court representation for debt recovery</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Mediation & settlement options.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Assessment of the debt and documentation.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Tracing and locating debtors.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Enforcement of judgments and court orders.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default DebtCollection;