import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import FeatureCard from '../Animations/FeatureCard.jsx';
import PropTypes from 'prop-types';
import imagesection from '../img/assets/Home/Scale icon.svg';


const WORDPRESS_API_URL = 'https://nubislegal.com/wp-json/wp/v2/posts?_embed&order=desc&orderby=date';

// Internal Components
import ImageComponent from '../ImageComponent/ImageComponent';
import { LuArrowUpRight } from "react-icons/lu";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// Assets
import homeHero from '../img/assets/Home/Home page nubis image .jpg';
import backgroundImage from '../img/assets/Home/scrollable banner home page .png';
import ceo from "../img/assets/Home/ceo home page.png";
import aboutUsImg from '../img/assets/Home/New about us section img  Home page.png';
import svg1 from '../img/assets/Home/Contract Drafting and Review mac.svg';
import svg2 from '../img/assets/Home/Legal Consultation mac.svg';
import svg3 from '../img/assets/Home/Company Formation and Registration mac.svg';
import svg4 from '../img/assets/Home/Trademark and Intellectual Property Registration mac.svg';
import svg5 from '../img/assets/Home/Company Formation and Registration mac.svg';
import svg6 from '../img/assets/Home/Debt Collection mac.svg';
import svg7 from '../img/assets/Home/Litigation and Court Documents mac .svg';
import svg8 from '../img/assets/Home/Dispute Resolution mac .svg';
import svg9 from '../img/assets/Home/Contract Review and Analysis mac.svg';
import svg10 from '../img/assets/Home/Real Estate Legal Support mac .svg';
import servicecardbg from "../img/assets/Home/pexels-sora-shimazaki-5668882.png";

// Features icons
import icon1 from '../img/assets/final media/our features icon SVG/Experienced Legal Professionals .svg';
import icon2 from '../img/assets/final media/our features icon SVG/Client-Focused Approach.svg';
import icon3 from '../img/assets/final media/our features icon SVG/Modern Legal Solutions.svg';
import icon4 from '../img/assets/final media/our features icon SVG/Transparent Pricing .svg';

// Styles
import './Home.css';

function ServiceItem({ title, description, text, path, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="service-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundImage: `url(${servicecardbg})` }}
    >
      <div className="service-image-overlay"></div>
      <div className="service-content">
        <div className="service-icon">
          <img src={icon} alt={title} className="service-icon-img" />
        </div>
        
        <div className="service-text">
          <h3>{title}</h3>
          <div className={`service-details ${isHovered ? 'visible' : ''}`}>
            <p>{description}</p>
            <p>{text}</p>
          </div>
        </div>

        <Link className="services-section-link" to={path}>
          <LuArrowUpRight className={`arrow-icon ${isHovered ? 'hovered' : ''}`} />
        </Link>
      </div>
    </div>
  );
}

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const services = [
    {
      title: "Regulatory and Legal Compliance",
      description: "At Nubis Legal Consultancy, we offer specialized services to help businesses ensure compliance with relevant laws, regulations, and industry standards. Our goal is to reduce legal risks, minimize penalties, and promote responsible business practices.",
      path: "/services/compliance",

      icon: svg1
    },
    {
      title: "Legal Consulting",
      description: "We provide comprehensive legal consulting services tailored to the needs of individuals and businesses, with a focus on delivering customized and precise solutions.",

      path: "/services/legal-consultation",
      icon: svg2
    },
    {
      title: "Company Formation and Registration",
      description: "Our firm provides comprehensive support for establishing and registering new companies, offering tailored solutions that ensure full legal compliance and streamline the setup process. ",
   
      path: "/services/companyformation",
      icon: svg3
    },
    {
      title: "Trademark Registration and Intellectual Property",
      description: "We offer a full range of intellectual property services to help clients secure, protect, and leverage their trademarks, copyrights, and other intellectual assets. ",
      path: "/services/trademark-registration",
      icon: svg4
    },
    {
      title: "Preparation of Legal Documents",
      description: "Our legal document preparation services ensure compliance with all legal requirements with precision and professionalism.",

      path: "/services/document-preparation",
      icon: svg5
    },
    {
      title: "Debt Collection",
      description: "At Nubis Legal Consultancy, we provide comprehensive debt collection services to help our clients recover unpaid debts efficiently and effectively. Our team leverages legal expertise and strategic solutions to ensure the timely recovery of outstanding financial claims.",

      path: "/services/debt-collection",
      icon: svg6
    },
    {
      title: "Litigation and Preparation of Court Documents",

      description: "We provide a wide range of litigation services designed to guide and support our clients through every stage of the legal process. ",
      path: "/services/litigation",
      icon: svg7
    },
    {
      title: "Dispute Resolution",
      description: "At Nubis Legal Consultancy, we specialize in helping clients navigate and resolve disputes through tailored, strategic approaches, ensuring that they achieve the most effective and efficient solutions.",

      path: "/services/dispute-resolution",
      icon: svg8
    },
    {
      title: "Preparation, Review, and Analysis of Contracts",
      description: "Our firm provides a full suite of services for contract preparation, review, and analysis, ensuring transparency and safeguarding our clients' interests. ",
    
      path: "/services/contract-review",
      icon: svg9
    },
    {
      title: "Notary Services",
      description: "At Nubis Legal Consultancy, we provide a range of notary services to ensure the legal validity and authenticity of various documents. Our expert notaries are committed to delivering reliable and legally binding certifications. ",

      path: "/services/real-estate",
      icon: svg10
    }
  ];

  useEffect(() => {
    axios.get(WORDPRESS_API_URL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setShowQuoteModal(false);
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0]?.offsetWidth || 0;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current && posts.length > 0) {
        const slideWidth = sliderRef.current.children[0]?.offsetWidth || 0;
        const scrollPosition = sliderRef.current.scrollLeft;
        const newActiveSlide = Math.round(scrollPosition / slideWidth);
        setActiveSlide(newActiveSlide);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, [posts.length]);
  return (
    <>
{/* -- Hero Section -- */}
<section className="hero">
  <div className="hero-image-container">
    <img 
      src={homeHero} 
      alt="Decorative background" 
      className="hero-bg"
      role="presentation" // For screen readers (since it's decorative)
    />
    <div className="hero-overlay"></div>
  </div>
  <div className="hero-content">
    <h1 className="hero-title">
      <span>Modern Legal Solutions<br /> For a Complex World</span>
    
      
    </h1>
    <p className="hero-subtitle">
    Leveraging Modern Legal Expertise and Innovative Approaches to Simplify Complex Challenges and Achieve Your Goals
    </p>
    {/* <div className="hero-cta">
      <button className="cta-button">Get Started</button>
    </div> */}
  </div>
</section>





     {/* -- About Us Section -- */}
     <section className="about-us">
        <div className="about-us-container">
          <div className="about-us-content">
            {/* Left Image Blocks */}
            <div className="about-us-blocks">

              
                <img src={aboutUsImg} alt="About Us 2" />
              
          </div>

            {/* Right Text Section */}
            <div className="about-us-text">
              <h2 className="about-us-title">ABOUT US</h2>
<p>&quot;At Nubis legal consultancy, we combine legal expertise with a modern, client-focused approach. Our team of seasoned professionals with experience in corporate, commercial, and civil law is dedicated to providing innovative, tailored solutions for businesses and individuals alike. We pride ourselves on delivering clarity, efficiency, and results in every case.&quot;
<br />
When you choose Nubis, you&apos;re choosing a strategic partner committed to easing your burden, navigating the complexity of your matter, and achieving success...
</p>
<Link to="/about-us" className="about-us-btn">Learn more</Link>
            </div>
            
          </div>
          
        </div>
      </section>



      {/* -- Features Section -- */}

<section className="features">
  <div className='features-container'>
    <div className="feature-header">
      <h2>
        <span className="features-title">OUR FEATURES</span>
      </h2>
    </div>
    <div className="features-layout">
      {[
        { 
          icon: icon1,
          title: "Modern Legal Solutions",
          text: "uses technology to improve efficiency, cut costs, and provide faster, more personalized legal services."
        },
            {
              icon: icon2,
              title: "Experienced Legal Professionals",
              text: "deliver expert legal guidance with strong advocacy and tailored solutions, ensuring successful outcomes for clients.",
            },
            {
              icon:  icon3,
              title: "Client-Focused Approach",
              text: "centers on understanding and addressing clients' unique needs. It emphasizes personalized solutions, clear communication, and achieving optimal results.",
            },
            { 
              icon: icon4,
              title: "Transparent Pricing",
              text: "ensures clients understand the full cost of services upfront. It offers clear, predictable pricing with no hidden fees, fostering trust and financial clarity.",
            },
          ].map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </div>
    </section>



           {/* -- CEO Section -- */}
     <section className="ceo">
        <div className="ceo-container">
          
           {/* Right Text Section */}
           <div className="ceo-text">
                <p>&quot; The legal world is constantly evolving, and so are we. At Nubis Legal Consultancy, we believe that every individual and business deserves access to top-tier legal services, we believe that legal services should be more than just transactions—they should be partnerships built on trust, clarity, and commitment. We founded this firm to provide businesses and individuals with reliable, strategic, and results-driven legal solutions...&quot;</p>
                <h2 className="ceo-title">CEO</h2>
            </div>
            
          
           {/* Left Image Blocks */}
           <div className="ceo-blocks">
          
              
          <img src={ceo} alt="About Us 2" />
        
          </div>
      </div>



          </section>



      {/* -- meta Section -- */}
      
      <ImageComponent
  headings={[
    "Your Legal Ally, Every Step of the Way",
    "Modern Legal Solutions for a Complex World",
    "Simplifying Legal Challenges, Delivering Results"
  ]}
  imageUrl={backgroundImage}
/>





           {/* -- Services Section -- */}
      <section className="services" id="services">
        <div className="s-container">
          <div className="services-header">
            <h2 className="services-title">Our Services</h2>
          </div>

          <div className="services-scroll-container">
            <div className="services-scroll-wrapper">
              {services.map((service, index) => (
                <div key={index} className="service-item-wrapper">
                  <ServiceItem
                    title={service.title}
                    description={service.description}
                    
                    path={service.path}
                    icon={service.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




      <section className="image-section">
  <div
    className="image-section-bg">
    <div className="image-section-overlay"></div>
    <div className="text-container">
      <h2>Nubis Legal Where Expertise <br />Meets Innovation</h2>
    </div>
    <img className="circle"
    src={imagesection}
    />
  </div>
</section>




{/* =-=-==-=-=-==--=-=-==-=-=-==--=-=-==-=-=-==--=-=-==-=-=-==--=-=-==-=-=-==-- */}



<section className="blog-section" id="blog">
        {/* Blog Header */}
        <div className="blog-section-header">
          <h2 className="blog-section-title">
            OUR <span className="uppercase">BLOG</span>
          </h2>
        </div>

        {loading ? (
          <p className="text-center py-8">Loading posts...</p>
        ) : posts.length > 0 ? (
          <>
            <div className="blog-section-grid" ref={sliderRef}>
              {posts.map((post) => (
                <div 
                  key={post.id} 
                  className="blog-section-item block bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 cursor-pointer"
                >
                  <div className="blog-section-image rounded-lg overflow-hidden mb-4">
                    <img
                      src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/150'}
                      alt={post.title.rendered}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <span className="blog-section-date">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-4">{post.title.rendered}</h3>
                  <div 
                    className="text-base text-gray-700 leading-relaxed mb-4" 
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                  />
                 <a 
  href={`/blog#post-${post.id}`}
  className="read-more-link flex items-center"
  aria-label={`Read more about ${post.title.rendered}`}
>
  READ MORE <IoIosArrowDroprightCircle className="ml-1 text-2xl" />
</a>
                </div>
              ))}
            </div>
            
            <div className="dots-layout-container flex justify-center items-center mt-4 mb-12 gap-2">
  {posts.map((_, index) =>
    index === activeSlide ? (
      <div
        key={index}
        className="dot-progress-bar"
        aria-label={`Active slide ${index + 1}`}
      ></div>
    ) : (
      <button
        key={index}
        className="dot-indicator"
        onClick={() => scrollToSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    )
  )}
</div>

          </>
        ) : (
          <p className="text-center py-8">No posts available.</p>
        )}
      </section>



{/* -- Quote Trigger Section -- */}
<section className="popup-section">
  <div className="popup-section-overlay"></div>
  <div className="popup-section-content">
    <h2>Do You Need<br />Legal Consultation</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Lorem ipsum dolor sit amet.
    </p>
    <button 
      className="popup-section-btn" 
      onClick={() => setShowQuoteModal(true)}
    >
      Get Quote
    </button>
  </div>
</section>

{/* -- Quote Modal -- */}
{showQuoteModal && (
  <div className="modal-overlay" onClick={() => setShowQuoteModal(false)}>
    <div className="modal-quote-container" onClick={(e) => e.stopPropagation()}>
      <div className="modal-quote-form">
        <div className="modal-form-header">
          <h2>Get Your Quote</h2>
          <p>Legal Assistance included with Lowest price guarantee</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="modal-form__row">
            <div className="modal-form__group">
              <label className="modal-quote-label" htmlFor="firstName">Full Name</label>
              <input 
                className="modal-quote-input" 
                type="text" 
                id="firstName" 
                name="firstName" 
                required 
              />
            </div>
          </div>

          <div className="modal-form__row">
            <div className="modal-form__group">
              <label className="modal-quote-label" htmlFor="email">Email</label>
              <input 
                className="modal-quote-input" 
                type="email" 
                id="email" 
                name="email" 
                required 
              />
            </div>
          </div>
          <div className="modal-form__group">
              <label className="modal-quote-label" htmlFor="phone">Phone Number</label>
              <input 
                className="modal-quote-input" 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
              />
            </div>
          <div className="modal-form__group">
            <label className="modal-quote-label" htmlFor="quote">Leave a quote</label>
            <textarea 
              className="modal-quote-textarea" 
              id="quote" 
              name="quote" 
              required
            ></textarea>
          </div>

          <button type="submit" className="modal-quote-submit">
            Get Quote
          </button>
        </form>
      </div>
      
      <div className="modal-image-section">
        <img src={aboutUsImg} alt="Legal consultation" />
      </div>
    </div>
  </div>
)}
    </>
  );
}

export default Home;

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
};