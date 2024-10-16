import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';

interface Service {
  id: number;
  name: string;
  description: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Fetch the services from the backend API
    axios.get('http://localhost:5000/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Explore the wide variety of services available at Denton Amusement Park.</p>
      </header>

      <section className="services-list">
        {services.length === 0 ? (
          <p>Loading services...</p>
        ) : (
          services.map(service => (
            <div key={service.id} className="service-item">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Services;
