import "./ServicesPages.css"
import { useState } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L3 from "../../img/assets/final media/services IMAGE/L  3.png";
import s3 from "../../img/assets/final media/services IMAGE/s 3.png";
import { IoIosArrowDropdown } from 'react-icons/io';


function CompanyFormationandRegistration() {


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
            <span>Start Your Business the Right Way</span>
          
            
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
            <h2 className="service-description-title">Business Management & Corporate Support</h2>
            <p>Running a business in the UAE requires strategic planning, compliance, and operational efficiency. Esnad provides end-to-end corporate support to ensure long-term success.</p>
          </div>
          <div className="service-description-blocks">
            <img src={L3} alt="Business formation" />
          </div>
        </div>
      </section>

      {/* -- Main Point Section -- */}
      <section className="main-point">
        <div className="main-point-container">
          <div className="main-point-content">
            {/* Left Image Blocks */}
            <div className="main-point-blocks">
              <img src={L3} alt="About Us 2" />
            </div>

            {/* Right Text Section */}
            <div className="main-point-text">
              <h2 className="main-point-title">Main points</h2>
              
              {/* Accordion 1 */}
              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                  <span>Expert Guidance on Choosing the Right Business Structure</span>
                  <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                </button>
                <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                  <p>Choosing the correct legal structure—whether it’s a sole proprietorship, partnership, LLC, or corporation—is critical to your business’s success. We guide you through the decision-making process based on your goals, liability concerns, and tax implications. Our legal team ensures you understand the pros and cons of each option so your business starts off on a strong, legally sound foundation.</p>
                </div>
              </div>

              {/* Accordion 2 */}
              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                  <span>Hassle-Free Company Registration and Compliance</span>
                  <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                </button>
                <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                  <p>We take the guesswork out of registering your business. From preparing and filing the necessary documents to securing the required licenses and approvals, we handle every step with precision. Our team ensures your new company meets all regulatory and compliance requirements, so you can focus on launching and growing your business without legal roadblocks.</p>
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
        <img src={s3} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Company registration & legal documentation.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Tax and regulatory compliance setup.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Faster, hassle-free registration process.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Initial assessment of your business needs.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Preparation and submission of registration documents.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Ongoing support for compliance and licensing.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default CompanyFormationandRegistration  ;