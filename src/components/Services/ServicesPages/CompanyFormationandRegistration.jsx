import "./ServicesPages.css"
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L3 from "../../img/assets/final media/services IMAGE/L  3.png";
import s3 from "../../img/assets/final media/services IMAGE/s 3.png";

function CompanyFormationandRegistration() {


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
            <h2 className="service-description-title">Company Formationand Registration</h2>

              <p>Setting up a business requires the right legal structure. We handle the complexities of company formation and registration, ensuring compliance with local laws and regulations..</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L3} alt="About Us 2" />
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