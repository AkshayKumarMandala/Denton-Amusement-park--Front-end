import React, { useState } from 'react';
import './App.css';
import './index.css';

const AdminDashboard: React.FC = () => {
  const [visitorRequests, setVisitorRequests] = useState([
    { id: 1, name: 'Visitor 1', request: 'Wheelchair assistance' },
    { id: 2, name: 'Visitor 2', request: 'Sensory-friendly guide' }
  ]);

  const respondToRequest = (id: number) => {
    alert(`Responding to request from Visitor ${id}`);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {visitorRequests.map(visitor => (
          <li key={visitor.id}>
            {visitor.name} - {visitor.request} 
            <button onClick={() => respondToRequest(visitor.id)}>Respond</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
