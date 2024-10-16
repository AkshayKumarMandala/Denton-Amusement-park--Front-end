import React from 'react';
import { Link } from 'react-router-dom';

interface Service {
  id: string; // Assuming the ID is a string (Firebase generated)
  name: string;
  description: string;
}

interface HomeProps {
  services: Service[]; // Define the services prop
}

const Home: React.FC<HomeProps> = ({ services }) => {
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
        <h2 style={{ marginLeft: "150px" }}>Our Highlights</h2>
        <div className="features-grid">
          {services.length > 0 ? (
            services.map(service => (
              <div key={service.id} className="feature-item"> {/* Provide a unique key for each service */}
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))
          ) : (
            <p>No services available at the moment.</p> // Handle the case when there are no services
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
