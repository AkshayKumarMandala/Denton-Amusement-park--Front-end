import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './index.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/visitor">Visitor Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
