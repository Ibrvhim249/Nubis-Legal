import "./ServicesPages.css"
// Assets
import backgroundImage from '../../img/loading.png';
import L6 from "../../img/assets/final media/services IMAGE/L  6.png";
import s6 from "../../img/assets/final media/services IMAGE/s 6.png";

function DebtCollection() {


  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src={backgroundImage} 
            alt="Decorative background" 
            className="hero-bg"
            role="presentation"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">
            <span className="highlight">NUBIS LEGAL CONSULTANCY SERVICES.<br />YOUR TRUSTED LEGAL PARTNER.</span>
          </h1>
          <p className="hero-subtitle">
            Where Innovation Meets Expertise <br />Delivering Smarter Legal Solutions
          </p>
          <div className="hero-cta">
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </section>

{/* -- service-description Section -- */}
      <section className="service-description" id="about">
        <div className="service-description-container">
          <div className="service-description-content">
            <div className="service-description-text">
            <h2 className="service-description-title">service description</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis,
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum ut ullamcorper mi. Phasellus efficitur quam a dolor convallis, 
                eget feugiat magna rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                eget feugiat magna rhoncus.</p>
            </div>
          </div>
          <div className="service-description-blocks">
            <img src={L6} alt="About Us 2" />
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
          <p>Expert Legal Consultation: Our team provides comprehensive legal advice tailored to your specific business needs.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Contract Management: We draft, review, and negotiate contracts to protect your organization&apos;s interests.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Dispute Resolution: Professional mediation and litigation services to resolve commercial conflicts efficiently.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Regulatory Compliance: Ensure your operations meet all legal requirements with our compliance audits.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Corporate Governance: Strategic guidance for board management and shareholder relations.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>International Law: Cross-border legal support for global business operations and expansions.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default DebtCollection;