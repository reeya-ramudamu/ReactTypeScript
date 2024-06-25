import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
import './Navbar.css'; // Importing the CSS file for styling


const Navbar: React.FC = () => {
  return (
    <>
      <nav className='navbar'>
        <h1 className="logo">LOGO</h1> 
        <ul className='nav-links'>
          <li>
            <Link  to="/">Home</Link>
          </li> 
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Project</Link>
          </li>
        </ul>
        <button className='login-button'>Login</button>
      </nav>
    </>
  );
};

export default Navbar;
