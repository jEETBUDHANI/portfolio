import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav>
      <NavContent />
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </nav>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Jeetesh</h2>
    <div>
      <a href='#home' onClick={() => setMenuOpen && setMenuOpen(false)}>Home</a>
      <a href='#work' onClick={() => setMenuOpen && setMenuOpen(false)}>Work</a>
      <a href='#timeline' onClick={() => setMenuOpen && setMenuOpen(false)}>Experience</a>
      <a href='#services' onClick={() => setMenuOpen && setMenuOpen(false)}>Services</a>
      <a href='#testimonial' onClick={() => setMenuOpen && setMenuOpen(false)}>Testimonial</a>
      <a href='#contact' onClick={() => setMenuOpen && setMenuOpen(false)}>Contact</a>
    </div>
    <a href='mailto:offical.6packprogrammer@gmail.com'>
      <button>Email</button>
    </a>
  </>
);

export default Header;
