import "./ServicesPages.css"
// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L4 from "../../img/assets/final media/services IMAGE/L  4.png"
import s4 from "../../img/assets/final media/services IMAGE/s 4.png"


function TrademarkandIntellectualPropertyRegistration() {


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
                  <span>Protect Your Brand and Innovations</span>
                
                  
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
            <h2 className="service-description-title">Trademark and Intellectual Property Registration</h2>

              <p>Safeguard your intellectual property with our streamlined trademark and IP registration services.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L4} alt="About Us 2" />
          </div>
          </div>
        
      </section>

      <section className="service-data" id="service-data">
  <div className="service-data-container">
    <div className="service-data-content">
      {/* Left Image Block */}
      <div className="service-data-blocks">
        <img src={s4} alt="About Us 2" />
      </div>

      {/* Right Text Section */}
      <div className="service-data-text">
        {/* Item 1 */}
        <div className="service-data-item">
          <span className="service-number">1</span>
          <p>Exclusive rights to your brand and creations.</p>
        </div>

        {/* Item 2 */}
        <div className="service-data-item">
          <span className="service-number">2</span>
          <p>Protection against unauthorized use.</p>
        </div>

        {/* Item 3 */}
        <div className="service-data-item">
          <span className="service-number">3</span>
          <p>Expert guidance on IP strategy.</p>
        </div>

        {/* Item 4 */}
        <div className="service-data-item">
          <span className="service-number">4</span>
          <p>Trademark searches & application filing.</p>
        </div>

        {/* Item 5 */}
        <div className="service-data-item">
          <span className="service-number">5</span>
          <p>Copyright and patent registration.</p>
        </div>

        {/* Item 6 */}
        <div className="service-data-item">
          <span className="service-number">6</span>
          <p>Defending against infringement claims</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default TrademarkandIntellectualPropertyRegistration;