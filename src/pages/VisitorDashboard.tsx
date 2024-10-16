import React, { useState } from 'react';
import './App.css';
import './index.css';

const VisitorDashboard: React.FC = () => {
  const [disability, setDisability] = useState('');
  const [allocatedRide, setAllocatedRide] = useState('');

  const requestRide = () => {
    // For simplicity, hardcoding rides
    const ride = disability === 'mobility' ? 'Wheelchair-Friendly Coaster' : 'Standard Ride';
    setAllocatedRide(ride);
  };

  return (
    <div>
      <h2>Visitor Dashboard</h2>
      <label>
        Select your disability type:
        <select value={disability} onChange={e => setDisability(e.target.value)}>
          <option value="">None</option>
          <option value="mobility">Mobility Issues</option>
          <option value="sensory">Sensory Issues</option>
        </select>
      </label>
      <button onClick={requestRide}>Request Ride</button>
      {allocatedRide && <p>Allocated Ride: {allocatedRide}</p>}
    </div>
  );
};

export default VisitorDashboard;
