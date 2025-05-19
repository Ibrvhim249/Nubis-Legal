import "./ServicesPages.css"
import { useState, useEffect, useRef } from 'react';

// Assets
import servicepagesHero from '../../img/assets/Servicepages/Our services image.jpg';
import L12 from "../../img/assets/final media/services IMAGE/L  9.png";
import s12 from "../../img/assets/final media/services IMAGE/s 9.png";

import svg1 from "../../img/assets/Servicepages/regularity/Group 81.svg";
import svg2 from "../../img/assets/Servicepages/regularity/Group 82.svg";
import svg3 from "../../img/assets/Servicepages/regularity/Group 84.svg";
import svg4 from "../../img/assets/Servicepages/regularity/Group 85.svg";
import svg5 from "../../img/assets/Servicepages/regularity/Group 86.svg";
import svg6 from "../../img/assets/Servicepages/regularity/Group 87.svg";
import svg7 from "../../img/assets/Servicepages/regularity/Group 88.svg";
import svg8 from "../../img/assets/Servicepages/regularity/Group 89.svg";
import svg9 from "../../img/assets/Servicepages/regularity/Subtract.svg";
import svg10 from "../../img/assets/Servicepages/regularity/Vector.svg";


const mainPoints = [
    {
      title: "Regulatory Consulting",
      icon: <img src={svg1} alt="svg2" className="point-icon" />,
      description: "We provide expert guidance to help companies navigate complex regulatory environments across various sectors. Our team ensures that businesses are aware of and comply with the legal requirements applicable to their operations, avoiding potential regulatory pitfalls and ensuring their activities are legally sound and ethically responsible."
    },
    {
      title: "Compliance Auditing",
      icon: <img src={svg2} alt="svg2" className="point-icon" />,
      description: "We conduct thorough reviews and audits of company operations to identify areas where they may be non-compliant with legal or regulatory standards. Our audit process helps businesses pinpoint gaps or weaknesses in their compliance framework, and we offer actionable recommendations for improving compliance practices and minimizing risks."
    },
       {
      title: "Policy Development",
      icon: <img src={svg3} alt="svg2" className="point-icon" />,
      description: "We assist in the creation, development, and implementation of compliance policies that align with local and international laws, as well as industry best practices. Our services include drafting clear and concise policies that outline the company's legal and ethical obligations, ensuring that employees and stakeholders are aware of and adhere to these standards."
        },
    {
      title: "Tax Consulting and Financial Compliance",
      icon: <img src={svg4} alt="svg2" className="point-icon" />,
      description: "We provide in-depth guidance on tax laws, regulations, and financial reporting requirements to help businesses achieve tax compliance and optimize financial operations. Our tax consulting services include reviewing tax obligations, advising on tax-efficient strategies, and ensuring businesses meet their reporting and payment requirements under local tax laws."
    },
    {
      title: "Drafting MOL Policies and Compliance as Required by Central Bank Authorities",
      icon: <img src={svg5} alt="svg2" className="point-icon" />,
      description: "Our services also include drafting policies and compliance documentation tailored to the requirements set by the Ministry of Labour (MOL) and central bank authorities. We help businesses prepare the necessary documents, policies, and procedures to ensure full compliance with labor laws, banking regulations, and other industry-specific requirements mandated by regulatory bodies."
    },
    {
      title: "Compliance Training and Workshops",
      icon: <img src={svg6} alt="svg2" className="point-icon" />,
      description: "We provide training sessions for employees and management to ensure they understand the importance of compliance and how to implement the company's compliance policies in their daily operations. Our workshops help foster a culture of compliance within organizations, reducing the likelihood of inadvertent violations."
    },
    {
      title: "Risk Management and Mitigation",
      icon: <img src={svg7} alt="svg2" className="point-icon" />,
      description: "We help companies identify potential compliance risks and develop strategies to mitigate those risks. By conducting comprehensive risk assessments, we guide businesses in managing legal risks and reducing exposure to penalties or litigation."
    },
    {
      title: "Regulatory Reporting and Documentation",
      icon: <img src={svg8} alt="svg2" className="point-icon" />,
      description: "We assist companies in preparing and submitting required regulatory reports and filings, ensuring they meet deadlines and fulfill all reporting obligations in accordance with applicable laws. Our team ensures that documentation is thorough, accurate, and compliant with regulatory standards."
    },
    {
      title: "Licensing and Permits",
      icon: <img src={svg9} alt="svg2" className="point-icon" />,
      description: "We provide support in obtaining and renewing necessary licenses and permits to ensure that companies operate legally within their industry. Whether it's securing business licenses, operating permits, or industry-specific certifications, we assist in the application and renewal processes to ensure compliance with local authorities."
    },
    {
      title: "Regulatory Representation and Advocacy",
      icon: <img src={svg10} alt="svg2" className="point-icon" />,
      description: "We represent clients in dealings with regulatory authorities, advocating on their behalf during inspections, audits, and reviews. Our team ensures that the company’s position is clearly presented and that their compliance is upheld during regulatory interactions."
    }
     
    
  ];

function MainPointsSection() {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const calculateMaxScroll = () => {
      setMaxScroll(scrollContainer.scrollHeight - scrollContainer.clientHeight);
    };

    const handleScroll = () => {
      setScrollPosition(scrollContainer.scrollTop);
    };

    calculateMaxScroll();
    scrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateMaxScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateMaxScroll);
    };
  }, []);

  const thumbPosition = maxScroll > 0 
    ? (scrollPosition / maxScroll) * (100 - (16 * 100) / 300)
    : 0;

  return (
  <section className="main-points-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="m-image-container">
            <img
              src={L12}
              alt="Corporate services"
              className="building-image"
            />
          </div>

          <div className="text-content">
            <h2>Main Points</h2>
            
            <div className="scroll-wrapper">
              <div ref={scrollContainerRef} className="scroll-container">
                {mainPoints.map((point, index) => (
                  <div key={index} className="point-item">
                    <div className="point-header">
                      {point.icon}
                      <h3 className="point-title">{point.title}</h3>
                    </div>
                    <p className="point-description">{point.description}</p>
                  </div>
                ))}
              </div>
              <div className="fade-effect" />
            </div>


            <div className="custom-scrollbar">
              <div className="scroll-track">
                <div 
                  className="scroll-thumb"
                  style={{ top: `${thumbPosition}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function RegulatoryandLegalCompliance() {


  // ===============================================
const [activeFaq, setActiveFaq] = useState(null);

const toggleFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

const faqItems = [
  {
    question: ". Why is legal compliance important for businesses?",
    answer: "It helps avoid fines, lawsuits, and reputational harm while ensuring your business operates legally."
  },
  {
    question: "What areas of compliance do you cover?",
    answer: "We cover industry-specific regulations, employment law, data protection, health and safety, and more."
  },
  {
    question: "Can you help with licensing and permits?",
    answer: "Yes. We assist with applications, renewals, and ensuring your operations meet all licensing conditions."
  },
  {
    question: "Do you offer compliance audits?",
    answer: "Yes. We conduct audits to identify gaps, improve policies, and avoid regulatory risks."
  },
  {
    question: "How often should I update my compliance policies?",
    answer: "Policies should be reviewed annually or whenever there’s a major legal or business change."
  },
  {
    question: "Do you provide employee training for compliance?",
    answer: "Yes. We offer workshops and materials to train your staff on legal responsibilities and best practices."
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

              <p>At Nubis Legal Consultancy, we offer specialized services to help businesses ensure compliance with relevant laws, regulations, and industry standards. Our goal is to reduce legal risks, minimize penalties, and promote responsible business practices that support sustainable growth. We provide tailored compliance solutions based on your industry and operational needs, including assistance with licensing, reporting requirements, data protection, environmental regulations, labor laws, and corporate governance.</p>
            </div>
          
          <div className="service-description-blocks">
            <img src={L12} alt="About Us 2" />
          </div>
          </div>
        
      </section>


{/* -- Main Point Section -- */}
      <MainPointsSection />


{/* -- service-data Section -- */}


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

export default RegulatoryandLegalCompliance;