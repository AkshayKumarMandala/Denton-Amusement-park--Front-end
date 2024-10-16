import React, { useEffect, useState } from 'react';
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
    fetch('/api/services')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
