import React from 'react';
import Navbar from './Navbar';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <Navbar />
    </header>
  );
}

export default Header;
