// External Libraries
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FeatureCard from '../Animations/FeatureCard.jsx';

const WORDPRESS_API_URL = 'https://nubislegal.com/wp-json/wp/v2/posts?_embed&order=desc&orderby=date';

// Internal Components
import ImageComponent from '../ImageComponent/ImageComponent';
import { LuArrowUpRight } from "react-icons/lu";
import { IoMdQuote } from "react-icons/io";




// Assets
import backgroundImage from '../img/assets/Home/scrollable banner home page .png';
import ceo from "../img/assets/Home/ceo home page .svg"
import aboutUsImg from '../img/assets/Home/about us section in home page .png';
import svg1 from '../img/assets/Home/Contract Drafting and Review mac.svg'
import svg2 from '../img/assets/Home/Legal Consultation mac.svg'
import svg3 from '../img/assets/Home/Company Formation and Registration mac.svg'
import svg4 from '../img/assets/Home/Trademark and Intellectual Property Registration mac.svg'
import svg5 from '../img/assets/Home/Company Formation and Registration mac.svg'
import svg6 from '../img/assets/Home/Debt Collection mac.svg'
import svg7 from '../img/assets/Home/Litigation and Court Documents mac .svg'
import svg8 from '../img/assets/Home/Dispute Resolution mac .svg'
import svg9 from '../img/assets/Home/Contract Review and Analysis mac.svg'
import svg10 from '../img/assets/Home/Real Estate Legal Support mac .svg'
import svg11 from '../img/assets/Home/Tax and Financial Legal Services mac.svg'
import svg12 from '../img/assets/Home/Regulatory and Legal Compliance mac.svg'

//features icons
import icon1 from '../img/assets/final media/our features icon SVG/Experienced Legal Professionals .svg';
import icon2 from '../img/assets/final media/our features icon SVG/Client-Focused Approach.svg';
import icon3 from '../img/assets/final media/our features icon SVG/Modern Legal Solutions.svg';
import icon4 from '../img/assets/final media/our features icon SVG/Transparent Pricing .svg';



// Styles
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add this useEffect hook
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
 
  const testimonials = [
    {
      name: "Maria Smantha",
      role: "Web Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis.",
    },
    {
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      testimonial:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      name: "John Smith",
      role: "Marketing Specialist",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      testimonial:
        "At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia mollitia animi id laborum et dolorum fuga.",
    },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
{/* -- Hero Section -- */}
<section className="hero">
  <div className="hero-image-container">
    <img 
      src={backgroundImage} 
      alt="Decorative background" 
      className="hero-bg"
      role="presentation" // For screen readers (since it's decorative)
    />
    <div className="hero-overlay"></div>
  </div>
  <div className="hero-content container">
    <h1 className="hero-title">
      <span className="highlight">NUBIS LEGAL CONSULTANCY SERVICES.<br /> YOUR TRUSTED LEGAL PARTNER.</span>
      
      
    </h1>
    <p className="hero-subtitle">
    Where Innovation Meets Expertise <br />Delivering Smarter Legal Solutions
    </p>
    <div className="hero-cta">
      <button className="cta-button">Get Started</button>
    </div>
  </div>
</section>





     {/* -- About Us Section -- */}
     <section className="about-us" id="about">
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
          title: "Experienced Legal Professionals",
          text: "Decades of combined expertise."
        },
            {
              icon: icon2,
              title: "Client-Focused Approach",
              text: "Tailored solutions for your unique needs.",
            },
            {
              icon:  icon3,
              title: "Modern Legal Solutions",
              text: "Leveraging technology for efficiency",
            },
            { 
              icon: icon4,
              title: "Transparent Pricing",
              text: "Clear, upfront costs with no hidden fees",
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
     <section className="ceo" id="ceo">
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
{/* -- Services Section -- */}
<section className="services" id="services">
  <div className="container mx-auto px-4 py-16">
    {/* Services Header */}
    <div className="services-header flex items-center mb-12">
      <span className="w-1 h-10 bg-gray-400 mr-3"></span>
      <h2 className="services-title">
        Our Services
      </h2>
    </div>

    {/* Scroll Container */}
    <div className="scroll-container">
      {[
              {
                title: "Contract Drafting and Review",
                description: "Clear, Strong, and Legally Sound Contracts for Your Business, Maximize business value from contracts.",
                text:" with experts in strategy, implementation, and operational support.",
                path: "/services/contract-drafting",
                icon: svg1
              },
              {
                title: "Legal Consultation",
                description: "Expert Legal Advice, Personalized for You",
                text:' and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/legal-consultation",
                icon: svg2
              },
              {
                title: "Company Formation and Registration",
                description: "Start Your Business the Right Way",
                text:'Take advantage of well-deployed technology and work with the experts at Nubis.',
                path: "/services/companyformation",
                icon: svg3
              },
              {
                title: "Trademark and Intellectual Property Registration",
                description: "Protect Your Brand and Innovations",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/trademark-registration",
                icon: svg4
              },
              {
                title: "Legal Document Preparation",
                description: "Protect your digital assets with enterprise-grade security",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/document-preparation",
                icon: svg5
              },
              {
                title: "Debt Collection",
                description: "Transform your business with data-driven decisions",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/debt-collection",
                icon: svg6
              },
              {
                title: "Litigation and Court Documents",
                description: "Full-stack technical support and maintenance",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/litigation",
                icon: svg7
              },
              {
                title: "Dispute Resolution",
                description: "Protect your digital assets with enterprise-grade security",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/dispute-resolution",
                icon: svg8
              },
              {
                title: "Contract Review and Analysis",
                description: "Transform your business with data-driven decisions",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/contract-review",
                icon: svg9
              },
              {
                title: "Real Estate Legal Support",
                description: "Full-stack technical support and maintenance",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/real-estate",
                icon: svg10
              },
              {
                title: "Tax and Financial Legal Services",
                description: "Protect your digital assets with enterprise-grade security",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/tax-services",
                icon: svg11
              },
              {
                title: "Regulatory and Legal Compliance",
                description: "Protect your digital assets with enterprise-grade security",
                text:'and then provide legal services to help these teams execute their new strategies quickly and with ease.',
                path: "/services/compliance",
                icon: svg12
              },
            ].map((service, index) => (
              <div key={index}>
                <div className="service-item  ">
                  <div className="service-icon flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-lg mb-4">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-full h-full p-2 object-contain"
                      style={{ color: "white" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{service.description}</p>
                  <p className="text-base text-gray-700 leading-relaxed">{service.text}</p>
                  <Link className='services-section-link'
                    to={service.path} 
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <LuArrowUpRight />
                  </Link>
                </div>
              </div>
            ))}
    </div>
  </div>
</section>





      <section className="image-section">
  <div
    className="image-section-bg"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="overlay"></div>
    <div className="text-container">
      <h1>Nubis Legal</h1>
      <h2>Where Expertise Meets Innovation</h2>
    </div>
    <div className="circle"></div>
  </div>
</section>








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
    <div className="blog-section-grid">
      {posts.map((post) => (
        <div key={post.id} className="blog-section-item bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300">
          <div className="blog-section-image rounded-lg overflow-hidden mb-4">
            <img
              src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/150'}
              alt={post.title.rendered}
              className="w-full h-40 object-cover"
            />
          </div>
          <span className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString()}
          </span>
          <h3 className="text-xl font-bold mt-2 mb-4">{post.title.rendered}</h3>
          <div 
            className="text-base text-gray-700 leading-relaxed mb-4" 
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
          />
          <a 
            href={post.link} 
            className="read-more flex items-center gap-1 text-primary hover:text-primary-dark"
          >
            Read more
            <span className="read-more-icon">
              <LuArrowUpRight />
            </span>
          </a>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center py-8">No posts available.</p>
  )}
</section>





{/* ----------- Testimonials ----------- */}
<section className="testimonials">
  <div className="container my-5 py-5">
    <h1 className="testimonials-title">TESTIMONIAL</h1>

    <div className="testimonial-wrapper position-relative">
      <div className="position-absolute top-0 start-50 translate-middle">
        <img
          src={testimonials[activeTestimonial].image}
          className="avatar rounded-circle border-4 border-white"
          alt={testimonials[activeTestimonial].name}
          style={{ width: '96px', height: '96px', objectFit: 'cover' }}
        />
      </div>

      <div className="testimonial-card bg-primary rounded-4 p-5 pt-5 position-relative">
        <span className="quote-mark fs-1 text-warning text-center d-block mb-3"><IoMdQuote />
        </span>
        
        <div className="testimonial-content">
          <p className="testimonial-text text-white text-center lh-base mb-0">
            {testimonials[activeTestimonial].testimonial}
          </p>
          <div className="client-info text-center mt-4">
            <h4 className="client-name text-white mb-1">
              {testimonials[activeTestimonial].name}
            </h4>
            <p className="client-role text-light mb-0">
              {testimonials[activeTestimonial].role}
            </p>
          </div>
        </div>

        <div className="dots d-flex justify-content-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <span 
              key={index}
              className={`dot rounded-pill ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
              style={{
                width: index === activeTestimonial ? '32px' : '8px',
                height: '8px',
                backgroundColor: index === activeTestimonial ? '#2563eb' : '#e5e5e5',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  );
}

export default Home;