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

              <p>Our legal consultations provide clarity and actionable solutions for your legal challenges. Whether you’re a business owner or an individual, we’re here to guide you. We listen to your concerns, analyze your situation, and provide clear, practical solutions to protect your rights and interests.</p>
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

    </>
  );
}

export default LegalConsultation;