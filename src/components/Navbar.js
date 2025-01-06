import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Menu ▼
          </button>
          {isDropdownOpen && (
            <ul className="dropdown">
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
