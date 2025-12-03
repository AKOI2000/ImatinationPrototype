import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo-box">
          <img src="/public/IMATINATIONS STUDIO.png" alt="" />
        </NavLink>

       <div className="nav-buttons">
       <a href="#" className="btn btn-sub">
          Book a shoot
        </a>

        <div
          className={`nav-hamburger ${isActive ? "active" : ""}`}
          onClick={() => setIsActive((active) => !active)}
        >
          <span className="span-1"></span>
          <span className="span-2"></span>
          <span className="span-3"></span>
        </div>
       </div>
      </div>

      <div className={`navbar-text-container ${isActive ? "active" : ""}`}>
        <div
          className={`nav-full-hamburger ${isActive ? "active" : ""}`}
          onClick={() => setIsActive((active) => !active)}
        >
          <span className="span-1"></span>
          <span className="span-2"></span>
          <span className="span-3"></span>
        </div>
        <nav className="navbar-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </nav>
        <a href="mailto:Hello.imatinations@gmail.com" className="nav-cta">
          Book a shoot
        </a>
      </div>
    </>
  );
}

export default Navbar;
