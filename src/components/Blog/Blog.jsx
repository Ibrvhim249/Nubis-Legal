import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';
import blogHero from '../img/assets/Blog/blog image .jpg';
// import { LuSend } from "react-icons/lu";


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

  useEffect(() => {
    if (!loading) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const timer = setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 300);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [loading]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      {/* -- Hero Section -- */}
      <section className="hero" aria-label="Blog introduction">
        <div className="hero-image-container">
          <img 
            src={blogHero} 
            alt="" 
            className="hero-bg"
            role="presentation"
            loading="lazy"
          />
          <div className="hero-overlay" aria-hidden="true"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Your Trusted Source<br aria-hidden="true" />for Legal Knowledge and Guidance</span>
          </h1>
          <p className="hero-subtitle">
            Stay Informed with the Latest Legal Trends, Expert Advice, and Practical Solutions to Navigate Your Legal Challenges
          </p>
        </div>
      </section>

      {/* -- Blog Section -- */}
      <section className="blog-section" aria-label="Blog posts">
        <header className="blog-page-header">
          <h2 className="blog-page-title">Blog</h2>
        </header>

        {loading ? (
          <p className="loading-message">Loading posts...</p>
        ) : posts.length > 0 ? (
          <div className="blog-posts-list">
            {posts.map((post) => (
              <React.Fragment key={post.id}>
                <div className="divider" role="separator" aria-hidden="true"></div>
                <article 
                  id={`post-${post.id}`}
                  className="blog-post"
                  aria-labelledby={`post-title-${post.id}`}
                >
                  <div className="blog-image">
                    <img
                      src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/400x250'}
                      alt={post.title.rendered}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="blog-content">
                    <h3 id={`post-title-${post.id}`} className="blog-title">
                      {post.title.rendered}
                    </h3>
                    <time 
                      dateTime={post.date} 
                      className="blog-date"
                    >
                      {formatDate(post.date)}
                    </time>
                    <div 
                      className="blog-excerpt" 
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      aria-label="Post excerpt" 
                    />
                    <div className="in-divider" role="separator" aria-hidden="true"></div>
                  </div>
                </article>
                <div className="bottom-divider" role="separator" aria-hidden="true"></div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p className="no-posts-message">No blog posts available.</p>
        )}
      </section>
    </>
  );
}

export default Blog;