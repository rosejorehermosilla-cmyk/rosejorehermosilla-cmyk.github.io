import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">🌹Rose🌹</div>
      <nav className="navbar-links">
        <Link to="/profile" className="nav-btn">Profile</Link>
        <Link to="/about" className="nav-btn">About</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
      </nav>
    </header>
  );
}