import { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';
import backgroundImage from '../img/loading.png';
import { LuSend } from "react-icons/lu";


const WORDPRESS_API_URL = 'https://nubislegal.com/wp-json/wp/v2/posts?_embed&order=desc&orderby=date';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

{/* -- Blog Section -- */}
<section className="blog-section">
  <div className="blog-page-header">
    <h2>
      <span className="blog-page-title">Blog</span>
    </h2>
  </div>

  {loading ? (
    <p>Loading posts...</p>
  ) : posts.length > 0 ? (
    posts.map((post) => (
      <>
        <div className="divider"></div>
        <article key={post.id} className="blog-post">
          <div className="blog-image">
            <img 
              src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/400x250'} 
              alt={post.title.rendered} 
            />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">{post.title.rendered}</h3>
            <p className="blog-date">
              {new Date(post.date).toLocaleDateString('en-US')}
            </p>
            <div 
              className="blog-excerpt" 
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
            />
            <div className="in-divider"></div>
            <div className="blog-links-container">
              
              <a href={post.link} className="read-more">
                READ MORE
                <span className="read-more-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </span>
              </a>
            </div>
            
          </div>
          <a href={post.link} className="link-icon">
          <LuSend />
              </a>
              
        </article>
        <div className="bottom-divider"></div>
        
      </>
    ))
  ) : (
    <p>No posts available.</p>
  )}
</section>
    </>
  );
}

export default Blog;