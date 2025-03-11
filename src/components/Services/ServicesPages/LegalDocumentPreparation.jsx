import "./ServicesPages.css"
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L5 from "../../img/assets/final media/services IMAGE/L  5.png";
import s5 from "../../img/assets/final media/services IMAGE/s 5.png";

function LegalDocumentPreparation() {


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
                  <span>Precision-Crafted Legal Documents</span>
                
                  
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
            <h2 className="service-description-title">Legal Document Preparation</h2>

              <p>From wills to employment agreements, we prepare legally sound documents tailored to your needs.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L5} alt="About Us 2" />
          </div>
          </div>
        
      </section>

      <section className="service-data" id="service-data">
  <div className="service-data-container">
    <div className="service-data-content">
      {/* Left Image Block */}
      <div className="service-data-blocks">
        <img src={s5} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Documents that reflect your specific requirements.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Reduced risk of disputes or legal challenges.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Peace of mind knowing your documents are legally enforceable.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Drafting and reviewing contracts, agreements, and legal notices.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Customization to fit personal, business, and industry-specific needs.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Ensuring compliance with local, national, and international laws..</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default LegalDocumentPreparation;