import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Personal Website. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
