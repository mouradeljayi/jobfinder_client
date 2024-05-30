import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { CiLogin } from "react-icons/ci";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";


function Navbar({ isLogged }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-nav">
        JobLink
      </Link>
      <div>
        <Link to="/" className="nav-link">
          Acceuil <IoHomeOutline className='home-icon' />
        </Link>
        <Link to="/jobs" className="nav-link">
          Offres d'emploi <MdOutlineLocalOffer className='icon' />
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
            Profile <FaRegUserCircle className='icon' />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
