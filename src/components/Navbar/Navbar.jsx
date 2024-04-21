import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { CiLogin } from "react-icons/ci";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { MdOutlineLocalOffer } from "react-icons/md";

function Navbar({ isLogged }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-nav">
        JobFinder
      </Link>
      <div>
        <Link to="/jobs" className="nav-link">
          Offres d'emploi <MdOutlineLocalOffer className='icon'/>
        </Link>
        <Link to="/register" className="nav-link">
          S'inscrire <PiUserCirclePlusLight className='icon' />
        </Link>
        
        {!isLogged ? (
          <Link to="/login" className="nav-link">
            Se connecter <CiLogin className="icon" />
          </Link>
        ) : (
          <Link to="/authProfile" className="nav-link">
            Profile
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
