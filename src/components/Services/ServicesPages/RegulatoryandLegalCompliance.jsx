import "./ServicesPages.css"
import { useState } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L12 from "../../img/assets/final media/services IMAGE/L  9.png";
import s12 from "../../img/assets/final media/services IMAGE/s 9.png";
import { IoIosArrowDropdown } from 'react-icons/io';

function RegulatoryandLegalCompliance() {
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
                  <span>Stay Compliant, Stay Ahead</span>
                
                  
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
            <h2 className="service-description-title">Regulatory and Legal Compliance</h2>

              <p>Keeping up with regulations is critical for businesses. We help businesses navigate complex regulatory landscapes and avoid costly penalties.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L12} alt="About Us 2" />
          </div>
          </div>
        
      </section>


{/* -- Main Point Section -- */}
                   <section className="main-point">
                     <div className="main-point-container">
                       <div className="main-point-content">
                         {/* Left Image Blocks */}
                         <div className="main-point-blocks">
                           <img src={L12} alt="About Us 2" />
                         </div>
             
                         {/* Right Text Section */}
                         <div className="main-point-text">
                           <h2 className="main-point-title">Main points</h2>
                           
                           {/* Accordion 1 */}
                           <div className="accordion-item">
                             <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                               <span>Proactive Strategies to Avoid Penalties and Liabilities</span>
                               <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                             </button>
                             <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                               <p>Staying compliant isn’t just about meeting the bare minimum — it’s about proactively managing compliance to avoid potential penalties, lawsuits, or reputational damage. We help businesses implement effective compliance strategies, conduct regular audits, and keep all documentation up-to-date. By addressing issues before they become problems, we help you avoid costly fines and legal setbacks, allowing your business to thrive without unnecessary interruptions.</p>
                             </div>
                           </div>
             
                           {/* Accordion 2 */}
                           <div className="accordion-item">
                             <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                               <span>Expert Navigation of Complex Regulatory Environments</span>
                               <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                             </button>
                             <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                               <p>Regulatory compliance can be a moving target, especially with constantly evolving laws and industry standards. Our team stays on top of the latest regulations to help your business remain compliant. Whether it’s local, national, or international regulations, we provide tailored advice on meeting your legal obligations, reducing risk, and ensuring your operations are legally sound.</p>
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
        <img src={s12} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Industry-specific compliance strategies.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Risk assessments and policy development.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Legal audits and regulatory updates</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Drafting and reviewing internal policies and procedures.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Licensing and permit applications.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Training employees on regulatory compliance.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default RegulatoryandLegalCompliance;