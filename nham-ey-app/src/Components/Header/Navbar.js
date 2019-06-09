import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red">
      <div className="container">
        <a href="#" className="brand-logo">
          <i className="material-icons">gesture</i>
        </a>
        <ul className="right">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
