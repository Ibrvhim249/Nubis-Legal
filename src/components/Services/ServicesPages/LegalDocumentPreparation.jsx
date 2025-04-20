import "./ServicesPages.css"
import { useState } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L5 from "../../img/assets/final media/services IMAGE/L  5.png";
import s5 from "../../img/assets/final media/services IMAGE/s 5.png";
import { IoIosArrowDropdown } from 'react-icons/io';

function LegalDocumentPreparation() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

    // ===============================================
const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: "What documents do you prepare?",
    answer: "Wills, trusts, employment contracts, leases, and more."
  },
  {
    question: "How do you customize documents?",
    answer: "We tailor clauses to your assets, family needs, or business goals."
  },
  {
    question: "Can you notarize or witness signatures?",
    answer: "Yes, we arrange notarization and ensure legal validity."
  },
  {
    question: "What’s the cost for a will?",
    answer: "Flat fees from $[X] (simple to complex estates)."
  },
  {
    question: "Do you store copies of my documents?",
    answer: "Yes, secure digital/paper backups are available."
  },
  {
    question: "Can you update existing documents?",
    answer: "Absolutely—we revise for life changes (marriage, business expansion, etc.)."
  },
  // Add more FAQ items as needed
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

              <p>From wills to employment agreements, we prepare legally sound documents tailored to your needs. Our team ensures that each document is crafted with precision, adhering to the latest legal standards. Whether you require contracts, agreements, or estate planning documents, we provide comprehensive solutions that protect your interests. With our expertise, you can be confident that your legal documents are clear, enforceable, and fully compliant. Let us handle the details so you can focus on what matters most to you.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L5} alt="About Us 2" />
          </div>
          </div>
        
      </section>

      {/* -- Main Point Section -- */}
                         <section className="main-point">
                           <div className="main-point-container">
                             <div className="main-point-content">
                               {/* Left Image Blocks */}
                               <div className="main-point-blocks">
                                 <img src={L5} alt="About Us 2" />
                               </div>
                   
                               {/* Right Text Section */}
                               <div className="main-point-text">
                                 <h2 className="main-point-title">Main points</h2>
                                 
                                 {/* Accordion 1 */}
                                 <div className="accordion-item">
                                   <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                                     <span>Customized Legal Documents for Every Situation</span>
                                     <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`} />
                                   </button>
                                   <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
                                     <p>Every legal document should reflect your specific needs and circumstances — not just generic templates. We prepare customized, accurate, and enforceable documents including wills, powers of attorney, employment contracts, lease agreements, and more. Each document is carefully drafted to protect your interests and meet all legal requirements, ensuring peace of mind and clarity for all parties involved.</p>
                                   </div>
                                 </div>
                   
                                 {/* Accordion 2 */}
                                 <div className="accordion-item">
                                   <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                                     <span>Professional Drafting with Attention to Detail</span>
                                     <IoIosArrowDropdown className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`} />
                                   </button>
                                   <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
                                     <p>Legal paperwork can be complex, but we make it simple and stress-free. Our legal experts handle all the drafting with precision, using clear and concise language that’s legally sound and easy to understand. We also offer guidance throughout the process, explaining each clause and ensuring the final document aligns with your goals and obligations.</p>
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

export default LegalDocumentPreparation;