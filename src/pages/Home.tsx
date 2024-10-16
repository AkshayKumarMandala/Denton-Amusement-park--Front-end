import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './index.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Denton Amusement Park</h1>
        <p>
          Experience the fun, adventure, and inclusivity at Denton Amusement Park, where everyone is welcome! 
          Explore accessible rides, sensory-friendly zones, and family-friendly entertainment.
        </p>
        <Link to="/services" className="btn-primary">Explore Services</Link>
      </header>

      <section className="features">
        <h2>Our Highlights</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Wheelchair-Friendly Pathways</h3>
            <p>Seamless and accessible paths throughout the park.</p>
          </div>
          <div className="feature-item">
            <h3>Sensory-Friendly Zones</h3>
            <p>Quiet areas for those with sensory sensitivities.</p>
          </div>
          <div className="feature-item">
            <h3>Inclusive Rides</h3>
            <p>Fun for all with inclusive rides designed for accessibility.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
