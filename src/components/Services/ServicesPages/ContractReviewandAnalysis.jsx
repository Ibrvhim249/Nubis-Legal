import "./ServicesPages.css"
import { useState } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L9 from "../../img/assets/final media/services IMAGE/L  9.png";
import s9 from "../../img/assets/final media/services IMAGE/s 9.png";
import { IoIosArrowDropdown } from 'react-icons/io';

function ContractReviewandAnalysis() {

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
                      <span>Spot Risks Before They Become Problems</span>
                    
                      
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
             <h2 className="service-description-title">Contract Review and Analysis</h2>
 
               <p>Our team meticulously reviews contracts to identify risks and recommend improvements.</p>
             </div>
           
           <div className="service-description-blocks">
             <img src={L9} alt="About Us 2" />
           </div>
           </div>
         
       </section>

       {/* -- Main Point Section -- */}
                   <section className="main-point">
                     <div className="main-point-container">
                       <div className="main-point-content">
                         {/* Left Image Blocks */}
                         <div className="main-point-blocks">
                           <img src={L9} alt="About Us 2" />
                         </div>
             
                         {/* Right Text Section */}
                         <div className="main-point-text">
                           <h2 className="main-point-title">Main points</h2>
                           
                           {/* Accordion 1 */}
                           <div className="accordion-item">
                             <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                               <span>Thorough Risk Identification and Legal Clarity</span>
                               <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                             </button>
                             <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                               <p>We go beyond surface-level reviews to uncover hidden risks, vague clauses, and unfavorable terms that could hurt you down the line. Our legal team carefully analyzes each section of your contract to ensure it’s clear, fair, and enforceable. We highlight potential red flags, explain their implications, and offer practical solutions to safeguard your rights and interests.</p>
                             </div>
                           </div>
             
                           {/* Accordion 2 */}
                           <div className="accordion-item">
                             <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                               <span>Strategic Recommendations for Stronger Agreements</span>
                               <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                             </button>
                             <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                               <p>A good contract isn’t just about avoiding risk — it’s about strengthening your position. After our detailed review, we provide tailored recommendations to enhance the contract’s language, structure, and balance. Whether it’s a business agreement, lease, partnership deal, or vendor contract, we help you negotiate better terms and move forward with confidence.</p>
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
            <img src={s9} alt="About Us 2" />
          </div>
    
          {/* Right Text Section */}
          <div className="service-data-text">
            {/* Item 1 */}
            <div className="service-data-item">
              <span className="service-number">1</span>
              <p>Identification of potential risks and loopholes.</p>
            </div>
    
            {/* Item 2 */}
            <div className="service-data-item">
              <span className="service-number">2</span>
              <p>Clear, actionable recommendations.</p>
            </div>
    
            {/* Item 3 */}
            <div className="service-data-item">
              <span className="service-number">3</span>
              <p>Confidence in your contractual agreements.</p>
            </div>
    
            {/* Item 4 */}
            <div className="service-data-item">
              <span className="service-number">4</span>
              <p>Detailed review of the contract.</p>
            </div>
    
            {/* Item 5 */}
            <div className="service-data-item">
              <span className="service-number">5</span>
              <p>Identification of risks and areas for improvement.</p>
            </div>
    
            {/* Item 6 */}
            <div className="service-data-item">
              <span className="service-number">6</span>
              <p>Provision of a comprehensive report and recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        </>
  );
}

export default ContractReviewandAnalysis;